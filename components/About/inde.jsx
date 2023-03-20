import { AnimatePresence, motion } from "framer-motion";
import styles from "../../styles/About.module.css";

function About({ subTitle, title, detail }) {
  return (
    <div className={styles.about} id="about">
      <AnimatePresence>
        <div className={styles.container}>
          <motion.h4
            className={styles.subtitle}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, y: 100 }}
          >
            {subTitle}
          </motion.h4>
          <motion.h1
            className={styles.title}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, y: 100 }}
          >
            {title}
          </motion.h1>
          {typeof detail !== "string" &&
            detail?.map((d, i) => (
              <motion.p
                key={i}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55, type: "tween", duration: 0.15 }}
                initial={{ opacity: 0, scale: 0.3 }}
              >
                {d}
              </motion.p>
            ))}
          {/* <p className={styles.about}>{detail}</p> */}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default About;
