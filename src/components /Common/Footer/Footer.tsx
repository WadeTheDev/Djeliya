"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";
import { slideInOut } from "@/animations";
import { useTransitionRouter } from "next-view-transitions";

type FooterLink = { label: string; href: string };

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type Props = {
  columns?: FooterColumn[];
};

const defaultColumns: FooterColumn[] = [
  {
    title: "Découvrir Djeliya",
    links: [
      { label: "Les coulisses", href: "" },
      { label: "Blog", href: "" },
    ],
  },
  {
    title: "Choisir Djeliya",
    links: [{ label: "Avis Clients", href: "" }],
  },
  {
    title: "Aide",
    links: [
      { label: "FAQ", href: "" },
      { label: "Nous Contacter", href: "" },
    ],
  },
];

const legalLinks: FooterLink[] = [
  { label: "Mentions légales", href: "" },
  { label: "Conditions générales de ventes", href: "" },
  { label: "Politique des Cookies", href: "" },
  { label: "Livraison internationale", href: "" },
];

export default function Footer({ columns = defaultColumns }: Props) {

  const router = useTransitionRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Col gauche */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brand} onClick={(e) => {
            e.preventDefault();
            router.push(`/`, { onTransitionReady: slideInOut });
          }}>
            Djeliya
          </Link>

          <nav className={styles.legal} aria-label="Liens légaux">
            {legalLinks.map((l) => (
              <Link key={l.label} href={l.href} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Colonnes center */}
        <div className={styles.cols} aria-label="Navigation footer">
          {columns.map((col) => (
            <div key={col.title} className={styles.col}>
              <p className={styles.colTitle}>{col.title}</p>
              <div className={styles.colLinks}>
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} className={styles.link}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Réseaux droite */}
        <div className={styles.socialCol}>
          <div className={styles.social}>
            <Link href="" aria-label="WhatsApp" className={styles.iconBtn}>
              <img src="/img/whatsapp.png" alt="" />
            </Link>
            <Link href="" aria-label="Instagram" className={styles.iconBtn}>
              <img src="/img/instagram.png" alt="" />
            </Link>
            <Link href="" aria-label="Email" className={styles.iconBtn}>
              <img src="/img/mail.png" alt="" />
            </Link>
            <Link href="" aria-label="TikTok" className={styles.iconBtn}>
              <img src="/img/tiktok.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
