import VideoPlayer from "@/components/ecco/courses/VidePlayer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Course } from "@/lib/types/Course";
import { course } from "@/data/courses";
import React from "react";
import { CourseDetailsCard } from "@/components/ecco/courses/CourseDetailsCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
          <h2 className="font-bold text-gray-dark text-[22px] lg:text-2xl mb-2">
            {course.title}
          </h2>
          <p className="text-gray-dark mb-6">{course.description}</p>
          <div className="lg:hidden mb-6">
            <CourseDetailsCard
              timeDuration={course.duration}
              level={course.level}
              lessonsCount={course.lessonsCount}
            />
          </div>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="gap-6 w-full">
              <TabsTrigger className="text-lg  text-start px-0" value="account">
                Módulos
              </TabsTrigger>
              <TabsTrigger
                className="text-lg  text-start px-0"
                value="password"
              >
                Testimonios
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
        <div className="col-span-1 hidden lg:block">
          <CourseDetailsCard
            timeDuration={course.duration}
            level={course.level}
            lessonsCount={course.lessonsCount}
          />
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
