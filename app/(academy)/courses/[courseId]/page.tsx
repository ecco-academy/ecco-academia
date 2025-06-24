import HotmartCheckout from "@/modules/checkout/components/hotmart-checkout-form";
import { redirect } from "next/navigation";
interface CoursePageProps {
  params: { courseId: string };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  redirect(`/courses/${courseId}/details`);
}
