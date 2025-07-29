export interface Purchase {
    id: number;
    created_at: Date;
    userId: number;
    productId: number;
    productName: string;
    quantity: number;
    realPrice: number;
    priceWithDiscount: number;
    currency: string;
  }
  