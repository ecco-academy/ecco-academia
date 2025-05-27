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
import {
  DocumentsSection,
  DocumentsSectionProps,
} from "@/components/ecco/home/DocumentsSection";
import { Button } from "@/components/ui/button";

const bannerSectionContent: BannerSectionProps = {
  title: "Bienvenido a Ecco Academia",
  description: "Más de 3 años impactando con energía la vida de las personas.",
  desktopImageSrc: "/bannerDesktop.png",
  desktopImageAlt: "Imagen de estiramiento por Magui",
  mobileImageSrc: "/bannerMobile.png",
  mobileImageAlt: "Imagen de estiramiento por Magui",
};

const coursesSectionContent: Omit<CoursesSectionProps, "onSelectCourse"> = {
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

const documentsSectionContent: Omit<DocumentsSectionProps, "onSelectDocument"> =
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
export default function Page() {
  const router = useRouter();
  const handleSelectCourse = (courseId: string) => {
    router.push(`/courses/${courseId}/details`);
  };
  const handleSelectDocument = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };
  return (
    <div className="pb-10 lg:pb-20">
      <BannerSection {...bannerSectionContent} />
      <div className="flex flex-col items-center">
        <div className=" max-w-[1180px] ">
          <CoursesSection
            {...coursesSectionContent}
            onSelectCourse={handleSelectCourse}
          />
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 overflow-hidden pt-2 p-4 w-full">
            <DocumentsSection
              className="col-span-7"
              {...documentsSectionContent}
              onSelectDocument={handleSelectDocument}
            />
            <div className="lg:mt-14 col-span-5 rounded-xl px-7 py-5 h-fit bg-gradient-to-br from-primary/5 to-primary/25 shadow-xs w-full">
              <h2 className="text-xl font-bold text-gray-600 lg:text-2xl">
                Asesoría 1 a 1 con Magui
              </h2>
              <span className="text-[#47BCC7] font-semibold mb-4 block">
                45 minutos{" "}
                <span className="text-xs font-medium ms-2">Vía Zoom</span>
              </span>
              <p className="text-gray-500 mb-6">
                Obten una consejería personalizada con Magui Abuin, experta en
                masoterapia. Te ayudará a resolver tus dudas y a mejorar tu
                técnica.Te ayudará a resolver tus dudas y a mejorar tu
                técnica.Te ayudará a resolver tus dudas y a mejorar tu técnica.
                ¡No te lo pierdas!
              </p>
              <div className="w-full flex items-center justify-between">
                <span className="text-gray-400 font-semibold"></span>
                <Button variant={"default"}>Agendar cita con Magui</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
