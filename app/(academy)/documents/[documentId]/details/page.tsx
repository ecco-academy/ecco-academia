import { getDocumentById } from "@/modules/document/server/action";
import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";
import DocumentDetailsClient from "../../../../../modules/document/components/document-details-client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PageProps } from "@/.next/types/app/page";

interface DocumentDetailsPageProps extends PageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentDetailsPage({
  params,
}: DocumentDetailsPageProps) {
  const { documentId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) redirect(`/auth/login?redirectTo=/documents/${documentId}`);

  const document = await getDocumentById(documentId);

  if (!document) {
    return <div className="pt-16">No se encontró el documento solicitado.</div>;
  }

  return (
    <div className="max-w-screen-full mx-auto pt-16 lg:pt-20 px-4">
      <DocumentBreadcrumb document={document} />
      <div className="w-full flex flex-col items-center justify-center pt-2 mt-4 md:mt-6">
        <DocumentDetailsClient document={document} />
      </div>
    </div>
  );
}

interface DocumentBreadcrumbProps {
  document: { name: string };
  className?: string;
}

const DocumentBreadcrumb: React.FC<DocumentBreadcrumbProps> = ({
  document,
  className,
}) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/home">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Documentos</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{document.name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
