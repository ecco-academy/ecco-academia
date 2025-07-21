"use client";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import React from "react";
import { Album, LogIn, Settings, User as UserIcon } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { User } from "@supabase/supabase-js";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UserMenu, UserMenuAction } from "./user-menu";
import { signOut } from "../client/sign-out";
import { useRouter } from "next/navigation";

export interface HeaderProps {
  user?: User | null;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className, user }) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/home");
      router.refresh();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  const menuActions: UserMenuAction[] = [
    {
      label: "Perfil",
      onClick: () => {
        // Handle profile click
      },
      icon: <UserIcon height={14} />,
    },
    {
      label: "Mis compras",
      url: `/purchases/${user?.id}`,
      icon: <Album height={14} />,
    },
    {
      label: "Configuración",
      onClick: () => {
        // Handle settings click
      },
      icon: <Settings height={14} />,
    },
  ];

  return (
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
        {user ? (
          <Popover>
            <PopoverTrigger>
              <div className="text-gray-700 hover:text-gray-900 flex items-center gap-3 hover:bg-transparent cursor-pointer">
                <span className="text-gray-600 font-medium text-sm">
                  {user?.user_metadata?.first_name}
                </span>
                <Avatar className="w-7 h-7">
                  <AvatarImage
                    src={"/user.png"}
                    alt={user?.user_metadata?.first_name || "User Avatar"}
                  />
                </Avatar>
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <UserMenu
                userEmail={user?.email || ""}
                userName={user?.user_metadata?.first_name || ""}
                onLogout={handleLogout}
                menuActions={menuActions}
              />
            </PopoverContent>
          </Popover>
        ) : (
          <Link
            href="/auth/login"
            className="text-gray-700 hover:text-gray-900"
          >
            <Button variant="ghost" className="text-gray-700">
              Entrar
              <LogIn />
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
