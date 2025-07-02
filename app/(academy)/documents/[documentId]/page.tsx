import { redirect } from "next/navigation";
interface DocumentPageProps {
  params: { documentId: string };
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const { documentId } = await params;
  redirect(`/documents/${documentId}/details`);
}
