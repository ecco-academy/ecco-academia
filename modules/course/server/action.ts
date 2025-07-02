"use server";
import { createClient } from "@/lib/utils/supabase/server";
import { Course } from "../types/course";

export const getCourses = async (): Promise<Course[]> => {
  const supabase = await createClient();
  const { data: courses, error } = await supabase.from("courses").select(`
    *,
    instructor:instructorId (*),
    modules (*)
  `);

  if (error) {
    throw new Error(`Error fetching courses: ${error.message}`);
  }

  return courses;
};

export const getCourseById = async (courseId: string): Promise<Course | null> => {
  const supabase = await createClient();
  const { data: course, error } = await supabase
    .from("courses")
    .select(`
    *,
    instructor:instructorId (*),
    modules (*)
  `)
    .eq("id", courseId)
    .single();

  if (error) {
    throw new Error(`Error fetching course by ID: ${error.message}`);
  }

  return course;
};