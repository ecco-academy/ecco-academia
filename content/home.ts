import { BannerSectionProps } from "@/modules/home/components/banner-section";
import { CoursesSectionProps } from "@/modules/home/components/courses-section";
import { DocumentsSectionProps } from "@/modules/home/components/documents-section";
import { PersonalizedAdviceCardProps } from "@/modules/home/components/personalized-advice-card";
import { Course } from "@/modules/course/types/course";
import { Document } from "@/modules/document/types/document";

export const bannerSectionContent: BannerSectionProps = {
  title: "Bienvenido a Ecco",
  description: "Te mostramos el mapa hacia un negocio de masajes exitos.",
  desktopImageSrc: "/bannerDesktop.png",
  desktopImageAlt: "Imagen de estiramiento por Magui",
  mobileImageSrc: "/bannerMobile.png",
  mobileImageAlt: "Imagen de estiramiento por Magui",
};

export const coursesSectionContent: Partial<CoursesSectionProps> = {
  title: "Aprende con Magui",
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

export const emptyCourseForSkeleton : Course = {
  id: "1",
  title: "",
  description: "",
  imageUrl: "",
  instructor: {
    id: "",
    name: "",
    avatarUrl: "",
  },
  level:undefined,
  lessonsCount: undefined,
  createdAt: "",
  slug: "",
  price: NaN,
  isMain: true,
  modules: [],
};

export const emptyDocumentForSkeleton: Document = {
  id: "1",
  name: "",
  description: "",
  imageUrl: "",
  createdAt: "",
  nameSlug: "",
  format: "",
  downloadUrl: "",
  price: NaN,
};