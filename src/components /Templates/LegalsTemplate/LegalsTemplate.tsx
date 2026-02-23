import styles from "./LegalsTemplate.module.scss";
import NewsLetter from "@/components /Common/NewsLetter/NewsLetter";

const LegalsTemplate = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.legalWrap}>
        <h1 className={styles.title}>MENTIONS LÉGALES</h1>

        <div className={styles.content}>
          <h2>Utilisation du site</h2>
          <p>
            L’accès et l’utilisation du site www.Djeliya.com sont soumis au respect
            des Conditions Générales de Vente, aux présentes Mentions Légales et
            à la Politique de Confidentialité.
          </p>

          <h2>Éditeur</h2>
          <p>
            Djeliya, Société par actions simplifiée au capital de 2000 euros,
            dont le siège social est situé au 55 rue Grignan 13006 Marseille,
            immatriculée au RCS d’Avignon sous le numéro 92859820000014.
          </p>
          <p>
            Numéro de contact : 0759562618 <br />
            Adresse mail de contact : contact@djeliya.com
          </p>

          <h2>Directeur de publication</h2>
          <p>Le directeur de la publication est Madame COLLOT Djayi</p>

          <h2>Hébergeur</h2>
          <p>Le site est hébergé par O2SWITCH</p>
        </div>
      </section>

      <section className={styles.footerSection}>
        <NewsLetter />
      </section>
    </main>
  );
};

export default LegalsTemplate;