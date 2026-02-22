/** @format */

import type {Product} from "@/domain/product";
import {productsMock} from "@/mock/products";

export const mockProvider = {
  async list(): Promise<Product[]> {
    return productsMock;
  },

  async bySlug(slug: string): Promise<Product | null> {
    return productsMock.find((p) => p.slug === slug) ?? null;
  },
};
