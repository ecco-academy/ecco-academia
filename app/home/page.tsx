import { BannerSection, BannerSectionProps } from "./components/BannerSection";

const bannerSectionContent: BannerSectionProps = {
  title: "Bienvenido a Ecco Academia",
  description: "Más de 3 años impactando con energía la vida de las personas.",
  desktopImageSrc: "/bannerDesktop.png",
  desktopImageAlt: "Imagen de estiramiento por Magui",
  mobileImageSrc: "/bannerMobile.png",
  mobileImageAlt: "Imagen de estiramiento por Magui",
};

export default function Page() {
  return (
    <div className="">
      <BannerSection {...bannerSectionContent} />
    </div>
  );
}
