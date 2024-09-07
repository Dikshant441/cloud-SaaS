import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center  mt-[6.7%]">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            formButtonPrimary:
              " hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
            card: "shadow-md border border-gray-200 rounded-md p-6 ",
            headerTitle: "text-3xl font-semibold text-center mb-4",
            headerSubtitle: "text-sm text-black mb-4",
          },
        }}
      />
      ;
    </div>
  );
}
