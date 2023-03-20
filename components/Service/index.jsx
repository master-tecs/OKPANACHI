import { ArrowForwardRounded } from "@mui/icons-material";
import { motion } from "framer-motion";
import styles from "../../styles/Service.module.css";

function Service({ Icon, title, details }) {
  return (
    <motion.div
      className={styles.service}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 0.15 }}
      initial={{ opacity: 0, y: 100 }}
    >
      <div className={styles.container}>
        <div>
          <motion.div
            className={styles.icon}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, y: 100 }}
          >
            <Icon />
          </motion.div>
          <motion.h4
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, y: 100 }}
          >
            {title}
          </motion.h4>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, y: 100 }}
          >
            {details}
          </motion.p>
        </div>
        <motion.span
          className={styles.cta}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
          initial={{ opacity: 0 }}
        >
          <p>Tap for more</p>
          <ArrowForwardRounded />
        </motion.span>
      </div>
    </motion.div>
  );
}

export default Service;
