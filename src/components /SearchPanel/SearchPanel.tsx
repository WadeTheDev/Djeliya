"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./SearchPanel.module.scss";
import type { Product } from "@/domain/product";

const euro = (n: number) => n.toFixed(2).replace(".", ",") + "€";
const ITEMS_PER_PAGE = 3;

type SearchPanelProps = {
  query: string;
  results: Product[];
  onSelect: (slug: string) => void;
};

export default function SearchPanel({
  query,
  results,
  onSelect,
}: SearchPanelProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(results.length / ITEMS_PER_PAGE));

  const paginatedResults = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return results.slice(start, start + ITEMS_PER_PAGE);
  }, [page, results]);

  useEffect(() => {
    setPage(1);
  }, [query, results.length]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <div
      className={styles.panel}
      role="dialog"
      aria-modal="true"
      aria-label="Résultats de recherche"
    >
      <div className={styles.top}>
        <h2 className={styles.title}>Recherche</h2>
        <p className={styles.sub}>
          Résultats pour <strong>“{query}”</strong>
        </p>

        {results.length > 0 && totalPages > 1 && (
          <div className={styles.navigation}>
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={!canPrev}
              aria-label="Page précédente"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={!canNext}
              aria-label="Page suivante"
            >
              ›
            </button>
          </div>
        )}
      </div>

      <div className={styles.list} aria-label="Résultats">

        {results.length === 0 ? (
          <div className={styles.empty}>
            Aucun produit trouvé pour cette recherche.
          </div>
        ) : (
          paginatedResults.map((product) => (
            <button
              key={product.id}
              type="button"
              className={styles.card}
              onClick={() => onSelect(product.id)}
            >
              <img
                className={styles.thumb}
                src={product.images.packaging.src}
                alt={product.images.packaging.alt}
              />

              <div className={styles.meta}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.desc}>{product.shortDescription}</div>
              </div>

              <div className={styles.price}>{euro(product.price)}</div>
            </button>
          ))
        )}
      </div>

    </div>
  );
}