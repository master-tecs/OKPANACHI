import styles from "../../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.logo}>OKPANACHI</h2>
          <p>
            We are a dynamic indigenous firm of Chartered Accountants, which
            seeks to provide professional services to clients on a personal
            basis and to calve an enviable reputation in our wide range of
            services.
          </p>
        </div>
        <div className={styles.contact}>
          <p>
            <b>Contact: </b> Director@okpanachi.com
          </p>
        </div>
      </div>
      <div className={styles.copy}>
        Copyright &#169;
        <a href="http://www.okpanachi.com/">
          <span>OKPANACHI</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
