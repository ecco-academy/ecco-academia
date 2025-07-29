import VideoPlayer from "@/components/video-player";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Course } from "@/types/course";
import React from "react";
import { CourseDetailsCard } from "@/components/course-details-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InstructorDetails } from "@/components/instructor-details";
import { CoursePriceCard } from "@/components/course-price-card";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { getCourseById } from "@/app/(academy)/courses/[courseId]/actions";
import { PageProps } from "@/.next/types/app/layout";
interface CourseDetailsPageProps extends PageProps {
  params: Promise<{ courseId: string }>;
}
export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { courseId } = await params;
  const course = await getCourseById(courseId);

  const getBuyCourseUrl = (courseId: string) => {
    return `/courses/${courseId}/payment`;
  };
  return (
    <div className="max-w-screen-full mx-auto pt-16 lg:pt-20 px-4">
      {!course ? (
        <Alert className="mb-4">No se encontró el curso.</Alert>
      ) : (
        <>
          <CourseBreadcrumb course={course} />
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 pt-2 mt-4 md:mt-6">
            <div className="col-span-2 ">
              <div className="w-full rounded-xl overflow-hidden h-[228px] md:h-[391px] mb-4 ">
                <VideoPlayer
                  className="w-full h-fit rounded-md"
                  url={"https://www.youtube.com/watch?v=_qrISJjWiH0"}
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

              <Tabs defaultValue="details" className="w-full">
                <TabsList className="gap-6 w-full">
                  <TabsTrigger
                    className="text-lg  text-start px-0"
                    value="details"
                  >
                    Detalles
                  </TabsTrigger>
                  <TabsTrigger
                    className="text-lg  text-start px-0"
                    value="modules"
                  >
                    Módulos
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="details">
                  <h2 className="font-bold text-gray-dark text-[22px] lg:text-2xl mb-2">
                    {course.title}
                  </h2>
                  <p className="text-gray-dark ">{course.description}</p>
                </TabsContent>
                <TabsContent value="modules">
                  <Accordion type="single" collapsible>
                    {course.modules?.map((module) => (
                      <AccordionItem
                        key={module.id}
                        value={`module-${module.id}`}
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
                          {module?.lessons?.length > 0 ? (
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
                          ) : (
                            <span>{module?.description}</span>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
            <div className="col-span-1">
              <CourseDetailsCard
                className="mb-6"
                timeDuration={course.duration}
                level={course.level}
                lessonsCount={course.lessonsCount}
              >
                <Button asChild size={"lg"} className="w-full">
                  <Link
                    href={getBuyCourseUrl(course.id)}
                    className="w-full mt-4 bg-primary hover:bg-primary-dark"
                  >
                    <ShoppingCart strokeWidth={2.5} size={14} />
                    <span className="text-sm">Comprar curso</span>
                  </Link>
                </Button>
                <span className="text-xs text-center text-gray-base mt-2">
                  Acceso de por vida desde la compra
                </span>
              </CourseDetailsCard>
              <InstructorDetails
                className="mb-6"
                instructor={course.instructor}
              />
              <CoursePriceCard
                className="mb-6"
                price={course.price}
                description={
                  "Curso completo con acceso a todos los módulos, lecciones y materiales."
                }
              />
            </div>
          </div>
        </>
      )}
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
