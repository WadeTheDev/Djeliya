"use client";

import styles from "./ShopTemplate.module.scss";
import FAQAccordion, { FAQItem } from "@/components /Common/FAQAccordion/FAQAccordion";
import NewsLetter from "@/components /Common/NewsLetter/NewsLetter";
import { productsMock as products } from "@/mock/products";
import ArticleCardGrid from "@/components /Common/ArticleCardList/ArticleCardGrid";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOut, zoomTransition } from "@/animations";
import { Lenis } from "lenis/react";

import Reveal from "@/components /Common/Reveal/Reveal";
import { motion } from "framer-motion";

const gridContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const ShopTemplate = () => {
  const router = useTransitionRouter();

  const faq: FAQItem[] = [
    { question: "Question", answer: "Réponse 1..." },
    { question: "Question", answer: "Réponse 2..." },
    { question: "Question", answer: "Réponse 3..." },
    { question: "Question", answer: "Réponse 4..." },
  ];

  return (
    <Lenis root>
      <main className={styles.mainContainer}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />

          <Reveal className={styles.heroContent} y={22} delay={0.3}>
            <h1>Goûtez à la vraie cuisine africaine !</h1>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.“
            </p>
          </Reveal>
        </section>

        <Reveal className={styles.heroPromo} y={14} delay={0.3}>
          <p>
            -10% sur le Thieb : code promo THIEB. (réduction valable pour le «
            thieb au poulet » et sa valeur au sein de la « box découverte » en
            raison d'une erreur d'inscription sur l'emballage – Offre Non
            Cumulable)
          </p>
        </Reveal>

        <div className={styles.productsSection}>
          <div className={styles.inner}>
            <Reveal y={16}>
              <h3>Nos plats:</h3>
            </Reveal>

            {/* Stagger sur la grid */}
            <motion.div
              className={styles.productsGrid}
              variants={gridContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {/* On wrap ArticleCardGrid pour animer chaque item */}
              <ArticleCardGrid
                items={products.map((product) => ({
                  id: product.id,
                  title: product.name,
                  price: `${product.price.toFixed(2)}€`,
                  isNew: product.isNew,
                  href: `/product/${product.id}`,
                }))}
                onItemClick={(item) => {
                  router.push(`/product/${item.id}`, {
                    onTransitionReady: zoomTransition,
                    scroll: false,
                  });
                }}
              /**
               * ✅ IMPORTANT:
               * Pour animer chaque card, il faut que ArticleCardGrid
               * expose un renderItem OU un wrapper par item.
               * Si ton composant ne le permet pas, regarde juste après:
               * je te donne 2 options rapides.
               */
              />
            </motion.div>
          </div>
        </div>

        <Reveal className={styles.detailsSection} y={18}>
          <h3>Nos plats africains en livraison à domicile</h3>
          <p>France, Belgique, Luxembourg, Allemagne, Suisse, Italie, Espagne</p>
        </Reveal>

        <section className={styles.footerSection}>
          <Reveal y={18}>
            <NewsLetter />
          </Reveal>
          <Reveal y={18} delay={0.05}>
            <FAQAccordion items={faq} defaultOpenIndex={null} allowMultiple={false} />
          </Reveal>
        </section>
      </main>
    </Lenis>
  );
};

export default ShopTemplate;