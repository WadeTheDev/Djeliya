import { Link } from 'next-view-transitions';
import styles from './SquareButton.module.scss';

const SquareButton = ({
  text,
  onClick,
  href
}: {
  text: string;
  onClick: (e: any) => void;
  href?: string;
}) => {
  return (
    <Link scroll={false} href={href || "#"} className={styles.squareButton} onClick={onClick}>{text}</Link>
  );
};
export default SquareButton;