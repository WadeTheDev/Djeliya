/** @format */

// src/domain/cart.ts
import type {Product} from "@/domain/product";

export type CartLine = {
  key: string; // unique per product (product.id)
  productId: string;
  name: string;
  slug: string;
  price: number;
  image: {src: string; alt: string};
  qty: number;
};

export type AddToCartInput = {
  product: Product;
  qty: number;
};
