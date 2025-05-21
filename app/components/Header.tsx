// import Image from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Courses", href: "/courses" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-8 py-2 rounded-b-3xl bg-white fixed top-0 z-10 shadow-xs w-full">
    <div className="flex items-center">
      {/* <Image src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" /> */}
    </div>
    <nav>
      {/* <ul className="flex gap-6 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="no-underline text-gray-800 font-medium hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul> */}
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="ghost" className="mr-4 text-gray-700">
            Ingresar
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
