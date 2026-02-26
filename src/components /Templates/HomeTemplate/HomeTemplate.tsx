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
    { question: "Où livrez-vous vos plats africains ?", answer: "Djeliya livre ses plats africains faits maison directement à domicile ou en point relais. Notre service couvre toute la France, la Belgique, le Luxembourg, l’Allemagne, la Suisse, l’Italie, l’Espagne, le Portugal, le Royaume-Uni, les Pays-bas, la Pologne et l’Autriche. Où que vous soyez dans ces pays, vous pouvez commander en ligne et recevoir vos plats africains authentiques chez vous en quelques jours. Mais faites nous savoir si vous souhaitez être livré hors de cette zone." },
    { question: " Combien de temps pour être livré ?", answer: "Vos plats sont préparés et expédiés sous 48 à 72h sauf dans le cas des précommandes pour lesquelles la date de livraison est indiquée. La livraison à domicile ou en point relais dépends de votre pays de résidence et du transporteur sélectionné. Les délais de livraisons sont indiqué dans le choix de l’option de livraison." },
    { question: "La livraison est elle gratuite ?", answer: "Selon le pays de destination, la livraison gratuite est à partir de 80 €, 100 € ou 120 € d’achats. Avant ce montant, Djeliya prend en charge une partie des frais de livraison afin de pouvoir vous permettre de profiter de vos plats africains livrés à domicile ou en points relais aux meilleurs prix." },
    { question: "Y’a t’il un minimum de commande ?", answer: "Non, nous vous livrons dès 1 plats. Il n’y a aucun montant minimal ni aucune obligation d’abonnement." },
    { question: "Les plats sont-ils frais à la livraison ?", answer: "Oui, tous nos plats sont cuisinés puis conditionnés selon un protocole validés par des tests en laboratoires pour garantir leur stabilité et leur sécurité alimentaire, même sans conservateur." },
    { question: "Comment puis-je suivre ma commande ?", answer: "Un numéro de suivi est envoyé par email dès l’expédition de votre colis." },
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