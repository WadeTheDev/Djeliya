"use client"

import { Link } from 'next-view-transitions';
import styles from './ArticleCard.module.scss';

const ArticleCard = ({
  title,
  price,
  imageUrl,
  isNew,
  onClick,
  id,
  href
}: {
  title: string;
  price: string;
  isNew?: boolean;
  imageUrl?: string;
  id?: string;
  onClick?: (e: any) => void;
  href?: string;
}) => {
  return (
    <Link
      scroll={false}
      href={href || "#"} onClick={onClick} className={styles.mainContainer}>
      {isNew && <div className={styles.isNew}>New</div>}
      <div className={styles.image}>
        <img src={imageUrl || '/img/ProductImage.png'} alt={title} />
      </div>
      <div className={styles.infos}>
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    </Link>
  );
};
export default ArticleCard;