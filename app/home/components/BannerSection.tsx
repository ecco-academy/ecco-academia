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
    <section className="relative h-[490px] w-full flex flex-col items-center">
      <Image
        className="w-full absolute z-20 bg-gradient-to-r from-gray-700/60 to-transparent pointer-events-none left-0 hidden md:block"
        src={desktopImageSrc}
        alt={desktopImageAlt}
        width={500}
        height={500}
        unoptimized
      />
      <Image
        className="w-full absolute z-20 bg-gradient-to-r from-gray-700/60 to-transparent pointer-events-none left-0 md:hidden"
        src={mobileImageSrc}
        alt={mobileImageAlt}
        width={500}
        height={500}
        unoptimized
      />
      <div className="max-w-[1520px] px-5 md:px-10 2xl:px-0 text-white w-full pt-12 xl:pt-30">
        <h1 className="text-3xl md:text-6xl pt-5 xl:pt-20 z-50 relative max-w-[240px] md:max-w-[420px] font-bold mb-2 lg:mb-4 leading-7 md:leading-[56px]">
          {title}
        </h1>
        <p className="relative z-50 text-base md:text-2xl max-w-[200px] md:max-w-[350px] leading-5 md:leading-7">
          {description}
        </p>
      </div>
    </section>
  );
};
