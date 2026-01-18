import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";

const prisma = new PrismaClient();

// Configuration
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request: NextRequest) {
  try {
    const { userId } = auth();

    // If user is not logged in, return empty array
    if (!userId) {
      return NextResponse.json([]);
    }

    // Only fetch videos belonging to the current user
    const videos = await prisma.video.findMany({
      where: { userId: userId },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching video from database" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id, publicId } = await request.json();

    if (!id || !publicId) {
      return NextResponse.json(
        { error: "Missing video id or publicId" },
        { status: 400 },
      );
    }

    // Verify video belongs to user before deleting
    const video = await prisma.video.findUnique({
      where: { id },
    });

    if (!video || video.userId !== userId) {
      return NextResponse.json(
        { error: "Video not found or unauthorized" },
        { status: 404 },
      );
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId, { resource_type: "video" });

    // Delete from Database
    await prisma.video.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Video deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Error deleting video" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
