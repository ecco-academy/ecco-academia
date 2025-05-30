import VideoPlayer from "@/components/ecco/courses/VidePlayer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Course } from "@/lib/types/Course";
// import Image from "next/image";
import React from "react";
interface CourseDetailsPageProps {
  params: { courseId: string };
}

const course: Course = {
  duration: "1h 30m",
  _id: "123",
  imageUrl: "/courseMassage.png",
  title: "Método MADEM, Mapa de masaje",
  description:
    "Desarrolla tu potencial como masoterapeuta y domina el arte y el negocio del masaje (una guía paso a paso de cero a experto.) Aprende a realizar un masaje completo de cuerpo entero, desde la cabeza hasta los pies, con técnicas avanzadas y consejos prácticos.",

  slug: "metodo-madem-mapa-de-masaje",
  price: 21.56,
  instructor: {
    name: "Maga Abuin",
    avatarUrl: "/logo.png",
    bio: "Experta en masoterapia",
    _id: "123",
  },
};
export default async function CourseDetailsPage({}: // params,
CourseDetailsPageProps) {
  // const { courseId } = await params;
  return (
    <div className="max-w-screen-full mx-auto pt-16 lg:pt-20 px-4">
      <CourseBreadcrumb course={course} />
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 pt-2 p-4 mt-6">
        <div className="col-span-2">
          <div className="w-full rounded-2xl overflow-hidden h-[377px]">
            <VideoPlayer
              className="w-full"
              url={"https://www.youtube.com/watch?v=_qrISJjWiH0"}
              controls
              width="100%"
              height="100%"
              // light={
              //   <Image
              //     src="/courseMassage.png"
              //     alt="Thumbnail"
              //     width={680}
              //     height={400}
              //   />
              // }
            />
          </div>
        </div>
        <div className="col-span-1">
          <Card></Card>
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
