import NewsLetter from "@/components /Common/NewsLetter/NewsLetter";
import styles from "./AboutTemplate.module.scss";

const AboutTemplate = () => {
  return (
    <main className={styles.mainContainer}>
      {/* TOP */}
      <section className={styles.topSection}>
        <h1 className={styles.topTitle}>À PROPOS DE DJELYA</h1>

        <div className={styles.topGrid}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </section>

      {/* MIDDLE */}
      <section className={styles.middleSection}>
        <div className={styles.missionText}>
          <h2>Notre Mission</h2>
          <p>
            La mission de Djeliya est claire : proposer une cuisine africaine authentique à travers des plats généreux et savoureux. Nous respectons les recettes traditionnelles des différentes régions d’Afrique, tout en les adaptant pour les rendre accessibles et adaptées aux goûts européens. Chaque bouchée est une véritable immersion dans l’Afrique, que vous soyez familiarisé ou non avec ces saveurs.
          </p>
          <p>
            Aussi, chez Djeliya, nous croyons que la cuisine est bien plus qu’une simple alimentation : c’est une véritable culture qui permet de tisser des liens, de découvrir des traditions et de vivre des expériences sensorielles uniques. Nos plats sont préparés avec soin et respect des traditions pour que chaque client puisse savourer l’authenticité des recettes africaines.
          </p>
        </div>

        <div className={styles.missionImages}>
          <div className={`${styles.imageWide} ${styles.imageWidebg1}`} />
          <div className={`${styles.imageWide} ${styles.imageWidebg2}`} />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className={styles.ctaSection}>
        <img src="/img/HomeAbout.png" className={styles.roundImage} />

        <div className={styles.ctaText}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p>
            Nos plats sont une véritable invitation au voyage. Le Foutou sauce graine, le Thieb ou encore le Mafé au bœuf ne sont que quelques exemples des plats que nous vous proposons, chacun étant une véritable découverte culinaire. Nos recettes vous transporteront dans les rues animées de Dakar, Bamako, Abidjan et au-delà, tout en vous offrant une expérience gastronomique qui allie authenticité et innovation.
          </p>
          <button className={styles.ctaButton}>Découvrir</button>
        </div>
      </section>

      <section className={styles.footerSection}>
        <NewsLetter />
      </section>
    </main>
  );
};

export default AboutTemplate;