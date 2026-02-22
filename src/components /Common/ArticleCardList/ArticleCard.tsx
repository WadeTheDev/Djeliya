"use client";

import styles from "./ArticleCard.module.scss";

export type ArticleCardItem = {
  id: string;
  title: string;
  price: string;
  imageUrl?: string;
  isNew?: boolean;
};

type Props = ArticleCardItem & {
  onClick?: (item: ArticleCardItem, e?: any) => void;
};

const ArticleCard = ({ id, title, price, imageUrl, isNew, onClick }: Props) => {
  return (
    <article
      className={styles.mainContainer}
      onClick={() => onClick?.({ id, title, price, imageUrl, isNew })}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") onClick({ id, title, price, imageUrl, isNew });
      }}
    >
      {isNew && <div className={styles.isNew}>New</div>}

      <div className={styles.image}>
        <img src={imageUrl || "/img/ProductImage.png"} alt={title} />
      </div>

      <div className={styles.infos}>
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    </article>
  );
};

export default ArticleCard;