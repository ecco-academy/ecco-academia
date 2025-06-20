"use client";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

export interface UserMenuAction {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

export interface UserMenuProps {
  userName: string;
  userEmail: string;
  onLogout: () => void;
  menuActions?: UserMenuAction[];
  className?: string;
}
export const UserMenu: React.FC<UserMenuProps> = ({
  userName = "Usuario",
  userEmail,
  onLogout,
  menuActions = [],
  className,
}) => {
  return (
    <div className="flex flex-col py-1">
      <div className="px-4 mb-2 pt-1">
        <span className="text-sm font-medium block text-gray-dark">
          Hola, {userName}
        </span>
        <span className="text-xs font-semibold block text-gray-500">
          {userEmail}
        </span>
      </div>
      <Separator className="my-1" />
      <div className="flex flex-col">
        {menuActions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className="flex items-center gap-1 px-3 py-2 text-left hover:bg-gray-100"
          >
            {action.icon && (
              <span className="text-gray-400 max-h-10">{action.icon}</span>
            )}
            <span className="text-xs text-gray-600 font-medium">
              {action.label}
            </span>
          </button>
        ))}
      </div>
      <Separator className="my-1" />
      <button
        onClick={onLogout}
        className="flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100"
      >
        <span className="text-xs text-gray-500 font-medium">Cerrar sesión</span>
      </button>
    </div>
  );
};
