export interface Course {
    _id: string;
    imageUrl: string;
    title: string;
    description: string;
    slug: string;
    price: number;
    instructor: Instructor;
    
    duration?: string;
    rating?: number;
    category?: string;
    reviews?: number;
    level?: string;
    chapters?: Chapter[];
    hotmartUrl?: string;
    createdAt?: string;
    updatedAt?: string;
    isFree?: boolean;
}

export interface Instructor {
    _id: string;
    name: string;
    avatarUrl: string;
    bio?: string;

    courses?: Course[];
}

export interface Chapter {
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
    chapterNumber: string;
}
