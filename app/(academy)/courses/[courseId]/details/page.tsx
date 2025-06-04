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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
          <Tabs defaultValue="modules" className="w-full">
            <TabsList className="gap-6 w-full">
              <TabsTrigger className="text-lg  text-start px-0" value="modules">
                Módulos
              </TabsTrigger>
              {/* <TabsTrigger className="text-lg  text-start px-0" value="reviews">
                Testimonios
              </TabsTrigger> */}
            </TabsList>
            <TabsContent value="modules">
              <Accordion type="single" collapsible>
                {course.modules?.map((module) => (
                  <AccordionItem
                    key={module._id}
                    value={`module-${module._id}`}
                  >
                    <AccordionTrigger className="bg-gray-200/60 px-5 mb-2 text-md">
                      <span className="text-gray-dark w-fit">
                        <span className="me-4 text-md font-bold">
                          Modulo {module.number}
                        </span>
                        <span className="block md:inline font-normal">
                          {module.title}
                        </span>
                      </span>{" "}
                    </AccordionTrigger>
                    <AccordionContent className="text-md px-4">
                      <ul className="space-y-2 text-md">
                        {module.lessons.map((lesson) => (
                          <li
                            key={lesson._id}
                            className="text-md flex items-center justify-between"
                          >
                            <span className="text-gray-dark w-fit text-sm font-semibold text-md mb-1">
                              {lesson.title}
                            </span>
                            <span className="text-primary-dark text-sm font-semibold">
                              {lesson.duration}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            {/* <TabsContent value="reviews">
              Change your password here.
            </TabsContent> */}
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
