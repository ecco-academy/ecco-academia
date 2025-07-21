import { PageProps } from "@/.next/types/app/page";
import { redirect } from "next/navigation";
interface DocumentPageProps extends PageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const { documentId } = await params;
  redirect(`/documents/${documentId}/details`);
}
