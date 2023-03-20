import styles from "../../styles/About.module.css";

function About({ subTitle, title, detail }) {
  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <h4 className={styles.subtitle}>{subTitle}</h4>
        <h1 className={styles.title}>{title}</h1>
        {typeof detail !== "string" &&
          detail?.map((d, i) => <p key={i}>{d}</p>)}
        {/* <p className={styles.about}>{detail}</p> */}
      </div>
    </div>
  );
}

export default About;
