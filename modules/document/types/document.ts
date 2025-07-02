export interface Document {
    id: string;
    name: string;
    description: string;
    nameSlug: string;
    imageUrl: string;
    price: number;
    format: string;
    downloadUrl: string;
    isFree?: boolean;
    createdAt?: string;

}