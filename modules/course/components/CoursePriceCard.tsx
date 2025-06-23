import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";
import React from "react";

export interface CoursePriceCardProps {
  className?: string;
  price?: number;
  description?: string;
}
export const CoursePriceCard: React.FC<CoursePriceCardProps> = ({
  className,
  price,
  description,
}) => {
  return (
    <Card className={clsx("pt-4", className)}>
      <CardContent>
        <h3 className="font-semibold text-lg text-gray-dark mb-3 block">
          Precio
        </h3>
        <span className="text-3xl text-gray-dark font-semibold block">
          ${price}{" "}
        </span>
        <span className="text-sm text-gray-dark">{description}</span>
      </CardContent>
    </Card>
  );
};
