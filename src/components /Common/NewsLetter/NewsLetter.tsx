import styles from './NewsLetter.module.scss';

const NewsLetter = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.texts}>
        <h4>Je veux être tenu au courant de vos nouveautés et promotions !</h4>
        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.“</p>
      </div>
      <form action="" className={styles.newsletterForm}>
        <input
          type="email"
          placeholder="Votre adresse e-mail"
        />
        <button type="submit">S'inscrire</button>
      </form>
    </main>
  );
};
export default NewsLetter;