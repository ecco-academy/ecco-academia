import { useEffect, useState } from "react";
import { getCourseById, getCourses } from "@/app/(academy)/courses/[courseId]/actions";
import { Course } from "@/types/course";

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>();
  const [error, setError] = useState(null);
  
  useEffect(() => {
    getCourses()
      .then((data) => setCourses(data))
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setError(error);
      });
  }, [getCourses]);

  return { courses, error };
};

export const useCourseById = (courseId: string) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!courseId) return;

    getCourseById(courseId)
      .then((data) => {
        if (data) {
          setCourse(data);
        } else {
          console.error(`Course with ID ${courseId} not found.`);
        }
      })
      .catch((error) => {
        console.error("Error fetching course by ID:", error);
        setError(error);
      });
  }, [courseId]);

  return { course, error };
};
