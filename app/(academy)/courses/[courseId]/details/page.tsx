import VideoPlayer from "@/components/ecco/courses/VidePlayer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Course } from "@/lib/types/Course";
import { course } from "@/data/courses";
import React from "react";
interface CourseDetailsPageProps {
  params: { courseId: string };
}
export default async function CourseDetailsPage({}: // params,
CourseDetailsPageProps) {
  return (
    <div className="max-w-screen-full mx-auto pt-16 lg:pt-20 px-4">
      <CourseBreadcrumb course={course} />
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 pt-2 mt-6">
        <div className="col-span-2">
          <div className="w-full rounded-xl overflow-hidden h-[224px] md:h-[391px] mb-4 ">
            <VideoPlayer
              className="w-full rounded-md"
              url={"/openingVideo.mp4"}
              controls
              width="100%"
              height="100%"
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                  },
                },
              }}
            />
          </div>
          <h2 className="font-bold text-header text-[22px] lg:text-2xl">
            {course.title}
          </h2>
        </div>
        <div className="col-span-1">
          <Card className="pt-4">
            <CardContent>
              <span className="font-semibold text-lg text-header">
                Detalles del curso:
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
interface CourseBreadcrumbProps {
  course: Course;
  className?: string;
}

const CourseBreadcrumb: React.FC<CourseBreadcrumbProps> = ({
  course,
  className,
}) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/home">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Cursos</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{course.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
