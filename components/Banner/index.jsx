import styles from "../../styles/Banner.module.css";

function Banner({ title, detail, btn, img, noMarging }) {
  return (
    <section
      className={`${styles.banner} ${noMarging && styles.noMarging}`}
      id="home"
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>{title}</h1>
          <p>{detail}</p>

          {btn && (
            <a href="#contact">
              <button className={styles.cta}>{btn}</button>
            </a>
          )}
        </div>
        <div className={styles.right}>
          <img className={styles.img} src={img} alt="Accouning" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
