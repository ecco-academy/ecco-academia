"use client";

import { BannerSection } from "../../../components/ecco/home/BannerSection";
import { useRouter } from "next/navigation";
import { CoursesSection } from "@/components/ecco/home/CoursesSection";
import { DocumentsSection } from "@/components/ecco/home/DocumentsSection";
import { PersonalizedAdviceCard } from "@/components/ecco/home/PersonalizedAdviceCard";
import {
  bannerSectionContent,
  coursesSectionContent,
  documentsSectionContent,
  personalizedServiceContent,
} from "@/content/home";
import React from "react";

export default function HomePage() {
  const router = useRouter();

  const handleSelectCourse = (courseId: string) => {
    router.push(`/courses/${courseId}/details`);
  };

  const handleSelectDocument = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  const handleSelectPersonalizedAdvice = () => {
    router.push("/personalized-advice");
  };
  return (
    <div className="pb-10 lg:pb-20">
      <BannerSection {...bannerSectionContent} />
      <div className=" max-w-screen-full mx-auto">
        <CoursesSection
          {...coursesSectionContent}
          onSelectCourse={handleSelectCourse}
        />
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 pt-2 p-4">
          <DocumentsSection
            className="col-span-7"
            {...documentsSectionContent}
            onSelectDocument={handleSelectDocument}
          />
          <PersonalizedAdviceCard
            className="col-span-5 lg:mt-14 "
            {...personalizedServiceContent}
            onClick={handleSelectPersonalizedAdvice}
          />
        </div>
      </div>
    </div>
  );
}
