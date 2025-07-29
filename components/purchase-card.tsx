"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Purchase } from "../types/purchase";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

interface PurchaseCardProps {
  purchase: Purchase;
}

export function PurchaseCard({ purchase }: PurchaseCardProps) {
  const hotmartClubURL = process.env.NEXT_PUBLIC_HOTMART_CLUB_URL;
  const handleSelectedPurchase = (purchaseId: number) => {
    window.open(hotmartClubURL || "", "_blank");
  };
  const date = new Date(purchase.created_at).toLocaleDateString();

  return (
    <Card
      key={purchase.id}
      onClick={() => handleSelectedPurchase(purchase.id)}
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      <CardContent>
        <div className="flex justify-between items-center gap-8">
          <span className="font-semibold">{purchase.productName}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between items-center gap-8">
          <span className="text-sm text-gray-400 font-semibold">
            {purchase?.currency} {purchase?.realPrice.toFixed(2)}{" "}
          </span>
          <Link
            className="font-semibold text-primary-dark flex items-center me-2transition-all duration-200"
            href={hotmartClubURL || "/home"}
            target="_blank"
          >
            Ir al curso
            <ChevronsRight className="ml-1 mt-[3px]" size={21} />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
