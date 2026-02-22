"use client"
import ArticleCard from '@/components /Common/ArticleCard/ArticleCard';
import styles from './HomeTemplate.module.scss';
import NewsLetter from '@/components /Common/NewsLetter/NewsLetter';
import RoundButton from '@/components /Common/RoundButton /RoundButton';
import SquareButton from '@/components /Common/SquareButton/SquareButton';
import FAQAccordion, { FAQItem } from '@/components /Common/FAQAccordion/FAQAccordion';
import AvisSlider from '@/components /AvisSlider/AvisSlider';
import { avis } from '@/mock/avis';
import { productsMock } from '@/mock/products';
import { useTransitionRouter } from 'next-view-transitions';
import { slideInOut } from '@/animations';
import { Lenis } from 'lenis/react';


const HomeTemplate = () => {

  const router = useTransitionRouter();

  const faq: FAQItem[] = [
    { question: "Question", answer: "Réponse 1..." },
    { question: "Question", answer: "Réponse 2..." },
    { question: "Question", answer: "Réponse 3..." },
    { question: "Question", answer: "Réponse 4..." },
  ];

  const thirdFirstProducts = productsMock.slice(0, 3);

  return (
    <Lenis root>
      <main className={styles.mainContainer}>
        <section className={styles.firstSection}>
          <div className={styles.marquee} aria-hidden="true">
            <div className={styles.track}>
              <span>Djeliya - Djeliya - Djeliya - Djeliya - Djeliya - Djeliya - Djeliya  </span>
              <span>Djeliya - Djeliya - Djeliya - Djeliya - Djeliya - Djeliya - Djeliya  </span>
            </div>
          </div>

          <div className={styles.citation}>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.“</p>
            <RoundButton
              href='/shop'
              text='Découvrir'
              onClick={(e) => {
                e.preventDefault();
                router.push("/shop", { onTransitionReady: slideInOut });
              }} />
          </div>
        </section>

        <section className={styles.articlesSection}>
          <div className={styles.articlesContainer}>
            {thirdFirstProducts.map((product) => (
              <div key={product.name} className={styles.card}>
                <ArticleCard
                  href={`/product/${product.id}`}
                  key={product.id}
                  title={product.name}
                  price={product.price.toFixed(2) + '€'}
                  imageUrl={"/img/ProductImage.png"}
                  isNew={product.isNew}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/product/${product.id}`, { onTransitionReady: slideInOut });
                  }}
                />
              </div>
            ))}
          </div>
          <div className={styles.textSection}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vo</p>
            <SquareButton
              href='/shop'
              text='Découvrir' onClick={(e) => {
                e.preventDefault();
                router.push("/shop", { onTransitionReady: slideInOut });
              }} />
          </div>
        </section>

        <section className={styles.aboutSection}>
          <img src="/img/HomeAbout.png" alt="" />
          <div className={styles.textContainer}>
            <h2>“Lorem ipsum dolor sit amet, consectetur adipiscing elit“</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <SquareButton href='/about' text='En savoir plus' onClick={() => { console.log('') }} />
          </div>
        </section>


        <AvisSlider title="Ils en parlent" items={avis} />

        <section className={styles.footerSection}>
          <NewsLetter />
          <FAQAccordion items={faq} defaultOpenIndex={null} allowMultiple={false} />
        </section>

      </main>
    </Lenis>
  );
};
export default HomeTemplate;