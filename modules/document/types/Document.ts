export interface Document {
    _id: string;
    title: string;
    description: string;
    slug: string;
    imageUrl: string;
    price: number;
    isFree?: boolean;
    downloadUrl?: string;
    createdAt?: string;
    updatedAt?: string;
}