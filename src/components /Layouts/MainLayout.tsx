import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import styles from './MainLayout.module.scss';


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
};
export default MainLayout;
