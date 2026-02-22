"use client";

import { motion, Variants } from "framer-motion";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number; // 0..1 (portion visible)
  // NEW: si true, joue l'anim au mount uniquement quand on vient d'une autre page
  enterOnRoute?: boolean;
  // NEW: clé du flag (si tu veux le personnaliser par page)
  enterKey?: string;
}>;

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  once = true,
  amount = 0.25,
  enterOnRoute = false,
  enterKey = "vt:enter",
}: RevealProps) {
  const [playEnter, setPlayEnter] = useState(false);

  useEffect(() => {
    if (!enterOnRoute) return;
    const should = sessionStorage.getItem(enterKey) === "1";
    if (should) sessionStorage.removeItem(enterKey);
    setPlayEnter(should);
  }, [enterOnRoute, enterKey]);

  const variants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          // calé sur ta transition (même "feeling")
          duration: 0.7,
          ease: [0.87, 0, 0.13, 1],
          delay,
        },
      },
    }),
    [delay, y]
  );

  // Si on doit jouer l'entrée au mount: animate direct
  if (enterOnRoute && playEnter) {
    return (
      <motion.div
        className={className}
        variants={variants}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    );
  }

  // Sinon: comportement normal (reveal au scroll)
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}