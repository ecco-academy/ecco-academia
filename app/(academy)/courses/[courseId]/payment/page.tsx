import React from "react";
import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";
interface CoursepaymentPageProps {
  params: { courseId: string };
}

export default async function CoursePaymentPage({
  params,
}: CoursepaymentPageProps) {
  const { courseId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.id) redirect(`/auth/login`);
  return (
    <div className="p-20">
      <h1 className="mb-6">Eeste es el pago del curso: {courseId}</h1>
    </div>
  );
}
