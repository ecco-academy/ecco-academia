import { getPurchasesByUserID } from "@/app/(academy)/purchases/actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PageProps } from "@/.next/types/app/page";
import { PurchaseCard } from "@/components/purchase-card";

interface PurchasesPageProps extends PageProps {
  params: Promise<{ userId: string }>;
}

export default async function PurchasesPage({ params }: PurchasesPageProps) {
  const { userId } = await params;
  const purchases = await getPurchasesByUserID(userId);

  return (
    <div className="max-w-screen-full mx-auto py-16 lg:pt-20 px-4 ">
      <PurchasesBreadcrumb />
      {purchases?.length === 0 ? (
        <div className="text-center text-gray-500 mt-12">
          No tienes compras registradas.
        </div>
      ) : (
        <ul className="space-y-4">
          {purchases.map((purchase, idx) => {
            return purchase ? (
              <li key={purchase.id}>
                <PurchaseCard purchase={purchase} />
              </li>
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
