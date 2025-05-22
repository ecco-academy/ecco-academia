"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  BannerSection,
  BannerSectionProps,
} from "../../components/ecco/home/BannerSection";
import { useRouter } from "next/navigation";

const bannerSectionContent: BannerSectionProps = {
  title: "Bienvenido a Ecco Academia",
  description: "Más de 3 años impactando con energía la vida de las personas.",
  desktopImageSrc: "/bannerDesktop.png",
  desktopImageAlt: "Imagen de estiramiento por Magui",
  mobileImageSrc: "/bannerMobile.png",
  mobileImageAlt: "Imagen de estiramiento por Magui",
};

export default function Page() {
  const router = useRouter();
  const handleSelectCourse = (courseId: string) => {
    router.push(`/courses/${courseId}/details`);
  };
  return (
    <div className="">
      <BannerSection {...bannerSectionContent} />
      <Card
        onClick={() => handleSelectCourse("1")}
        className="w-80 m-4 cursor-pointer"
      >
        <CardContent>Curso 1</CardContent>
      </Card>
    </div>
  );
}
