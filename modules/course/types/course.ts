export interface Course {
    id: string; //
    title: string; //
    description: string; //
    isMain?: boolean; //
    hotmartCode?: string; //
    createdAt?: string; //
    slug: string; //
    price: number; //
    imageUrl: string; //
    instructor: Instructor;
    level?: CourseLevel;
    lessonsCount?: number;

    duration?: string;
    modules?: Module[];
    updatedAt?: string;
    // category?: string;
    // reviews?: number;
    // rating?: number;
    // isFree?: boolean;
}

export type CourseLevel = "beginner" | "intermediate" | "advanced";

export interface Instructor {
    _id: string;
    name: string;
    avatarUrl: string;
    bio?: string;
    description?: string;
    courses?: Course[];
}

export interface Module {
    _id: string;
    title: string;
    description: string;
    number: string;
    courseId: string;
    lessons: Lesson[];
}

export interface Lesson {
    _id: string;
    title: string;
    description: string;
    duration: string;
    videoUrl: string;
    courseId: string;
    moduleId: string;
    number: string;
}
