"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AvisSlider.module.scss";

type Avis = {
  id: string;
  title: string;
  rating: number; // 0..5
  content: string;
  author: string;
};

type Props = {
  title?: string;
  items: Avis[];
};

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

function Stars({ rating }: { rating: number }) {
  const r = clamp(Math.round(rating), 0, 5);
  return (
    <div className={styles.stars} aria-label={`${r} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < r ? styles.starFull : styles.starEmpty}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function AvisSlider({ title = "Avis", items }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [perView, setPerView] = useState(2);

  // 2 cartes desktop, 1 carte mobile
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = () => setPerView(mq.matches ? 1 : 2);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const maxIndex = useMemo(() => Math.max(0, items.length - perView), [items.length, perView]);
  const [index, setIndex] = useState(0);

  // Re-clamp si items/perView change
  useEffect(() => setIndex((i) => clamp(i, 0, maxIndex)), [maxIndex]);

  const scrollToIndex = (next: number) => {
    const el = trackRef.current;
    if (!el) return;

    const clamped = clamp(next, 0, maxIndex);
    setIndex(clamped);

    const card = el.querySelector<HTMLElement>(`[data-avis-card="true"]`);
    if (!card) return;

    const gap = 20; // doit matcher le gap CSS
    const cardWidth = card.offsetWidth;
    const left = clamped * (cardWidth + gap);

    el.scrollTo({ left, behavior: "smooth" });
  };

  const prev = () => scrollToIndex(index - 1);
  const next = () => scrollToIndex(index + 1);

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrowBtn}
            onClick={prev}
            disabled={index === 0}
            aria-label="Avis précédent"
          >
            ‹
          </button>
          <button
            type="button"
            className={styles.arrowBtn}
            onClick={next}
            disabled={index === maxIndex}
            aria-label="Avis suivant"
          >
            ›
          </button>
        </div>
      </header>

      <div className={styles.viewport}>
        <div ref={trackRef} className={styles.track}>
          {items.map((a) => (
            <article key={a.id} className={styles.card} data-avis-card="true">
              <div className={styles.top}>
                <h4 className={styles.cardTitle}>{a.title}</h4>
                <Stars rating={a.rating} />
              </div>

              <p className={styles.content}>{a.content}</p>

              <div className={styles.footer}>
                <span className={styles.author}>{a.author}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}