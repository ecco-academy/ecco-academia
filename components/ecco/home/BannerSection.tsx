import Image from "@/components/ui/image";
import React, { ReactNode } from "react";

export interface BannerSectionProps {
  title: ReactNode;
  description: ReactNode;
  desktopImageSrc: string;
  desktopImageAlt: string;
  mobileImageSrc: string;
  mobileImageAlt: string;
}

export const BannerSection: React.FC<BannerSectionProps> = ({
  title,
  description,
  desktopImageSrc,
  desktopImageAlt,
  mobileImageSrc,
  mobileImageAlt,
}) => {
  return (
    <section className="relative h-100vh">
      <Image
        className="w-full left-0 hidden lg:block"
        src={desktopImageSrc}
        alt={desktopImageAlt}
        width={500}
        height={500}
        unoptimized
      />
      <Image
        className="w-full left-0 lg:hidden"
        src={mobileImageSrc}
        alt={mobileImageAlt}
        width={500}
        height={500}
        unoptimized
      />
      <div className="max-w-[1520px] 2xl:px-0  w-ful absolute top-16 md:top-32 lg:top-32 2xl:top-40 left-5 md:left-16 lg:left-32 2xl:left-60">
        <h1 className="text-2xl md:text-6xl z-50 max-w-[180px] md:max-w-[420px] font-bold mb-2 lg:mb-4 leading-7 md:leading-[56px] text-white">
          {title}
        </h1>
        <p className=" z-50 text-base md:text-2xl max-w-[200px] md:max-w-[350px] leading-5 md:leading-7 text-white">
          {description}
        </p>
      </div>
    </section>
  );
};
