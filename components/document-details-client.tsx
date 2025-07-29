"use client";
import { Document } from "@/types/document";
import Image from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import useDownloader from "react-use-downloader";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

interface DocumentDetailsClientProps {
  document: Document;
}

const DocumentDetailsClient: React.FC<DocumentDetailsClientProps> = ({
  document,
}) => {
  const { download, isInProgress } = useDownloader();

  const handleDownload = () => {
    download(document.downloadUrl, `${document.name}.${document.format}`);
  };

  return (
    <Card className="w-fit">
      <CardContent className="flex flex-col items-center w-fit">
        <Image
          src={document.imageUrl}
          alt={document.name}
          width={320}
          height={320}
          className="rounded-lg object-cover mb-4 w-80 h-80"
          unoptimized
        />
        <h2 className="font-bold text-gray-dark text-2xl mb-2 text-center">
          {document.name}
        </h2>
        <p className="text-gray-500 text-md mb-6 text-center max-w-xs">
          {document.description}
        </p>
        {document.isFree ? (
          <Button
            onClick={handleDownload}
            disabled={isInProgress}
            className="w-full max-w-xs"
          >
            <Download /> {isInProgress ? "Descargando..." : "Descargar"}
          </Button>
        ) : (
          <Button
            asChild
            className="w-full max-w-xs bg-primary-dark hover:bg-primary-dark"
          >
            <a href="#" /* TODO: Replace with buy link */>Comprar</a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default DocumentDetailsClient;
