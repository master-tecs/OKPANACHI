import { ArrowForwardRounded, Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../../styles/Service.module.css";

function Service({ Icon, title, details }) {
  const [view, setView] = useState(false);
  const maxLength = 210;

  const handleView = () => {
    setView(!view);
  };

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
            {details.substring(0, maxLength) + "..."}
          </motion.p>
        </div>
        <motion.span
          className={styles.cta}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
          initial={{ opacity: 0 }}
          onClick={() => handleView()}
        >
          <p>Tap for more</p>
          <ArrowForwardRounded />
        </motion.span>
      </div>
      {view && (
        <ViewService
          Icon={Icon}
          title={title}
          details={details}
          handleView={handleView}
        />
      )}
    </motion.div>
  );
}

export default Service;

//
// ------------------------
// VIEW SERVICE  COMPONENT
// ------------------------
//

function ViewService({ Icon, title, details, handleView }) {
  return (
    <div className={styles.viewService}>
      <div className={styles.modalOverlay} onClick={() => handleView()}></div>

      <div className={styles.container}>
        <div className={styles.info}>
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

        <div className={styles.control}>
          <motion.span
            className={styles.cta}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0 }}
            onClick={() => handleView()}
          >
            <p>Tap to close</p>
            <Close />
          </motion.span>
          {/* <span onClick={() => handleView()}>
            <Close className="modalCloseIcon" />
          </span> */}
        </div>
      </div>
    </div>
  );
}
