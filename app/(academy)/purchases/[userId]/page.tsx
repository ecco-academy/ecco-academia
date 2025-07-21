import { getPurchasesByUserID } from "@/modules/purchase/server/action";
import { Card, CardContent } from "@/components/ui/card";
import { format, parse } from "@formkit/tempo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PurchasesPageProps {
  params: { userId: string };
}

export default async function PurchasesPage({ params }: PurchasesPageProps) {
  const { userId } = await params;
  const purchases = await getPurchasesByUserID(userId);

  return (
    <div className="max-w-screen-full mx-auto pt-16 lg:pt-20 px-4">
      <PurchasesBreadcrumb />
      <ul className="space-y-4">
        {purchases.map((purchase, idx) => {
          const readable = format(purchase.created_at, "full");
          return purchase ? (
            <Card key={purchase.id}>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{purchase.productName}</span>
                  <span className="text-sm text-gray-500">{readable}</span>
                </div>
                <hr className="my-2" />
                <span className="text-sm text-gray-400 font-semibold">
                  {purchase?.currency} {purchase?.priceWithDiscount}
                </span>
              </CardContent>
            </Card>
          ) : null;
        })}
      </ul>
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
