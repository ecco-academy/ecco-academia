import Link from "next/link";
interface CourseDetailsPageProps {
  params: { courseId: string };
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { courseId } = await params;
  return (
    <div className="p-20">
      <h1 className="mb-6">Estos son los detalles del curso: {courseId}</h1>
      <Link href={`/courses/${courseId}/payment`}>Comprar</Link>
    </div>
  );
}
