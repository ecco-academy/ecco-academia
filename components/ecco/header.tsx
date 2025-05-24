import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { LogIn } from "lucide-react";
import Link from "next/link";

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-4 md:px-8 lg:px-10 py-2 rounded-b-3xl bg-white fixed top-0 z-50 shadow-xs min-h-10 lg:min-h-12 w-full">
    <div className="flex items-center">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="h-8 lg:h-9 w-auto ms-1"
        />
      </Link>
    </div>
    <nav>
      <SignedOut>
        <SignInButton mode="redirect">
          <Button variant="ghost" className=" text-gray-700">
            Entrar
            <LogIn />
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton showName />
      </SignedIn>
    </nav>
  </header>
);

export default Header;
