"use client";
import { Card, CardContent } from "@/components/ui/card";
import { CourseLevel } from "@/modules/course/types/course";
import React from "react";
import { Timer } from "lucide-react";
import clsx from "clsx";
import { Book } from "lucide-react";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
export interface CourseDetailsCardProps {
  className?: string;
  timeDuration?: string;
  lessonsCount?: number;
  level?: CourseLevel;
  children?: React.ReactNode;
}
export const CourseDetailsCard: React.FC<CourseDetailsCardProps> = ({
  className,
  timeDuration,
  lessonsCount,
  level,
  children,
}) => {
  return (
    <Card className={clsx("pt-4", className)}>
      <CardContent className="flex flex-col justify-center h-full">
        <h3 className="font-semibold text-lg text-gray-dark mb-3 block">
          Detalles del curso
        </h3>
        <div className="w-full flex justify-between text-gray-base">
          <span className="flex items-center gap-1">
            <Timer className="text-gray-dark" size={18} />
            Duración:
          </span>
          <span className="text-gray-dark">{timeDuration || "N/A"}</span>
        </div>
        <ul className="mt-4 w-full relative rounded-md border  flex justify-between overflow-hidden text-gray-dark">
          <li className="w-full">
            <header className="flex justify-center items-center w-full gap-[5px]  bg-gray-200 text-xs py-2">
              <Book className="mt-[1px]" size={10} />{" "}
              <span className="leading-none">Lecciones</span>
            </header>
            <p className="flex justify-center w-full bg-gray-100 py-2 font-medium">
              {lessonsCount} clases
            </p>
          </li>
          <li>
            <div className="h-full bg-gray-200 w-[1px]"></div>
          </li>
          <li className="w-full">
            <header className="flex justify-center items-center w-full gap-[5px]  bg-gray-200 text-xs py-2">
              <ChartNoAxesColumnIncreasing className="mt-[1px]" size={11} />{" "}
              <span className="leading-none">Nivel</span>
            </header>
            <p className="flex justify-center w-full bg-gray-100 py-2 font-medium">
              {level ? <span className="capitalize">{level}</span> : "N/A"}
            </p>
          </li>
        </ul>
        {children}
      </CardContent>
    </Card>
  );
};
