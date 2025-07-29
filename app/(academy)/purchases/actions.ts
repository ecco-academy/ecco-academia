"use server";

import { createClient } from "@/lib/utils/supabase/server";
import { Purchase } from "../../../types/purchase";

export const getPurchasesByUserID = async (userId: string): Promise<Purchase[]> => {
  const supabase = await createClient();
  const { data: purchases, error } = await supabase.from("purchases").select("*")
    .eq("userId", userId);

  if (error) {
    console.error("Error fetching purchases:", error);
    throw new Error(`Error fetching purchases: ${error.message}`);
  }

  return purchases || [];
};

export const getPurchaseByUserID = async (userId: string): Promise<Purchase | null> => {
  const supabase = await createClient();
  const { data: purchase, error } = await supabase
    .from("purchases")
    .select("*")
    .eq("userId", userId)
    .single();

  if (error) {
    throw new Error(`Error fetching purchase by ID: ${error.message}`);
  }

  return purchase;
};