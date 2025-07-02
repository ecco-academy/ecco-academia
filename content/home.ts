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

export const coursesSectionContent: Partial<CoursesSectionProps> = {
  title: "Cursos destacados",
};

export const documentsSectionContent: Partial<DocumentsSectionProps> = {
  title: "Documentos",
};

export const personalizedServiceContent: Omit<
  PersonalizedAdviceCardProps,
  "onClick"
> = {
  title: "Asesoría 1 a 1 con Magui",
  duration: "45 minutos",
  method: "Vía Zoom",
  description:
    "Obtén una consejería personalizada con Magui Abuin, experta en masoterapia. Te ayudará a resolver tus dudas y a mejorar tu técnica. ¡No te lo pierdas!",
};
