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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus dui convallis. Tempus leo eu aenean sed diam urna
            tempor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus dui convallis. Tempus leo eu aenean sed diam urna
            tempor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus dui convallis. Tempus leo eu aenean sed diam urna
            tempor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus dui convallis. Tempus leo eu aenean sed diam urna
            tempor.
          </p>
        </div>
      </section>

      {/* MIDDLE */}
      <section className={styles.middleSection}>
        <div className={styles.missionText}>
          <h2>Notre Mission</h2>
          <p>
            La mission de Djelya est claire : proposer une cuisine africaine
            authentique à travers des plats généreux et savoureux...
          </p>
          <p>
            Aussi, chez Djelya, nous croyons que la cuisine est bien plus qu’une
            simple alimentation : c’est une véritable culture...
          </p>
        </div>

        <div className={styles.missionImages}>
          <div className={styles.imageWide} />
          <div className={styles.imageWide} />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.roundImage} />

        <div className={styles.ctaText}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p>
            Nos plats sont une véritable invitation au voyage. Le{" "}
            <span>Foutou sauce graine</span>, le <span>Thiéb</span> ou encore le{" "}
            <span>Mafè au boeuf</span>...
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