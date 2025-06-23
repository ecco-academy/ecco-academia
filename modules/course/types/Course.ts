export interface Course {
    _id: string;
    imageUrl: string;
    title: string;
    description: string;
    slug: string;
    price: number;
    instructor: Instructor;
    level?: CourseLevel;
    lessonsCount?: number;

    duration?: string;
    rating?: number;
    category?: string;
    reviews?: number;
    modules?: Module[];
    hotmartUrl?: string;
    createdAt?: string;
    updatedAt?: string;
    isFree?: boolean;
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
