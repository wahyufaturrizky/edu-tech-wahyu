import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <span>
      Made with ❤️ by{" "}
      <a
        href="https://www.linkedin.com/in/wahyu-fatur-rizky/"
        target={"_blank"}
        className={styles.link}
      >
        Wahyu Fatur Rizki
      </a>
    </span>
    <span>
      <a
        href="https://github.com/wahyufaturrizky"
        target={"_blank"}
        className={styles.link}
      >
        GitHub
      </a>
    </span>
  </footer>
);

export default Footer;
