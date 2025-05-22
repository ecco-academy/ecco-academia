"use client";
import { SignedOut, SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-6 text-2xl font-bold">Iniciar Sesion</h1>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
}
