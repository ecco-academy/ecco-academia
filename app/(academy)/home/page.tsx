"use client";

import {
  BannerSection,
  BannerSectionProps,
} from "../../../components/ecco/home/BannerSection";
import { useRouter } from "next/navigation";
import {
  CoursesSection,
  CoursesSectionProps,
} from "@/components/ecco/home/CoursesSection";

const bannerSectionContent: BannerSectionProps = {
  title: "Bienvenido a Ecco Academia",
  description: "Más de 3 años impactando con energía la vida de las personas.",
  desktopImageSrc: "/bannerDesktop.png",
  desktopImageAlt: "Imagen de estiramiento por Magui",
  mobileImageSrc: "/bannerMobile.png",
  mobileImageAlt: "Imagen de estiramiento por Magui",
};

const coursesSectionContent: Partial<CoursesSectionProps> = {
  title: "Cursos destacados",
  courses: [
    {
      duration: "1h 30m",
      _id: "123",
      imageUrl: "/courseMassage.png", // Reemplaza con la URL real si está disponible
      title: "Método MADEM, Mapa de masaje",
      description:
        "Desarrolla tu potencial como masoterapeuta y domina el arte y el negocio del masaje (una guía paso a paso de cero a experto.)",
      slug: "metodo-madem-mapa-de-masaje",
      price: 21.56,
      instructor: {
        name: "Magui Bell",
        avatarUrl: "/logo.png",
        bio: "Experta en masoterapia",
        _id: "123",
      },
    },
  ],
};
export default function Page() {
  const router = useRouter();
  const handleSelectCourse = (courseId: string) => {
    router.push(`/courses/${courseId}/details`);
  };
  return (
    <div className="">
      <BannerSection {...bannerSectionContent} />
      <CoursesSection
        {...coursesSectionContent}
        onSelectCourse={handleSelectCourse}
      />
    </div>
  );
}
