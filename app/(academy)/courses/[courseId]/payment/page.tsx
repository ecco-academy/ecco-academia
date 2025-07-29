import React from "react";
import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";
import HotmartCheckout from "@/components/hotmart-checkout-form";
import { getCourseById } from "@/app/(academy)/courses/[courseId]/actions";
import { Course } from "@/types/course";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Alert } from "@/components/ui/alert";
interface CoursePaymentPageProps {
  params: Promise<{ courseId: string }>;
}

export default async function CoursePaymentPage({
  params,
}: CoursePaymentPageProps) {
  const { courseId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id)
    redirect(`/auth/login?redirectTo=/courses/${courseId}/payment`);
  const course = await getCourseById(courseId);

  return (
    <div className="max-w-screen-full mx-auto pt-16 lg:pt-20 px-4">
      {!course ? (
        <Alert className="mb-4">No se encontró el curso solicitado.</Alert>
      ) : (
        <>
          <CheckoutPageBreadcrumb course={course} className="mb-8 lg:mb-12" />
          <div className="max-w-2xl mx-auto">
            <HotmartCheckout
              userEmail={user.email || ""}
              userName={user?.user_metadata?.first_name || ""}
              hotmartOfferCode={course?.hotmartCode || ""}
            />
          </div>
        </>
      )}
    </div>
  );
}
interface CheckoutPageBreadcrumbProps {
  course: Course;
  className?: string;
}

const CheckoutPageBreadcrumb: React.FC<CheckoutPageBreadcrumbProps> = ({
  course,
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
          <BreadcrumbPage>Cursos</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{course.title}</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Pago</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
