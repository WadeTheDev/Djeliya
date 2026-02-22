"use client";

import ArticleTemplate from "@/components /Templates/ArticleTemplate/ArticleTemplate";
import { productsMock } from "@/mock/products";
import { useParams, notFound } from "next/navigation";

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const product = productsMock.find((p) => p.id === params.id);

  if (!product) notFound();

  return <ArticleTemplate product={product} />;
}
