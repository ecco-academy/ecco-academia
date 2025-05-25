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
      className="gap-0 p-0"
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
        <div>
          <h2 className="text-lg mt-2 font-bold text-gray-600 leading-3 mb-2">
            {document.title}
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            {document.description}
          </p>
          {document.isFree ? (
            <span className="text-green-500 font-semibold">Gratis</span>
          ) : (
            <span className="text-red-500 font-semibold">
              {document.price}€
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
