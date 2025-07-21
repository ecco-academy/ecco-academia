import { Card, CardContent } from "@/components/ui/card";
import Image from "@/components/ui/image";
import { Document } from "@/modules/document/types/document";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export interface DocumentCardProps {
  document: Document;
  onSelectDocument: (document: Document) => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  document,
  onSelectDocument,
}) => {
  const handleSelectDocument = () => {
    if (document?.name) {
      onSelectDocument(document);
    }
  };
  return (
    <Card
      key={document.id}
      className="gap-0 p-0 cursor-pointer"
      onClick={handleSelectDocument}
    >
      <CardContent className="flex p-3 gap-5">
        {document.imageUrl ? (
          <Image
            width={120}
            height={120}
            src={document.imageUrl}
            alt={document.name}
            unoptimized
            className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg"
          />
        ) : (
          <Skeleton width={120} height={120} className="rounded-lg" />
        )}

        <div className="flex flex-col justify-between pe-5 w-full">
          <div>
            <div className="w-full flex items-center gap-3 justify-between w-full">
              <h2 className="text-md mt-2 font-bold text-gray-dark leading-5 mb-2 w-full ">
                {document.name || <Skeleton width={"100%"} height={20} />}
              </h2>
              <span className="text-xs text-gray-400 font-semibold">
                {document.format.toUpperCase() || (
                  <Skeleton width={30} height={20} />
                )}
              </span>
            </div>
            <p className="text-gray-500 text-sm md:text-base">
              {document.description || <Skeleton width={"100%"} height={40} />}
            </p>
          </div>
          {document?.name ? (
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
          ) : (
            <Skeleton width={40} height={20} />
          )}
        </div>
      </CardContent>
    </Card>
  );
};
