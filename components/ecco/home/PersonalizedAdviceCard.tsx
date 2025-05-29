import { Button } from "@/components/ui/button";
import clsx from "clsx";
import React, { ReactNode } from "react";

export interface PersonalizedAdviceCardProps {
  title: ReactNode;
  duration: string;
  method: string;
  description: ReactNode;
  onClick: () => void;
  className?: string;
}
export const PersonalizedAdviceCard: React.FC<PersonalizedAdviceCardProps> = ({
  description,
  duration,
  method,
  title,
  className,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        "rounded-xl px-7 py-5 h-fit bg-gradient-to-br from-primary/5 to-primary/25 shadow-xs w-full",
        className
      )}
    >
      <h2 className="text-xl font-bold text-gray-600 lg:text-2xl">{title}</h2>
      <span className="text-[#47BCC7] font-semibold mb-4 block">
        {duration} <span className="text-xs font-medium ms-2">{method}</span>
      </span>
      <p className="text-gray-500 mb-6">{description}</p>
      <div className="w-full flex items-center justify-between">
        <span className="text-gray-400 font-semibold"></span>
        <Button variant={"default"} onClick={onClick}>
          Agendar cita con Magui
        </Button>
      </div>
    </div>
  );
};
