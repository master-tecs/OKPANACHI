import styles from "../../styles/Banner.module.css";

function Banner({ title, detail, btn, img, noMarging }) {
  return (
    <section className={`${styles.banner} ${noMarging && styles.noMarging}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>{title}</h1>
          <p>{detail}</p>

          {btn && <button className={styles.cta}>{btn}</button>}
        </div>
        <div className={styles.right}>
          <img className={styles.img} src={img} alt="Accouning" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
