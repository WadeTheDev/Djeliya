"use client";

import { useId, useState } from "react";
import styles from "./FAQAccordion.module.scss";

export type FAQItem = {
  question: string;
  answer: React.ReactNode; // string ou JSX
};

type Props = {
  items: FAQItem[];
  defaultOpenIndex?: number | null;
  allowMultiple?: boolean;
};

export default function FAQAccordion({
  items,
  defaultOpenIndex = null,
  allowMultiple = false,
}: Props) {
  const baseId = useId();
  const [open, setOpen] = useState<number[]>(
    defaultOpenIndex === null ? [] : [defaultOpenIndex]
  );

  const isOpen = (i: number) => open.includes(i);

  const toggle = (i: number) => {
    setOpen((prev) => {
      const opened = prev.includes(i);

      if (allowMultiple) {
        return opened ? prev.filter((x) => x !== i) : [...prev, i];
      }

      return opened ? [] : [i];
    });
  };

  return (
    <section className={styles.faq} aria-label="FAQ">
      <ul className={styles.list}>
        {items.map((item, i) => {
          const opened = isOpen(i);
          const triggerId = `${baseId}-trigger-${i}`;
          const panelId = `${baseId}-panel-${i}`;

          return (
            <li key={`${i}-${String(item.question)}`} className={styles.item}>
              <button
                type="button"
                id={triggerId}
                className={styles.trigger}
                aria-expanded={opened}
                aria-controls={panelId}
                onClick={() => toggle(i)}
              >
                <span className={styles.left}>
                  <span className={styles.index}>{i + 1}.</span>
                  <span className={styles.question}>{item.question}</span>
                </span>

                <span
                  className={`${styles.icon} ${opened ? styles.iconOpen : ""}`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className={`${styles.panel} ${opened ? styles.panelOpen : ""}`}
              >
                <div className={styles.answer}>{item.answer}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
