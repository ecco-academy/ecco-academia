"use client";
import { BannerSection } from "../../../modules/home/components/BannerSection";
import { useRouter } from "next/navigation";
import { CoursesSection } from "@/modules/home/components/CoursesSection";
import { DocumentsSection } from "@/modules/home/components/DocumentsSection";
import { PersonalizedAdviceCard } from "@/modules/home/components/PersonalizedAdviceCard";
import {
  bannerSectionContent,
  coursesSectionContent,
  documentsSectionContent,
  personalizedServiceContent,
} from "@/content/home";
import React from "react";
import { useCourses } from "@/modules/home/hooks/useCourses";
import { useDocuments } from "@/modules/home/hooks/useDocuments";
import { Document } from "@/modules/document/types/document";

export default function HomePage() {
  const { courses } = useCourses();
  const { documents } = useDocuments();
  const router = useRouter();

  const handleSelectCourse = (courseId: string) => {
    router.push(`/courses/${courseId}/details`);
  };

  const handleSelectDocument = (document: Document) => {
    router.push(`/documents/${document.id}`);
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
          courses={courses || []}
          onSelectCourse={handleSelectCourse}
        />
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 pt-2 p-4">
          <DocumentsSection
            className="col-span-7"
            {...documentsSectionContent}
            documents={documents || []}
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
