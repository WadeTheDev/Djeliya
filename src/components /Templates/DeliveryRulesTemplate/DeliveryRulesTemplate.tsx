import styles from "./DeliveryRulesTemplate.module.scss";
import NewsLetter from "@/components /Common/NewsLetter/NewsLetter";

const DeliveryRulesTemplate = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.wrap}>
        <h1 className={styles.title}>LIVRAISON EN EUROPE</h1>

        <p className={styles.intro}>
          Djeliya livre des plats africains faits maison directement chez vous
          et prêts à réchauffer, dans plusieurs pays d’Europe :
        </p>

        <div className={styles.countries}>
          <div className={styles.country}>
            <h2>Livraison en France</h2>
            <p>
              Nous livrons partout en France, en livraison à domicile et point
              relais. Que vous soyez à Paris, Lyon, Marseille, Lille, Bordeaux,
              Toulouse ou dans une petite ville, Djeliya vous apporte le goût
              authentique de l’Afrique.
            </p>
          </div>

          <div className={styles.country}>
            <h2>Livraison en Belgique</h2>
            <p>
              Djeliya est disponible à domicile et en points relais à Bruxelles,
              Liège, Anvers et dans toute la Belgique. Commandez vos plats
              africains en ligne et recevez-les en quelques jours.
            </p>
          </div>

          <div className={styles.country}>
            <h2>Livraison au Luxembourg</h2>
            <p>
              Notre service couvre l’ensemble du Luxembourg avec une livraison
              rapide et fiable à domicile et en points relais.
            </p>
          </div>

          <div className={styles.country}>
            <h2>Livraison en Allemagne</h2>
            <p>
              Que vous soyez à Berlin, Hambourg, Munich ou Cologne, Djeliya
              vous permet de déguster de vrais plats africains en livraison à
              domicile et en points relais.
            </p>
          </div>

          <div className={styles.country}>
            <h2>Livraison en Suisse</h2>
            <p>
              Djeliya livre <strong>UNIQUEMENT À DOMICILE</strong> dans toute la
              Suisse, de Genève à Zurich, avec la même qualité et authenticité.
            </p>
          </div>

          <div className={styles.country}>
            <h2>Livraison en Italie</h2>
            <p>
              Nos plats africains arrivent à domicile et en points relais en
              Italie : Milan, Rome, Naples et bien d’autres villes.
            </p>
          </div>

          <div className={styles.country}>
            <h2>Livraison en Espagne</h2>
            <p>
              Madrid, Barcelone, Valence, Séville… Djeliya est présent en
              Espagne pour vous livrer des plats africains prêts à savourer à
              domicile et en points relais.
            </p>
          </div>

          <div className={styles.country}>
            <h2>Livraison en Pologne</h2>
            <p>
              Varsovie, Cracovie, Gdańsk, Wrocław… Djeliya livre désormais ses
              plats africains en Pologne, <strong>UNIQUEMENT en point relais</strong>.
              Des saveurs d’Afrique de l’Ouest prêtes à déguster, où que vous soyez.
            </p>
          </div>

          <div className={styles.country}>
            <h2>Livraison au Portugal</h2>
            <p>
              Lisbonne, Porto, Faro, Coimbra… Djeliya s’invite au Portugal pour
              vous faire découvrir le meilleur de la cuisine africaine.
              Livraison rapide à domicile ou en points relais, pour des plats
              authentiques et prêts à savourer.
            </p>
          </div>

          <div className={styles.country}>
            <h2>Livraison au Royaume-Uni</h2>
            <p>
              Londres, Manchester, Birmingham, Liverpool… Djeliya arrive au
              Royaume-Uni pour vous faire découvrir le meilleur de la cuisine
              africaine. Livraison rapide directement à domicile, pour des plats
              authentiques et prêts à savourer.
            </p>
          </div>

          <div className={styles.country}>
            <h2>Livraison aux Pays-Bas</h2>
            <p>
              Amsterdam, Rotterdam, La Haye, Utrecht… Djeliya s’invite aux
              Pays-Bas pour vous faire découvrir le meilleur de la cuisine
              africaine. Livraison rapide à domicile ou en points relais, pour
              des plats authentiques et prêts à savourer.
            </p>
          </div>

          <div className={styles.country}>
            <h2>Livraison en Autriche</h2>
            <p>
              Vienne, Salzbourg, Graz, Linz… Djeliya livre désormais ses plats
              africains en Autriche, en point relais ou à domicile. Des saveurs
              d’Afrique de l’Ouest prêtes à déguster, où que vous soyez.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.footerSection}>
        <NewsLetter />
      </section>
    </main>
  );
};

export default DeliveryRulesTemplate;