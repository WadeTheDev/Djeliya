"use client";

import { useMemo, useState } from "react";
import styles from "./AuthPage.module.scss";
import { Lenis } from 'lenis/react';
import Reveal from "@/components /Common/Reveal/Reveal";

type Mode = "login" | "register";

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("login");

  const copy = useMemo(() => {
    if (mode === "login") {
      return {
        title: "Connexion",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        cta: "Se connecter",
        switchLabel: "Je n’ai pas encore de compte",
        switchHint: "Créer un compte",
      };
    }
    return {
      title: "Créer un compte",
      text:
        "Rejoins-nous pour accéder à tes commandes, tes favoris et des offres exclusives.",
      cta: "Créer mon compte",
      switchLabel: "J’ai déjà un compte",
      switchHint: "Se connecter",
    };
  }, [mode]);

  const toggleMode = () => {
    setMode((m) => (m === "login" ? "register" : "login"));
  };

  return (
    <Lenis root>
      <main className={styles.page}>
        <Reveal delay={0.4} y={22} className={styles.card} aria-label={copy.title}>
          <h1 className={styles.title}>{copy.title}</h1>
          <p className={styles.subtitle}>{copy.text}</p>

          {/* Form animé */}
          <div className={styles.formArea}>
            <form
              className={`${styles.form} ${mode === "login" ? styles.enter : styles.exit}`}
              onSubmit={(e) => e.preventDefault()}
              aria-hidden={mode !== "login"}
            >
              <label className={styles.label}>
                Adresse mail
                <input className={styles.input} type="email" placeholder="" />
              </label>

              <label className={styles.label}>
                Mot de passe
                <input className={styles.input} type="password" placeholder="" />
              </label>
            </form>

            <form
              className={`${styles.form} ${mode === "register" ? styles.enter : styles.exit}`}
              onSubmit={(e) => e.preventDefault()}
              aria-hidden={mode !== "register"}
            >
              <label className={styles.label}>
                Adresse mail
                <input className={styles.input} type="email" placeholder="" />
              </label>

              <label className={styles.label}>
                Mot de passe
                <input className={styles.input} type="password" placeholder="" />
              </label>

              <label className={styles.label}>
                Confirmer le mot de passe
                <input className={styles.input} type="password" placeholder="" />
              </label>
            </form>
          </div>

          <button type="button" className={styles.switch} onClick={toggleMode}>
            {copy.switchLabel}
          </button>

          <button type="button" className={styles.button}>
            {copy.cta}
          </button>

        </Reveal>
      </main>
    </Lenis>
  );
}