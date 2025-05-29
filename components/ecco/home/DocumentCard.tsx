import { Card, CardContent } from "@/components/ui/card";
import Image from "@/components/ui/image";
import { Document } from "@/lib/types/Document";
import React from "react";
export interface DocumentCardProps {
  document: Document;
  onSelectDocument: (documentId: string) => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  document,
  onSelectDocument,
}) => {
  return (
    <Card
      key={document._id}
      className="gap-0 p-0 cursor-pointer"
      onClick={() => onSelectDocument(document._id)}
    >
      <CardContent className="flex p-3 gap-5">
        <Image
          width={120}
          height={120}
          src={document.imageUrl}
          alt={document.title}
          unoptimized
          className="w-28 h-28 object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between pe-5">
          <div>
            <div className="w-full flex items-center gap-3 justify-between">
              <h2 className="text-lg mt-2 font-bold text-header leading-3 mb-2">
                {document.title}
              </h2>
              <span className="text-xs text-gray-400 font-semibold">PDF</span>
            </div>
            <p className="text-gray-500 text-sm md:text-base">
              {document.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-2">
            {document.isFree ? (
              <span className="text-green-500 font-semibold">Gratis</span>
            ) : (
              <span className="text-gray-400 font-semibold">
                ${document.price}
              </span>
            )}
            {/* <Button variant={"ghost"} className="text-gray-600 font-semibold">
              Ver detalles <ArrowRight />
            </Button> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
