import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Course } from "@/lib/types/Course";
import React from "react";
import clsx from "clsx";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export interface CourseCardProps {
  course: Course;
  onSelectCourse: (courseId: string) => void;
  className?: string;
}
export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onSelectCourse,
  className,
}) => {
  return (
    <Card
      key={course._id}
      className={clsx(
        "flex flex-col md:flex-row justify-center w-full  overflow-hidden gap-0 p-0 h-full cursor-pointer",
        className
      )}
      onClick={() => onSelectCourse(course._id)}
    >
      <Image
        src={course.imageUrl}
        alt={course.title}
        width={300}
        height={300}
        className="w-auto h-auto max-w-[650px] object-cover shrink-0"
      />
      <div className="p-4 md:p-6 px-6 md:px-8 pb-6 flex flex-col justify-between">
        <h2 className="text-xl font-bold text-header lg:text-2xl mb-2">
          {course.title}
        </h2>
        <p className=" text-content mb-6">{course.description}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center max-w-36 md:max-w-none">
            <Avatar className="me-2 mt-1">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <div>
              <span className="text-sm text-gray-500 font-semibold">
                Por <span>{course.instructor.name}</span>
              </span>
              <span className="block text-xs text-gray-400 leading-3">
                {course.instructor?.bio}
              </span>
            </div>
          </div>
          <Button variant="outline" onClick={() => onSelectCourse(course._id)}>
            Ver detalles
          </Button>
        </div>
      </div>
    </Card>
  );
};
