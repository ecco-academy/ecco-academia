import { BannerSectionProps } from "@/components/ecco/home/BannerSection";
import { CoursesSectionProps } from "@/components/ecco/home/CoursesSection";
import { DocumentsSectionProps } from "@/components/ecco/home/DocumentsSection";
import { PersonalizedAdviceCardProps } from "@/components/ecco/home/PersonalizedAdviceCard";

export const bannerSectionContent: BannerSectionProps = {
  title: "Bienvenido a Ecco Academia",
  description: "Más de 3 años impactando con energía la vida de las personas.",
  desktopImageSrc: "/bannerDesktop.png",
  desktopImageAlt: "Imagen de estiramiento por Magui",
  mobileImageSrc: "/bannerMobile.png",
  mobileImageAlt: "Imagen de estiramiento por Magui",
};

export const coursesSectionContent: Omit<CoursesSectionProps, "onSelectCourse"> = {
  title: "Cursos destacados",
  courses: [
    {
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
    },
  ],
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