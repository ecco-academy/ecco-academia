"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Course } from "@/modules/course/types/course";
import React from "react";
import clsx from "clsx";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  const handleSelectCourse = () => {
    if (course?.title) {
      onSelectCourse(course.id);
    }
  };
  return (
    <Card
      key={course.id}
      className={clsx(
        "flex flex-col md:flex-row justify-start w-full  overflow-hidden gap-0 p-0 h-full cursor-pointer min-h-[250px]",
        className
      )}
      onClick={handleSelectCourse}
    >
      {course?.imageUrl ? (
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={300}
          height={300}
          className="w-auto h-auto max-w-[450px] object-cover shrink-0"
        />
      ) : (
        <div className="md:w-[550px] w-full h-[250px] px-3 pt-2 pb-4">
          <Skeleton
            width={"100%"}
            height={"100%"}
            borderRadius={10}
            className="p-0 w-full h-full"
            containerClassName="h-full p-0 m-0"
          />
        </div>
      )}

      <div className="p-4 md:p-6 px-6 md:px-8 pb-6 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-xl font-bold text-gray-dark lg:text-2xl mb-2">
            {course.title || <Skeleton width={250} height={30} />}
          </h2>
          <p className=" text-gray-base mb-6 text-base">
            {course.description || <Skeleton width={"100%"} height={80} />}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center max-w-50 w-full md:max-w-none">
            {course?.instructor?.name ? (
              <Avatar className="me-2 mt-1">
                <AvatarImage
                  src={course?.instructor?.avatarUrl || "/profile.png"}
                  alt={course?.instructor?.name || "Maga Abuin"}
                />
              </Avatar>
            ) : (
              <Skeleton width={32} height={32} circle className="me-2" />
            )}
            <div>
              <span className="text-sm text-gray-500 font-semibold">
                {course?.instructor?.name ? (
                  <>
                    Por <span>{course?.instructor?.name}</span>
                  </>
                ) : (
                  <Skeleton width={100} height={20} className="mb-1" />
                )}
              </span>
              <span className="block text-xs text-gray-400 leading-3">
                {course?.instructor?.bio || (
                  <Skeleton width={150} height={10} />
                )}
              </span>
            </div>
          </div>
          {course?.title && (
            <Button variant="default" onClick={() => onSelectCourse(course.id)}>
              Ver detalles
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
