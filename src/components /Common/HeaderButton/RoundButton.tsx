"use client"

import { Link } from 'next-view-transitions';
import styles from './RoundButton.module.scss';

const RoundButton = ({
  text,
  onClick,
  variant = 'primary',
  href
}: {
  text: string;
  onClick: (e: any) => void;
  variant?: 'primary' | 'secondary';
  href?: string;
}) => {
  return (
    <Link
      scroll={false}
      href={href || '#'}
      onClick={onClick}
      className={` ${styles.Button} ${variant === 'primary' ? styles.primaryButton : styles.secondaryButton}`}
    >
      <p> {text} </p>
    </Link>
  );
};
export default RoundButton;