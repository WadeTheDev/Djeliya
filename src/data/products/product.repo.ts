/** @format */

import type {Product} from "@/domain/product";
import {mockProvider} from "./providers/mock.provider";
import {wooProvider} from "./providers/woo.provider";

type ProductProvider = {
  list: () => Promise<Product[]>;
  bySlug: (slug: string) => Promise<Product | null>;
};

const PROVIDER = process.env.NEXT_PUBLIC_DATA_PROVIDER ?? "mock";

const provider: ProductProvider =
  PROVIDER === "woo" ? wooProvider : mockProvider;

export const productRepo = {
  list: () => provider.list(),
  bySlug: (slug: string) => provider.bySlug(slug),
};
