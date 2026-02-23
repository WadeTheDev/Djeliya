import styles from "./ConfidentialityTemplate.module.scss";
import NewsLetter from "@/components /Common/NewsLetter/NewsLetter";

const ConfidentialityTemplate = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.legalWrap}>
        <h1 className={styles.title}>DÉCLARATION DE CONFIDENTIALITÉ</h1>

        <div className={styles.content}>
          <p className={styles.note}>
            Cette déclaration de confidentialité a été mise à jour pour la
            dernière fois le <strong>22/02/2025</strong> et s’applique aux citoyens
            et résidents permanents légaux de l’Espace économique européen et de la
            Suisse.
          </p>

          <p>
            Dans cette déclaration de confidentialité, nous expliquons ce que nous
            faisons avec les données que nous obtenons à votre sujet via{" "}
            <span className={styles.mono}>maanaka.com</span>. Nous vous recommandons
            de lire attentivement cette déclaration.
          </p>

          <p>
            Lors du traitement de vos données, nous respectons les exigences légales
            en matière de confidentialité. Cela signifie notamment que :
          </p>

          <ul>
            <li>
              Nous indiquons clairement les finalités pour lesquelles nous traitons
              les données personnelles via cette déclaration de confidentialité.
            </li>
            <li>
              Nous limitons notre collecte de données personnelles aux seules
              informations nécessaires à des fins légitimes.
            </li>
            <li>
              Nous demandons votre consentement explicite avant de traiter vos
              données personnelles dans les cas où cela est requis.
            </li>
            <li>
              Nous prenons des mesures de sécurité appropriées pour protéger vos
              données personnelles et exigeons la même rigueur des parties qui
              traitent ces données en notre nom.
            </li>
            <li>
              Nous respectons votre droit d’accéder à vos données personnelles, de
              les modifier ou de les supprimer à votre demande.
            </li>
          </ul>

          <p>
            Si vous avez des questions ou souhaitez savoir précisément quelles
            données nous conservons à votre sujet, veuillez nous contacter.
          </p>

          <h2>1. Objectifs, données collectées et durée de conservation</h2>
          <p>
            Nous pouvons collecter ou recevoir des informations personnelles pour
            plusieurs raisons liées à nos activités commerciales, notamment :
          </p>

          <h3>1.1 Livraisons</h3>
          <p>Nous utilisons les données suivantes :</p>
          <ul>
            <li>Un prénom et un nom</li>
            <li>
              Une adresse personnelle ou autre adresse physique, y compris le nom de
              la rue et de la ville
            </li>
            <li>Une adresse e-mail</li>
            <li>Un numéro de téléphone</li>
          </ul>

          <p>
            <strong>Base légale du traitement :</strong> nous traitons ces données
            sur la base du consentement.
          </p>
          <p>
            <strong>Durée de conservation :</strong> nous conservons ces données
            pendant <strong>1 mois</strong> après la fin du service.
          </p>

          <h2>2. Partage des données avec des tiers</h2>
          <p>
            Nous partageons ou divulguons ces données uniquement avec des
            sous-traitants pour les finalités suivantes :
          </p>

          <div className={styles.tableLike}>
            <div className={styles.row}>
              <div className={styles.label}>Nom</div>
              <div className={styles.value}>La Poste</div>
            </div>
            <div className={styles.row}>
              <div className={styles.label}>Pays</div>
              <div className={styles.value}>France</div>
            </div>
            <div className={styles.row}>
              <div className={styles.label}>Finalité</div>
              <div className={styles.value}>Livraison</div>
            </div>
          </div>

          <h2>3. Cookies</h2>
          <p>
            Notre site utilise des cookies. Pour en savoir plus sur leur
            utilisation, veuillez consulter notre Politique en matière de cookies.
          </p>

          <h2>4. Pratiques de divulgation</h2>
          <p>
            Nous divulguons des informations personnelles si la loi ou une décision
            de justice nous y oblige, en réponse à une demande des autorités
            compétentes, ou dans la mesure permise par la loi pour des enquêtes
            liées à la sécurité publique.
          </p>
          <p>
            En cas de rachat, de vente, de fusion ou d’acquisition de notre
            entreprise ou de notre site web, vos données peuvent être transmises à
            nos conseillers ainsi qu’aux nouveaux propriétaires.
          </p>
          <p>
            Nous avons conclu un accord de traitement des données avec Google, qui
            ne peut pas utiliser ces données à d’autres fins que celles spécifiées
            dans cet accord. L’enregistrement des adresses IP complètes est bloqué
            par nos soins.
          </p>

          <h2>5. Sécurité</h2>
          <p>
            Nous accordons une grande importance à la sécurité des données
            personnelles. Nous prenons des mesures appropriées pour éviter les abus
            et les accès non autorisés à vos données. Seules les personnes
            habilitées y ont accès, et nos mesures de sécurité sont régulièrement
            révisées.
          </p>

          <h2>6. Sites web tiers</h2>
          <p>
            Cette déclaration de confidentialité ne s’applique pas aux sites web de
            tiers accessibles via des liens sur notre site. Nous ne pouvons
            garantir que ces sites traitent vos données de manière fiable et
            sécurisée. Nous vous recommandons de lire leurs politiques de
            confidentialité avant de les utiliser.
          </p>

          <h2>7. Modifications de cette déclaration de confidentialité</h2>
          <p>
            Nous nous réservons le droit de modifier cette déclaration de
            confidentialité à tout moment. Nous vous conseillons de la consulter
            régulièrement pour rester informé des éventuelles mises à jour. Nous
            vous informerons activement de toute modification significative.
          </p>

          <h2>8. Accès et modification de vos données</h2>
          <p>
            Si vous souhaitez savoir quelles données personnelles nous détenons sur
            vous, veuillez nous contacter. Vous disposez des droits suivants :
          </p>

          <ul>
            <li>
              <strong>Droit d’information :</strong> connaître les raisons de la
              collecte de vos données, leur utilisation et leur durée de
              conservation.
            </li>
            <li>
              <strong>Droit d’accès :</strong> obtenir une copie des données
              personnelles que nous détenons.
            </li>
            <li>
              <strong>Droit de rectification :</strong> compléter, corriger ou
              supprimer vos données personnelles.
            </li>
            <li>
              <strong>Droit de retrait du consentement :</strong> retirer votre
              consentement et demander la suppression de vos données.
            </li>
            <li>
              <strong>Droit à la portabilité :</strong> récupérer l’ensemble de vos
              données pour les transférer à un autre responsable de traitement.
            </li>
            <li>
              <strong>Droit d’opposition :</strong> vous opposer au traitement de
              vos données, sauf motifs légitimes impérieux.
            </li>
          </ul>

          <p>
            Merci de toujours préciser clairement votre identité pour que nous
            puissions traiter votre demande correctement.
          </p>

          <h2>9. Réclamations</h2>
          <p>
            Si vous estimez que nous ne traitons pas correctement vos données
            personnelles, vous avez le droit de déposer une plainte auprès de
            l’Autorité de protection des données.
          </p>

          <h2>10. Coordonnées</h2>
          <p>
            <strong>Djeliya</strong>
            <br />
            7 Grand rue 30210 Collias
            <br />
            France
            <br />
            Site web : <span className={styles.mono}>https://djeliya.com</span>
            <br />
            Email : <span className={styles.mono}>contact@Djeliya.com</span>
            <br />
            Téléphone : <span className={styles.mono}>0759562618</span>
          </p>
        </div>
      </section>

      <section className={styles.footerSection}>
        <NewsLetter />
      </section>
    </main>
  );
};

export default ConfidentialityTemplate;