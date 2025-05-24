import { redirect } from "next/navigation";
interface CoursePageProps {
  params: { courseId: string };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  redirect(`/courses/${courseId}/details`);
}
