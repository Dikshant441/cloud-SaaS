import Image from "next/image";

export const metadata = {
  title: "CloudView Gallery - Sign In",
  description: "Compress, optimize, and manage your video library",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Image & Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12">
          {/* Hero Image */}
          <div className="mb-8">
            <Image
              src="/images/auth-hero.png"
              alt="CloudView Gallery"
              width={400}
              height={400}
              className="drop-shadow-2xl"
              priority
            />
          </div>

          {/* Branding Text */}
          <h1 className="text-4xl font-bold text-white mb-4 text-center">
            CloudView Gallery
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-md">
            Compress & optimize your videos with AI-powered technology
          </p>

          {/* Feature List */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 mr-3 text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Up to 70% smaller file sizes
            </div>
            <div className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 mr-3 text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Cloud storage with CDN delivery
            </div>
            <div className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 mr-3 text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Auto-playing video previews
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex flex-col items-center justify-center p-4 lg:p-8">
        {/* Mobile Header (only shows on small screens) */}
        <div className="lg:hidden text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            CloudView Gallery
          </h1>
          <p className="text-gray-300">Compress & optimize your videos</p>
        </div>

        {/* Auth Card Container */}
        <div className="w-full max-w-md">{children}</div>

        {/* Footer */}
        <div className="mt-8 text-gray-500 text-sm text-center">
          © 2026 CloudView Gallery. All rights reserved.
        </div>
      </div>
    </div>
  );
}
