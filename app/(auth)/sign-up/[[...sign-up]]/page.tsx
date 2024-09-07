import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center mt-[5%]">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
            card: "shadow-md border border-gray-200 rounded-md p-6",
            headerTitle: "text-3xl font-semibold text-center mb-4",
            headerSubtitle: "text-sm text-gray-500 mb-4",
          },
        }}
      />
    </div>
  );
}
