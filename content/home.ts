import { BannerSectionProps } from "@/modules/home/components/BannerSection";
import { CoursesSectionProps } from "@/modules/home/components/CoursesSection";
import { DocumentsSectionProps } from "@/modules/home/components/DocumentsSection";
import { PersonalizedAdviceCardProps } from "@/modules/home/components/PersonalizedAdviceCard";
import { course } from "@/data/courses";

export const bannerSectionContent: BannerSectionProps = {
  title: "Bienvenido a Ecco Academia",
  description: "Más de 3 años impactando con energía la vida de las personas.",
  desktopImageSrc: "/bannerDesktop.png",
  desktopImageAlt: "Imagen de estiramiento por Magui",
  mobileImageSrc: "/bannerMobile.png",
  mobileImageAlt: "Imagen de estiramiento por Magui",
};

export const coursesSectionContent: Omit<CoursesSectionProps, "onSelectCourse" | "courses"> = {
  title: "Cursos destacados",
};

export const documentsSectionContent: Omit<DocumentsSectionProps, "onSelectDocument"> =
  {
    title: "Documentos",
    documents: [
      {
        _id: "1",
        title: "El Formulario",
        description:
          "Formulario por excelencia a ofrecer a tus clientes antes de cada sesion.",
        slug: "guia-de-estiramientos",
        imageUrl: "/ex2.png",
        price: 0,
        isFree: true,
      },
      {
        _id: "2",
        title: "Guía de estiramientos",
        description:
          "Aprende a estirar correctamente y mejora tu flexibilidad con esta guía completa.",
        slug: "guia-de-estiramientos",
        imageUrl: "/ex1.png",
        price: 0,
        isFree: true,
      },
      {
        _id: "3",
        title: "Guía de estiramientos",
        description:
          "Aprende a estirar correctamente y mejora tu flexibilidad con esta guía completa.",
        slug: "guia-de-estiramientos",
        imageUrl: "/courseMassage.png",
        price: 15.55,
        isFree: false,
      },
    ],
  };

export const personalizedServiceContent:Omit<PersonalizedAdviceCardProps, "onClick">  = {
  title: "Asesoría 1 a 1 con Magui",
  duration: "45 minutos",
  method: "Vía Zoom",
  description:
    "Obtén una consejería personalizada con Magui Abuin, experta en masoterapia. Te ayudará a resolver tus dudas y a mejorar tu técnica. ¡No te lo pierdas!",
};