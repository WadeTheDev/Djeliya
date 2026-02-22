/** @format */

import type {Product} from "@/domain/product";

type WooStoreImage = {
  id: number;
  src: string;
  alt: string;
};

type WooStoreProduct = {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  images?: WooStoreImage[];
  prices?: {price?: string};
  average_rating?: string;
  review_count?: number;
};

const toNumber = (v: unknown) => {
  const n = typeof v === "string" ? Number(v) : typeof v === "number" ? v : NaN;

  return Number.isFinite(n) ? n : 0;
};

const toPrice = (woo: WooStoreProduct) => {
  const raw = woo?.prices?.price;
  if (!raw) return 0;

  // Si Woo renvoie "990" => 9.90
  if (!raw.includes(".")) {
    const n = Number(raw);
    return n / 100;
  }

  return Number(raw);
};

export const mapWooStoreProductToProduct = (woo: WooStoreProduct): Product => {
  const images = woo.images ?? [];
  const featured = images[0];
  const dishes = images.slice(1, 3);

  return {
    id: String(woo.id),
    name: woo.name ?? "",
    slug: woo.slug ?? "",
    isNew: false,
    rating: {
      value: toNumber(woo.average_rating),
      count: woo.review_count ?? 0,
    },
    quote: "",
    description: woo.description ?? "",
    shortDescription: woo.short_description ?? "",
    price: toPrice(woo),

    images: {
      packaging: {
        src: featured?.src ?? "/img/placeholder.png",
        alt: featured?.alt ?? woo.name ?? "",
      },
      dishes: dishes.map((img) => ({
        src: img.src,
        alt: img.alt || woo.name || "",
      })),
    },

    details: {
      preparation: [],
      ingredients: [],
      allergens: "",
      nutritionalValues: {
        energy: "",
        fat: "",
        saturatedFat: "",
        carbs: "",
        sugar: "",
        protein: "",
        salt: "",
      },
      weight: "",
      conservation: [],
    },
  };
};
