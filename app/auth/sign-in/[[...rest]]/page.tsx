"use client";
import { SignedOut, SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        border: "1px solid #2DC8D2",
      }}
    >
      <SignedOut>
        <SignIn
          appearance={{
            layout: {
              logoImageUrl: "/logo.png",
            },
            variables: {
              colorPrimary: "#2DC8D2",
            },
            elements: {
              formButtonPrimary: {
                borderRadius: "1.2rem",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                fontWeight: "600",
                border: "0px",
              },
            },
          }}
        />
      </SignedOut>
    </div>
  );
}
