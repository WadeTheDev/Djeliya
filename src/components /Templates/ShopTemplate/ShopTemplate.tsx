"use client";

import ArticleCard from "@/components /Common/ArticleCard/ArticleCard";
import styles from "./ShopTemplate.module.scss";
import FAQAccordion, { FAQItem } from "@/components /Common/FAQAccordion/FAQAccordion";
import NewsLetter from "@/components /Common/NewsLetter/NewsLetter";
import { productsMock as products } from "@/mock/products";
import ArticleCardGrid from "@/components /Common/ArticleCardList/ArticleCardGrid";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOut } from "@/animations";
import { Lenis } from "lenis/react";

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

          <div className={styles.heroContent}>
            <h1>Goûtez à la vraie cuisine africaine !</h1>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.“
            </p>
          </div>

        </section>
        <div className={styles.heroPromo}>
          <p>
            -10% sur le Thieb : code promo THIEB. (réduction valable pour le «
            thieb au poulet » et sa valeur au sein de la « box découverte » en
            raison d'une erreur d'inscription sur l'emballage – Offre Non
            Cumulable)
          </p>
        </div>

        {/* le reste de ta page après */}

        <div className={styles.productsSection}>
          <div className={styles.inner}>
            <h3>Nos plats:</h3>

            <div className={styles.productsGrid}>
              <ArticleCardGrid
                items={
                  products.map((product) => ({
                    id: product.id,
                    title: product.name,
                    price: `${product.price.toFixed(2)}€`,
                    isNew: product.isNew,
                    href: `/product/${product.id}`,
                  }))
                }
                onItemClick={(item) => {
                  router.push(`/product/${item.id}`, { onTransitionReady: slideInOut, scroll: false });
                }}
              />
            </div>
          </div>
        </div>


        <div className={styles.detailsSection}>
          <h3>Nos plats africains en livraison à domicile</h3>
          <p>France, Belgique, Luxembourg, Allemagne, Suisse, Italie, Espagne</p>
        </div>


        <section className={styles.footerSection}>
          <NewsLetter />
          <FAQAccordion items={faq} defaultOpenIndex={null} allowMultiple={false} />
        </section>

      </main>
    </Lenis>
  );
};

export default ShopTemplate;
