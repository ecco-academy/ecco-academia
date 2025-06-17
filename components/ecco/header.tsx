import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import React from "react";
import { LogIn } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export interface HeaderProps {
  className?: string;
  hideSignInButton?: boolean;
}
const Header: React.FC<HeaderProps> = ({
  className,
  hideSignInButton = false,
}) => (
  <header
    className={clsx(
      "flex items-center justify-between px-4 md:px-8 lg:px-10 py-2 rounded-b-3xl bg-white fixed top-0 z-50 shadow-xs min-h-10 lg:min-h-12 w-full",
      className
    )}
  >
    <div className="flex items-center">
      <Link href={"/home"}>
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
      {!hideSignInButton && (
        <Link href="/auth/login" className="text-gray-700 hover:text-gray-900">
          <Button variant="ghost" className="text-gray-700">
            Entrar
            <LogIn />
          </Button>
        </Link>
      )}
    </nav>
  </header>
);

export default Header;
