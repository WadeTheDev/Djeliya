import styles from "./CookiesTemplate.module.scss";
import NewsLetter from "@/components /Common/NewsLetter/NewsLetter";

const CookiesTemplate = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.legalWrap}>
        <h1 className={styles.title}>POLITIQUE DE COOKIES (UE)</h1>

        <div className={styles.content}>
          <p className={styles.note}>
            Cette politique de cookies a été mise à jour pour la dernière fois le{" "}
            <strong>30 juillet 2025</strong> et s’applique aux citoyens et aux résidents
            permanents légaux de l’Espace Économique Européen et de la Suisse.
          </p>

          <h2>1. Introduction</h2>
          <p>
            Notre site web, <a href="https://djeliya.com" target="_blank" rel="noreferrer">https://djeliya.com</a>{" "}
            (ci-après : « le site web ») utilise des cookies et autres technologies liées
            (par simplification, toutes ces technologies sont désignées par le terme « cookies »).
            Des cookies sont également placés par des tierces parties que nous avons engagées.
            Dans le document ci-dessous, nous vous informons de l’utilisation des cookies sur notre site web.
          </p>

          <h2>2. Que sont les cookies ?</h2>
          <p>
            Un cookie est un petit fichier simple envoyé avec les pages de ce site web et stocké
            par votre navigateur sur le disque dur de votre ordinateur ou d’un autre appareil.
            Les informations qui y sont stockées peuvent être renvoyées à nos serveurs ou aux serveurs
            des tierces parties concernées lors d’une visite ultérieure.
          </p>

          <h2>3. Que sont les scripts ?</h2>
          <p>
            Un script est un élément de code utilisé pour que notre site web fonctionne correctement
            et de manière interactive. Ce code est exécuté sur notre serveur ou sur votre appareil.
          </p>

          <h2>4. Qu’est-ce qu’une balise invisible ?</h2>
          <p>
            Une balise invisible (ou balise web) est un petit morceau de texte ou d’image invisible sur un site web,
            utilisé pour suivre le trafic sur un site web. Pour ce faire, diverses données vous concernant sont stockées
            à l’aide de balises invisibles.
          </p>

          <h2>5. Cookies</h2>

          <h3>5.1 Cookies techniques ou fonctionnels</h3>
          <p>
            Certains cookies assurent le fonctionnement correct de certaines parties du site web et la prise en compte
            de vos préférences en tant qu’internaute. En plaçant des cookies fonctionnels, nous vous facilitons la visite
            de notre site web. Ainsi, vous n’avez pas besoin de saisir à plusieurs reprises les mêmes informations lors
            de la visite de notre site web et, par exemple, les éléments restent dans votre panier jusqu’à votre paiement.
            Nous pouvons déposer ces cookies sans votre consentement.
          </p>

          <h3>5.2 Cookies statistiques</h3>
          <p>
            Nous utilisons des cookies statistiques afin d’optimiser l’expérience des internautes sur notre site web.
            Avec ces cookies statistiques, nous obtenons des informations sur l’utilisation de notre site web.
            Nous demandons votre permission pour placer des cookies statistiques.
          </p>

          <h3>5.3 Cookies de marketing/suivi</h3>
          <p>
            Les cookies de marketing/suivi sont des cookies ou toute autre forme de stockage local, utilisés pour créer
            des profils d’utilisateurs afin d’afficher de la publicité ou de suivre l’utilisateur sur ce site web ou sur
            plusieurs sites web dans des finalités marketing similaires.
          </p>

          <h3>5.4 Réseaux sociaux</h3>
          <p>
            Sur notre site web, nous avons inclus du contenu provenant de TikTok, Facebook, Instagram et WhatsApp pour
            promouvoir des pages web (par exemple, « like », « pin ») ou les partager sur des réseaux sociaux comme
            TikTok, Facebook, Instagram et WhatsApp. Ce contenu est intégré grâce un code obtenu de ces plateformes et
            place des cookies. Ce contenu peut stocker et traiter certaines informations à des fins de publicité personnalisée.
          </p>
          <p>
            Veuillez lire la déclaration de confidentialité de ces réseaux sociaux (qui peut être modifiée régulièrement)
            afin de savoir ce qu’ils font de vos données (personnelles) traitées en utilisant ces cookies. Les données
            récupérées sont anonymisées autant que possible. TikTok, Facebook, Instagram et WhatsApp se trouvent aux États-Unis.
          </p>

          <h2>6. Cookies placés</h2>
          <p>
            Ci-dessous, une liste des principaux services et cookies mentionnés sur la page, avec leurs finalités.
            (Le détail exhaustif peut évoluer selon la configuration du site.)
          </p>

          <div className={styles.cookieGrid}>
            <div className={styles.cookieCard}>
              <h4>WordPress (fonctionnel)</h4>
              <ul>
                <li><strong>WP_PREFERENCES_USER_*</strong> — stocker les préférences utilisateur</li>
                <li><strong>wpEmojiSettingsSupports</strong> — infos navigateur (session)</li>
                <li><strong>wordpress_test_cookie</strong> — vérifier si des cookies peuvent être déposés</li>
                <li><strong>wp-settings-*</strong> / <strong>wp-settings-time-*</strong> — préférences</li>
                <li><strong>wordpress_logged_in_*</strong> — garder les utilisateurs connectés</li>
              </ul>
            </div>

            <div className={styles.cookieCard}>
              <h4>Kadence Blocks (fonctionnel)</h4>
              <ul>
                <li><strong>kadenceBlocksPrebuilt</strong> — fournir un site web responsive</li>
              </ul>
            </div>

            <div className={styles.cookieCard}>
              <h4>WooCommerce (fonctionnel)</h4>
              <ul>
                <li><strong>wc_cart_hash_*</strong> — stocker les éléments dans le panier</li>
                <li><strong>wc_cart_created</strong> — actions utilisateur (session)</li>
                <li><strong>wc_fragments_*</strong> — fragments/panier</li>
                <li><strong>wp_woocommerce_session_*</strong> — session boutique</li>
              </ul>
            </div>

            <div className={styles.cookieCard}>
              <h4>MailPoet (marketing)</h4>
              <ul>
                <li><strong>mailpoet_subscriber</strong> — gérer l’abonnement</li>
                <li><strong>mailpoet_page_view</strong> — gérer l’abonnement</li>
              </ul>
            </div>

            <div className={styles.cookieCard}>
              <h4>Sourcebuster JS (statistiques)</h4>
              <ul>
                <li><strong>sbjs_migrations</strong>, <strong>sbjs_first_add</strong>, <strong>sbjs_current</strong>, <strong>sbjs_first</strong></li>
                <li><strong>sbjs_session</strong> — session (tracking)</li>
              </ul>
            </div>

            <div className={styles.cookieCard}>
              <h4>Jetpack / Automattic (statistiques)</h4>
              <ul>
                <li><strong>tk_*r</strong> — stocker les ID des référents</li>
                <li><strong>tk_tc</strong> — historique d’utilisation (session)</li>
                <li><strong>tk_qs</strong> — fonctions sur toutes les pages</li>
              </ul>
            </div>

            <div className={styles.cookieCard}>
              <h4>Stripe (fonctionnel)</h4>
              <ul>
                <li><strong>__stripe_mid</strong> — prévention fraude</li>
                <li><strong>__stripe_sid</strong> — prévention fraude</li>
              </ul>
            </div>

            <div className={styles.cookieCard}>
              <h4>Google Fonts (marketing)</h4>
              <p>
                Utilisé pour l’affichage des polices web (peut impliquer un traitement côté Google).
              </p>
            </div>

            <div className={styles.cookieCard}>
              <h4>WhatsApp / TikTok / Instagram / Facebook</h4>
              <p>
                Contenus intégrés et/ou boutons de partage : peuvent déposer des cookies à des fins
                fonctionnelles et/ou marketing selon la plateforme.
              </p>
            </div>
          </div>

          <h2>7. Consentement</h2>
          <p>
            Lorsque vous visitez notre site web pour la première fois, nous vous montrerons une fenêtre contextuelle
            avec une explication sur les cookies. Dès que vous cliquez sur « Enregistrer les préférences » vous nous
            autorisez à utiliser les catégories de cookies et d’extensions que vous avez sélectionnés dans la fenêtre
            contextuelle, comme décrit dans la présente politique de cookies.
          </p>
          <p>
            Vous pouvez désactiver l’utilisation des cookies via votre navigateur, mais veuillez noter que notre site web
            pourrait ne plus fonctionner correctement.
          </p>
          <p>
            <strong>7.1 Gérez vos réglages de consentement</strong> : vous avez chargé la politique de cookies sans le support
            de javascript. Sur AMP, vous pouvez utiliser l’onglet de gestion du consentement en bas de la page.
          </p>

          <h2>8. Activer/désactiver et supprimer les cookies</h2>
          <p>
            Vous pouvez utiliser votre navigateur internet pour supprimer automatiquement ou manuellement les cookies.
            Vous pouvez également spécifier que certains cookies ne peuvent pas être placés. Une autre option consiste à
            modifier les réglages de votre navigateur Internet afin que vous receviez un message à chaque fois qu’un cookie
            est placé. Pour plus d’informations, reportez-vous aux instructions de la section Aide de votre navigateur.
          </p>
          <p>
            Veuillez noter que notre site web peut ne pas marcher correctement si tous les cookies sont désactivés.
            Si vous supprimez les cookies dans votre navigateur, ils seront de nouveau placés après votre consentement
            lorsque vous revisiterez notre site web.
          </p>

          <h2>9. Vos droits concernant les données personnelles</h2>
          <ul>
            <li>
              Droit de savoir pourquoi vos données personnelles sont nécessaires, ce qui leur arrivera et combien de temps
              elles seront conservées.
            </li>
            <li>Droit d’accès : accéder à vos données personnelles que nous connaissons.</li>
            <li>Droit de rectification : compléter, corriger, supprimer ou bloquer vos données.</li>
            <li>Droit de révocation du consentement et suppression des données.</li>
            <li>Droit de transférer vos données à un autre responsable du traitement.</li>
            <li>Droit d’opposition au traitement (sauf raisons légitimes).</li>
          </ul>
          <p>
            Pour exercer ces droits, veuillez nous contacter. Si vous avez une plainte concernant la façon dont nous traitons
            vos données, nous aimerions en être informés, mais vous avez également le droit de déposer une plainte auprès de
            l’autorité de contrôle (l’autorité chargée de la protection des données).
          </p>

          <h2>10. Coordonnées</h2>
          <p>
            Pour des questions et/ou des commentaires sur notre politique de cookies et cette déclaration, veuillez nous contacter :
          </p>
          <p>
            Djeliya
            <br />
            7 GRAND RUE 30210 COLLIAS
            <br />
            France
            <br />
            Site web : <a href="https://djeliya.com" target="_blank" rel="noreferrer">https://djeliya.com</a>
            <br />
            E-mail : contact@ex.com Djeliya.com
            <br />
            Numéro de téléphone : 0759562618
          </p>

          <p className={styles.note}>
            Cette politique de cookies a été synchronisée avec cookiedatabase.org le 22 février 2025.
          </p>
        </div>
      </section>

      <section className={styles.footerSection}>
        <NewsLetter />
      </section>
    </main>
  );
};

export default CookiesTemplate;