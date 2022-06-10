import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <span>
      Made with ❤️ by{' '}
      <a href="linkedin.com/in/wahyu-fatur-rizky/" className={styles.link}>
        Wahyu Fatur Rizki
      </a>
    </span>
    <span>
      <a href="https://github.com/rbardini/pokedex" className={styles.link}>
        GitHub
      </a>
    </span>
  </footer>
)

export default Footer
