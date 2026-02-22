/** @format */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Product } from "@/types/product";
import styles from "./ArticleTemplate.module.scss";
import { Lenis } from 'lenis/react';
import { useTransitionRouter } from "next-view-transitions";
import { slideInOut, zoomTransition } from "@/animations";
import { useCartStore } from "@/store/cart.store";

type ArticleTemplateProps = {
  product: Product;
};

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

type Dir = 1 | -1;

const ArticleTemplate = ({ product }: ArticleTemplateProps) => {
  const router = useTransitionRouter();

  const [index, setIndex] = useState(0);
  const [qty, setQty] = useState(1);

  // ✅ INTRO (apparition page)
  const [isIntro, setIsIntro] = useState(true);
  useEffect(() => {
    const t = window.setTimeout(() => setIsIntro(false), 900);
    return () => window.clearTimeout(t);
  }, []);

  // --- slide transition state (enter/leave + direction) ---
  const [isSliding, setIsSliding] = useState(false);
  const [dir, setDir] = useState<Dir>(1);
  const fromIndexRef = useRef(0);

  const progress = useMemo(() => {
    // 0 -> 0%, 1 -> 50%, 2 -> 100%
    return (index / 2) * 100;
  }, [index]);

  const fromIndex = fromIndexRef.current;

  const goTo = (next: number) => {
    const clamped = clamp(next, 0, 2);
    if (clamped === index) return;

    fromIndexRef.current = index;
    setDir(clamped > index ? 1 : -1);
    setIsSliding(true);
    setIndex(clamped);
  };

  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  const slideClass = (slideIdx: number, extra: string) => {
    return [
      styles.slide,
      extra,
      dir === 1 ? styles.dirNext : styles.dirPrev,
      isSliding && fromIndex === slideIdx ? styles.isLeaving : "",
      isSliding && index === slideIdx ? styles.isEntering : "",
    ]
      .filter(Boolean)
      .join(" ");
  };

  const add = useCartStore((s) => s.add);
  const openCart = useCartStore((s) => s.open);

  const onAddToCart = () => {
    add({ product, qty });
    openCart();
  };

  return (
    <Lenis root>
      <main className={`${styles.viewport} ${isIntro ? styles.intro : ""}`}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}vw)` }}
          onTransitionStart={(e) => {
            if (e.propertyName !== "transform") return;
            setIsSliding(true);
          }}
          onTransitionEnd={(e) => {
            if (e.propertyName !== "transform") return;
            setIsSliding(false);
            fromIndexRef.current = index;
          }}
        >
          {/* SLIDE 01 */}
          <section className={slideClass(0, styles.slide1)}>
            {/* Left */}
            <div className={styles.left}>
              <div className={styles.goBack}>
                <span className={styles.chevron} />
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/shop", { onTransitionReady: zoomTransition });
                  }}
                >
                  Retour
                </span>
              </div>
              <h1 className={styles.title}>{product.name}</h1>

              <div className={styles.starsRow} aria-label={`Note ${product.rating.value} sur 5`}>
                {[1, 2, 3, 4, 5].map((i) => {
                  const isFull = product.rating.value >= i;
                  const isHalf = product.rating.value >= i - 0.5 && product.rating.value < i;

                  return (
                    <span
                      key={i}
                      className={`${styles.star} ${isFull ? styles.full : isHalf ? styles.half : styles.empty
                        }`}
                      aria-hidden
                    >
                      ★
                    </span>
                  );
                })}
              </div>

              <p className={styles.quote}>“{product.quote}”</p>
            </div>

            {/* Center */}
            <div className={styles.center}>
              <img
                className={styles.packaging}
                src={product.images.packaging.src}
                alt={product.images.packaging.alt}
                draggable={false}
              />
            </div>

            {/* Right */}
            <div className={styles.right}>
              {/* progress bar */}
              <div className={styles.progress}>
                <button className={styles.nextArrow} onClick={goNext} aria-label="Slide suivante" />
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className={styles.info}>
                <div className={styles.qtyWeight}>
                  <div>
                    <span className={styles.qtyLabel}>Qty: </span>
                    <span className={styles.qtyValue}>{product.details.weight}</span>
                  </div>

                  <div className={styles.stepperRow}>
                    <button
                      className={styles.stepperBtn}
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      aria-label="Diminuer la quantité"
                    >
                      -
                    </button>
                    <span className={styles.stepperValue}>{qty}</span>
                    <button
                      className={styles.stepperBtn}
                      onClick={() => setQty((q) => q + 1)}
                      aria-label="Augmenter la quantité"
                    >
                      +
                    </button>
                  </div>
                </div>

                <p className={styles.short}>{product.shortDescription}</p>

                <button className={styles.cta} onClick={onAddToCart}>
                  AJOUTER AU PANIER - {product.price.toFixed(2).replace(".", ",")}€
                </button>
              </div>
            </div>
          </section>

          {/* SLIDE 02 */}
          <section className={slideClass(1, styles.slide2)}>
            {/* Left panel (texte) */}
            <div className={styles.s2Left}>
              <div className={styles.s2Top}>
                <div className={styles.s2ProgressWrap}>
                  <div className={styles.s2ProgressTrack}>
                    <div className={styles.s2ProgressFill} style={{ width: `${progress}%` }} />
                  </div>
                </div>

                <div className={styles.s2Arrows}>
                  <button
                    className={styles.s2ArrowBtn}
                    onClick={goPrev}
                    aria-label="Slide précédente"
                    disabled={index === 0}
                  >
                    ←
                  </button>
                  <button
                    className={styles.s2ArrowBtn}
                    onClick={goNext}
                    aria-label="Slide suivante"
                    disabled={index === 2}
                  >
                    →
                  </button>
                </div>
              </div>

              <div className={styles.s2Content}>
                <h2 className={styles.s2Title}>Description</h2>

                <p className={styles.s2Text}>{product.description}</p>

                <div className={styles.s2Bottom}>
                  <span className={styles.s2Index}>02.</span>

                  <button className={styles.s2Cta} onClick={onAddToCart}>
                    AJOUTER AU PANIER - {product.price.toFixed(2).replace(".", ",")}€
                  </button>
                </div>
              </div>
            </div>

            {/* Right panel (image) */}
            <div className={styles.s2Right}>
              <img
                className={styles.s2Image}
                src={product.images.dishes?.[0]?.src || product.images.packaging.src}
                alt={product.images.dishes?.[0]?.alt || product.images.packaging.alt}
                draggable={false}
              />
              <div className={styles.s2ImageOverlay} />
            </div>
          </section>

          {/* SLIDE 03 */}
          <section className={slideClass(2, styles.slide3)}>
            {/* Header ligne + titre + flèches */}
            <div className={styles.s3Header}>
              <h2 className={styles.s3Title}>
                <span className={styles.s3Index}>03.</span> Détails
              </h2>
              <div className={styles.s3Arrows}>
                <button className={styles.s3ArrowBtn} onClick={goPrev} aria-label="Slide précédente">
                  ←
                </button>
                <button
                  className={styles.s3ArrowBtn}
                  onClick={goNext}
                  aria-label="Slide suivante"
                  disabled
                >
                  →
                </button>
              </div>
            </div>

            <div className={styles.s3Body}>
              {/* LEFT (image + CTA) */}
              <div className={styles.s3Left}>
                <div className={styles.s3HeaderLine}>
                  <div className={styles.s3ProgressFill} style={{ width: `${progress}%` }} />
                </div>

                <div className={styles.s3ImageWrap}>
                  <img
                    className={styles.s3Image}
                    src={
                      product.images.dishes?.[1]?.src ||
                      product.images.dishes?.[0]?.src ||
                      product.images.packaging.src
                    }
                    alt={
                      product.images.dishes?.[1]?.alt ||
                      product.images.dishes?.[0]?.alt ||
                      product.images.packaging.alt
                    }
                    draggable={false}
                  />
                </div>

                <button className={styles.s3Cta} onClick={onAddToCart}>
                  AJOUTER AU PANIER - {product.price.toFixed(2).replace(".", ",")}€
                </button>
              </div>

              {/* RIGHT (details) */}
              <div className={styles.s3Right}>
                <div className={styles.s3Block}>
                  <h3 className={styles.s3BlockTitle}>Préparation &amp; Réchauffage</h3>
                  <ul className={styles.s3List}>
                    {product.details.preparation.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.s3Block}>
                  <h3 className={styles.s3BlockTitle}>Ingrédients</h3>
                  <p className={styles.s3Text}>{product.details.ingredients.join(", ")}</p>
                </div>

                <div className={styles.s3Block}>
                  <h3 className={styles.s3BlockTitle}>Allergènes</h3>
                  <p className={styles.s3Text}>{product.details.allergens}</p>
                </div>

                <div className={styles.s3Block}>
                  <h3 className={styles.s3BlockTitle}>Valeurs Nutritionnelles (pour 100g)</h3>
                  <ul className={styles.s3List}>
                    <li>Énergie : {product.details.nutritionalValues.energy}</li>
                    <li>Matières grasses : {product.details.nutritionalValues.fat}</li>
                    <li>Dont acides gras saturés : {product.details.nutritionalValues.saturatedFat}</li>
                    <li>Glucides : {product.details.nutritionalValues.carbs}</li>
                    <li>Dont sucres : {product.details.nutritionalValues.sugar}</li>
                    <li>Protéines : {product.details.nutritionalValues.protein}</li>
                    <li>Sel : {product.details.nutritionalValues.salt}</li>
                  </ul>
                </div>

                <div className={styles.s3Block}>
                  <h3 className={styles.s3BlockTitle}>Poids &amp; Conservation</h3>
                  <ul className={styles.s3List}>
                    <li>Poids net : {product.details.weight}</li>
                    {product.details.conservation.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Lenis>
  );
};

export default ArticleTemplate;