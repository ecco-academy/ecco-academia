import { getPurchasesByUserID } from "@/modules/purchase/server/action";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "@formkit/tempo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PageProps } from "@/.next/types/app/page";

interface PurchasesPageProps extends PageProps {
  params: Promise<{ userId: string }>;
}

export default async function PurchasesPage({ params }: PurchasesPageProps) {
  const { userId } = await params;
  const purchases = await getPurchasesByUserID(userId);

  return (
    <div className="max-w-screen-full mx-auto pt-16 lg:pt-20 px-4">
      <PurchasesBreadcrumb />
      {purchases?.length === 0 ? (
        <div className="text-center text-gray-500 mt-12">
          No tienes compras registradas
        </div>
      ) : (
        <ul className="space-y-4">
          {purchases.map((purchase, idx) => {
            const date = format(purchase.created_at, "short");
            return purchase ? (
              <Card key={purchase.id}>
                <CardContent>
                  <div className="flex justify-between items-center gap-8">
                    <span className="font-semibold">
                      {purchase.productName}
                    </span>
                    <span className="text-sm text-gray-500">{date}</span>
                  </div>
                  <hr className="my-2" />
                  <span className="text-sm text-gray-400 font-semibold">
                    {purchase?.currency} {purchase?.realPrice.toFixed(2)}{" "}
                  </span>
                </CardContent>
              </Card>
            ) : null;
          })}
        </ul>
      )}
    </div>
  );
}
function PurchasesBreadcrumb() {
  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/home">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Mis compras</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
