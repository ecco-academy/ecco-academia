import { useEffect, useState } from "react";
import { getDocumentById, getDocuments } from "@/modules/document/server/action";
import { Document } from "@/modules/document/types/document";

export const useDocuments = () => {
  const [documents, setDocuments] = useState<Document[]>();
  const [error, setError] = useState(null);
  
  useEffect(() => {
    getDocuments()
      .then((data) => setDocuments(data))
      .catch((error) => {
        console.error("Error fetching documents:", error);
        setError(error);
      });
  }, [getDocuments]);

  return { documents, error };
};

export const useDocumentById = (documentId: string) => {
  const [document, setDocument] = useState<Document | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!documentId) return;

    getDocumentById(documentId)
      .then((data) => {
        if (data) {
          setDocument(data);
        } else {
          console.error(`Document with ID ${documentId} not found.`);
        }
      })
      .catch((error) => {
        console.error("Error fetching document by ID:", error);
        setError(error);
      });
  }, [documentId]);

  return { document, error };
};
