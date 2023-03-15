import styles from "../../styles/About.module.css";

function About({ subTitle, title, detail }) {
  console.log("====================================");
  console.log(typeof detail);
  if (typeof detail !== "string") {
    console.log(detail?.map((d) => d));
  }
  console.log("====================================");
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h4 className={styles.subtitle}>{subTitle}</h4>
        <h1 className={styles.title}>{title}</h1>
        {typeof detail !== "string" && detail?.map((d) => <p>{d}</p>)}
        {/* <p className={styles.about}>{detail}</p> */}
      </div>
    </div>
  );
}

export default About;
