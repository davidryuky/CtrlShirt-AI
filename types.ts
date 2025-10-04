
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  sizes: string[];
  rating: number;
  reviewCount: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}