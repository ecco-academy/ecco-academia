"use server";
import { createClient } from "@/lib/utils/supabase/server";
import { Document } from "../../../types/document";

export const getDocuments = async (): Promise<Document[]> => {
  const supabase = await createClient();
  const { data: documents, error } = await supabase.from("documents").select("*");

  if (error) {
    throw new Error(`Error fetching documents: ${error.message}`);
  }

  return documents;
};

export const getDocumentById = async (documentId: string): Promise<Document | null> => {
  const supabase = await createClient();
  const { data: document, error } = await supabase
    .from("documents")
    .select("*")
    .eq("id", documentId)
    .single();

  if (error) {
    throw new Error(`Error fetching document by ID: ${error.message}`);
  }

  return document;
};