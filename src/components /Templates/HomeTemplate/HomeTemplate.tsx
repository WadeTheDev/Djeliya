"use client";

import ArticleCard from "@/components /Common/ArticleCard/ArticleCard";
import styles from "./HomeTemplate.module.scss";
import NewsLetter from "@/components /Common/NewsLetter/NewsLetter";
import SquareButton from "@/components /Common/SquareButton/SquareButton";
import FAQAccordion, { FAQItem } from "@/components /Common/FAQAccordion/FAQAccordion";
import AvisSlider from "@/components /AvisSlider/AvisSlider";
import { avis } from "@/mock/avis";
import { productsMock } from "@/mock/products";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOut, zoomTransition } from "@/animations";
import { Lenis } from "lenis/react";
import { useEffect, useState } from "react";
import Reveal from "@/components /Common/Reveal/Reveal";
import { motion } from "framer-motion";
import RoundButton from "@/components /Common/RoundButton /RoundButton";

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const HomeTemplate = () => {
  const router = useTransitionRouter();
  const [delay, setDelay] = useState(0.3); // Default delay

  const faq: FAQItem[] = [
    { question: "Question", answer: "Réponse 1..." },
    { question: "Question", answer: "Réponse 2..." },
    { question: "Question", answer: "Réponse 3..." },
    { question: "Question", answer: "Réponse 4..." },
  ];

  const thirdFirstProducts = productsMock.slice(0, 3);

  useEffect(() => {
    const isHardRefresh = performance.navigation.type === performance.navigation.TYPE_RELOAD;
    const referrer = document.referrer;

    if (isHardRefresh || !referrer) {
      setDelay(0.3);
    } else {
      setDelay(0.9);
    }
  }, []);

  //c'est un hard refresh, on met un delay de 0.3s sinon 0.9s 


  return (
    <Lenis root>
      <main className={styles.mainContainer}>
        <section className={styles.firstSection}>
          <div className={styles.marquee} aria-hidden="true">
            <div className={styles.track}>
              <span>Djeliya - Djeliya - Djeliya - Djeliya - Djeliya - Djeliya - Djeliya </span>
              <span>Djeliya - Djeliya - Djeliya - Djeliya - Djeliya - Djeliya - Djeliya </span>
            </div>
          </div>

          <Reveal className={styles.citation} y={22} delay={0.3}>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.“
            </p>
            <RoundButton
              href="/shop"
              text="Découvrir"
              onClick={(e) => {
                e.preventDefault();
                router.push("/shop", { onTransitionReady: slideInOut });
              }}
            />
          </Reveal>
        </section>

        <section className={styles.articlesSection}>
          <motion.div
            className={styles.articlesContainer}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {thirdFirstProducts.map((product) => (
              <motion.div key={product.id} className={styles.card} variants={cardItem}>
                <ArticleCard
                  href={`/product/${product.id}`}
                  title={product.name}
                  price={product.price.toFixed(2) + "€"}
                  imageUrl={"/img/ProductImage.png"}
                  isNew={product.isNew}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/product/${product.id}`, { onTransitionReady: zoomTransition });
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          <Reveal className={styles.textSection} delay={0.05} y={18}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua...
            </p>
            <SquareButton
              href="/shop"
              text="Découvrir"
              onClick={(e) => {
                e.preventDefault();
                router.push("/shop", { onTransitionReady: slideInOut });
              }}
            />
          </Reveal>
        </section>

        <section className={styles.aboutSection}>
          <Reveal y={18}>
            <img src="/img/HomeAbout.png" alt="" />
          </Reveal>

          <Reveal className={styles.textContainer} delay={0.08} y={22}>
            <h2>“Lorem ipsum dolor sit amet, consectetur adipiscing elit“</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua...
            </p>
            <SquareButton
              href="/about"
              text="En savoir plus"
              onClick={(e) => {
                e.preventDefault();
                router.push("/about", { onTransitionReady: slideInOut });
              }} />
          </Reveal>
        </section>

        <AvisSlider items={avis} />

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

export default HomeTemplate;