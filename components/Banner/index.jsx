import { motion } from "framer-motion";
import styles from "../../styles/Banner.module.css";

function Banner({ title, detail, btn, img, noMarging }) {
  return (
    <section
      className={`${styles.banner} ${noMarging && styles.noMarging}`}
      id="home"
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <motion.h1
            className={styles.title}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: "tween", duration: 0.5 }}
            initial={{ opacity: 0, y: 100 }}
          >
            {title}
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, type: "tween", duration: 0.5 }}
            initial={{ opacity: 0, y: 100 }}
          >
            {detail}
          </motion.p>

          {btn && (
            <a href="#contact">
              <motion.button
                className={styles.cta}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, type: "tween", duration: 0.3 }}
                initial={{ opacity: 0, y: 100 }}
              >
                {btn}
              </motion.button>
            </a>
          )}
        </div>
        <div className={styles.right}>
          <motion.img
            className={styles.img}
            src={img}
            alt="Accouning"
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, type: "tween", duration: 0.3 }}
            initial={{ opacity: 0, y: 100 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
