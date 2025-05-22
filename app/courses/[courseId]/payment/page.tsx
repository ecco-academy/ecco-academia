import { auth } from "@clerk/nextjs/server";

interface CoursepaymentPageProps {
  params: { courseId: string };
}

export default async function CoursePaymentPage({
  params,
}: CoursepaymentPageProps) {
  const { courseId } = await params;
  const { userId, redirectToSignIn } = await auth();
  if (!userId)
    redirectToSignIn({
      returnBackUrl: `/courses/${courseId}/payment`,
    });
  return (
    <div className="p-20">
      <h1 className="mb-6">Eeste es el pago del curso: {courseId}</h1>
    </div>
  );
}
