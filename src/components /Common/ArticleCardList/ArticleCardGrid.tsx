"use client";

import styles from "./ArticleCardGrid.module.scss";
import ArticleCard, { ArticleCardItem } from "./ArticleCard"

type Props = {
  title?: string;
  items: ArticleCardItem[];
  onItemClick?: (item: ArticleCardItem, e: any) => void;
};

const ArticleCardGrid = ({ title, items, onItemClick }: Props) => {
  return (
    <section className={styles.wrapper}>
      {title && <h3 className={styles.title}>{title}</h3>}

      <div className={styles.grid}>
        {items.map((item) => (
          <ArticleCard key={item.id} {...item} onClick={onItemClick} />
        ))}
      </div>
    </section>
  );
};

export default ArticleCardGrid;