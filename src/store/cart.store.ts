/** @format */

"use client";

import {create} from "zustand";
import {persist} from "zustand/middleware";
import type {AddToCartInput, CartLine} from "@/domain/cart";

type CartState = {
  isOpen: boolean;
  lines: CartLine[];

  open: () => void;
  close: () => void;
  toggle: () => void;

  add: (input: AddToCartInput) => void;
  inc: (key: string) => void;
  dec: (key: string) => void;
  remove: (key: string) => void;
  clear: () => void;

  subtotal: () => number;
  countItems: () => number;
};

const toLine = ({product, qty}: AddToCartInput): CartLine => ({
  key: product.id,
  productId: product.id,
  name: product.name,
  slug: product.slug,
  price: product.price,
  image: {
    src: product.images.packaging.src,
    alt: product.images.packaging.alt,
  },
  qty,
});

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      isOpen: false,
      lines: [],

      open: () => set({isOpen: true}),
      close: () => set({isOpen: false}),
      toggle: () => set((s) => ({isOpen: !s.isOpen})),

      add: ({product, qty}) =>
        set((s) => {
          const key = product.id;
          const existing = s.lines.find((l) => l.key === key);
          if (!existing) return {lines: [...s.lines, toLine({product, qty})]};
          return {
            lines: s.lines.map((l) =>
              l.key === key ? {...l, qty: l.qty + qty} : l
            ),
          };
        }),

      inc: (key) =>
        set((s) => ({
          lines: s.lines.map((l) =>
            l.key === key ? {...l, qty: l.qty + 1} : l
          ),
        })),

      dec: (key) =>
        set((s) => ({
          lines: s.lines
            .map((l) =>
              l.key === key ? {...l, qty: Math.max(1, l.qty - 1)} : l
            )
            .filter((l) => l.qty >= 1),
        })),

      remove: (key) =>
        set((s) => ({lines: s.lines.filter((l) => l.key !== key)})),
      clear: () => set({lines: []}),

      subtotal: () => get().lines.reduce((sum, l) => sum + l.price * l.qty, 0),
      countItems: () => get().lines.reduce((sum, l) => sum + l.qty, 0),
    }),
    {
      name: "djelya_cart_v1",
      partialize: (s) => ({lines: s.lines}), // on persiste pas l’UI (isOpen)
    }
  )
);
