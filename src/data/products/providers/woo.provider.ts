/** @format */

import type {Product} from "@/domain/product";
import {mapWooStoreProductToProduct} from "../../mappers/woo.mapper";

const BASE_URL = process.env.NEXT_PUBLIC_WP_URL!;

const fetchJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, {
    next: {revalidate: 60},
  });

  if (!res.ok) {
    throw new Error(`Woo fetch failed: ${res.status}`);
  }

  return res.json();
};

export const wooProvider = {
  async list(): Promise<Product[]> {
    const url = `${BASE_URL}/wp-json/wc/store/products?per_page=100`;
    const data = await fetchJson<any[]>(url);
    return data.map(mapWooStoreProductToProduct);
  },

  async bySlug(slug: string): Promise<Product | null> {
    const url = `${BASE_URL}/wp-json/wc/store/products?slug=${slug}`;
    const data = await fetchJson<any[]>(url);

    if (!data.length) return null;

    return mapWooStoreProductToProduct(data[0]);
  },
};
