"use client";

import styles from "./CartPanel.module.scss";
import { useCartStore } from "@/store/cart.store";

const euro = (n: number) => n.toFixed(2).replace(".", ",") + "€";

export default function CartPanel() {
  const lines = useCartStore((s) => s.lines);
  const subtotal = useCartStore((s) => s.subtotal());
  const inc = useCartStore((s) => s.inc);
  const dec = useCartStore((s) => s.dec);
  const remove = useCartStore((s) => s.remove);

  return (
    <div className={styles.panel} role="dialog" aria-modal="true" aria-label="Panier">
      <div className={styles.top}>
        <h2 className={styles.title}>Panier</h2>
        <p className={styles.sub}>livraison gratuite à partir de 100€ (120€ en suisse)</p>

        <form className={styles.promo} onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Ajouter des codes promo" />
          <button type="submit">OK</button>
        </form>
      </div>

      <div className={styles.list} aria-label="Articles du panier">
        {lines.map((l) => (
          <div key={l.key} className={styles.row}>
            <img className={styles.thumb} src={l.image.src} alt={l.image.alt} />
            <div className={styles.meta}>
              <div className={styles.name}>{l.name}</div>
              <div className={styles.price}>{euro(l.price)}</div>
            </div>

            <div className={styles.stepper}>
              <button type="button" onClick={() => dec(l.key)} aria-label="Diminuer">
                −
              </button>
              <span>{l.qty}</span>
              <button type="button" onClick={() => inc(l.key)} aria-label="Augmenter">
                +
              </button>
            </div>

            <button type="button" className={styles.trash} onClick={() => remove(l.key)} aria-label="Supprimer">
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div className={styles.totalRow}>
          <span>Total estimé:</span>
          <strong>{euro(subtotal)}</strong>
        </div>
        <p className={styles.note}>Les frais d’expédition seront calculés lors de la validation de la commande</p>

        <button type="button" className={styles.checkout}>
          Valider la commande
        </button>
      </div>
    </div>
  );
}