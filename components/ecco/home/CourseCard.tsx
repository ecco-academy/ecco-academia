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
        "flex flex-col md:flex-row justify-center w-full max-w-[350px] md:max-w-none overflow-hidden gap-0 p-0",
        className
      )}
    >
      <Image
        src={course.imageUrl}
        alt={course.title}
        width={300}
        height={300}
        className="w-auto h-auto max-w-[600px]"
      />
      <div className="p-4 md:p-6 px-6 md:px-10 pb-6 flex flex-col justify-between">
        <h2 className="text-xl font-bold text-gray-600 lg:text-2xl mb-2">
          {course.title}
        </h2>
        <p className=" text-gray-500 mb-6">{course.description}</p>
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
          <Button className="px-8" onClick={() => onSelectCourse(course._id)}>
            Ver curso
          </Button>
        </div>
      </div>
    </Card>
  );
};
