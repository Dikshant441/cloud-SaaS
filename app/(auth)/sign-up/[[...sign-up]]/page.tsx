import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      appearance={{
        elements: {
          rootBox: "w-full",
          card: "bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-6",
          headerTitle: "text-2xl font-bold text-white text-center",
          headerSubtitle: "text-gray-300 text-center",
          socialButtonsBlockButton:
            "bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all",
          socialButtonsBlockButtonText: "text-white font-medium",
          dividerLine: "bg-white/20",
          dividerText: "text-gray-400",
          formFieldLabel: "text-gray-200 font-medium",
          formFieldInput:
            "bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 rounded-lg",
          formButtonPrimary:
            "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-purple-500/25",
          footerActionLink: "text-purple-400 hover:text-purple-300 font-medium",
          footerActionText: "text-gray-400",
          identityPreviewEditButton: "text-purple-400 hover:text-purple-300",
          formFieldAction: "text-purple-400 hover:text-purple-300",
        },
        variables: {
          colorPrimary: "#9333ea",
          colorText: "#ffffff",
          colorTextSecondary: "#d1d5db",
          colorBackground: "transparent",
          colorInputBackground: "rgba(255, 255, 255, 0.1)",
          colorInputText: "#ffffff",
          borderRadius: "0.75rem",
        },
      }}
    />
  );
}
