import { BannerSectionProps } from "@/components/banner-section";
import { CoursesSectionProps } from "@/components/courses-section";
import { DocumentsSectionProps } from "@/components/documents-section";
import { PersonalizedAdviceCardProps } from "@/components/personalized-advice-card";
import { Course } from "@/types/course";
import { Document } from "@/types/document";

export const bannerSectionContent: BannerSectionProps = {
  title: "Bienvenido a Ecco",
  description: "Te mostramos el mapa hacia un negocio de masajes exitos.",
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
    "Obten una consejería personalizada. Resuelve tus dudas sobre el negocio del masaje.",
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