// import Image from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { LogIn } from "lucide-react";

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-2 md:px-8 lg:px-10 py-2 rounded-b-3xl bg-white fixed top-0 z-50 shadow-xs w-full">
    <div className="flex items-center"></div>
    <nav>
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="ghost" className=" text-gray-700">
            Entrar
            <LogIn />
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </nav>
  </header>
);

export default Header;
