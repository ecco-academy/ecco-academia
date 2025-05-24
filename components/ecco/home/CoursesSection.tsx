import { Course } from "@/lib/types/Course";
import React, { ReactNode } from "react";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { CourseCard } from "./CourseCard";
export interface CoursesSectionProps {
  title?: ReactNode;
  courses?: Course[];
  onSelectCourse: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  title,
  courses,
  onSelectCourse,
}) => {
  return (
    <section className="d-flex flex-col items-center justify-center p-4 w-full max-w-[920px] mx-auto py-8 lg:pt-18 pb-16">
      <div className="flex items-end justify-between w-full mb-4 lg:mb-6">
        <h1 className="font-semibold text-gray-600 text-[22px] lg:text-2xl">
          {title}
        </h1>
        <Link
          className="font-semibold text-gray-500 flex items-center me-2 "
          href={"/courses"}
        >
          Ver todos
          <ChevronsRight className="ml-1 mt-[2px]" />
        </Link>
      </div>
      <div className="flex justify-center w-full">
        {courses?.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
            onSelectCourse={onSelectCourse}
          />
        ))}
      </div>
    </section>
  );
};
