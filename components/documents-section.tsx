"use client";
import React, { ReactNode } from "react";
import { Document } from "@/types/document";
import clsx from "clsx";
import { DocumentCard } from "./document-card";

export interface DocumentsSectionProps {
  documents: Document[];
  title?: ReactNode;
  className?: string;
  onSelectDocument: (document: Document) => void;
}
export const DocumentsSection: React.FC<DocumentsSectionProps> = ({
  documents,
  title,
  className,
  onSelectDocument,
}) => {
  return (
    <section
      className={clsx(
        "d-flex flex-col items-center justify-center w-full mx-auto pb-0 ",
        className
      )}
    >
      <div className=" mb-4 lg:mb-5">
        <h1 className="font-semibold text-gray-base text-[22px] lg:text-2xl">
          {title}
        </h1>
      </div>
      <div className=" w-full flex flex-col gap-3">
        {documents?.map((document) => (
          <DocumentCard
            document={document}
            key={document.id}
            onSelectDocument={onSelectDocument}
          />
        ))}
      </div>
    </section>
  );
};
