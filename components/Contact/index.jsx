import { motion } from "framer-motion";
import { LocationOn, Phone } from "@mui/icons-material";
import styles from "../../styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.container}>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, type: "tween", duration: 0.15 }}
          initial={{ opacity: 0, y: 100 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
          initial={{ opacity: 0, scale: 0.3 }}
        >
          The firms’ offices are located in Kaduna, Lokoja and Lagos, from where
          our various assignments are carried out.
        </motion.p>
        <div className={styles.locations}>
          <div className={styles.location}>
            <motion.h4
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, y: 100 }}
            >
              Kaduna Office
            </motion.h4>
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, scale: 0.3 }}
            >
              <LocationOn /> <p>1A Junction Road Kaduna.</p>
            </motion.div>
          </div>

          <div className={styles.location}>
            <motion.h4
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, y: 100 }}
            >
              Lagos Office
            </motion.h4>
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, scale: 0.3 }}
            >
              <LocationOn />
              <p>
                LSDPC Estate Ojokoro Block 148 Flat 4(1st floor) Ota Express
                Road Lagos.
              </p>
            </motion.div>
          </div>

          <div className={styles.location}>
            <motion.h4
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, y: 100 }}
            >
              Lokoja Office
            </motion.h4>
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, scale: 0.3 }}
            >
              <LocationOn /> <p>No 29 Okene – Kabba Road Lokoja.</p>
            </motion.div>
          </div>
        </div>
        <div className={styles.numbers}>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
            className={styles.number}
          >
            <Phone />
            <p>+234 802 309 9191</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
            className={styles.number}
          >
            <Phone />
            <p>+234 803 644 5182</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
            className={styles.number}
          >
            <p>
              <b>Contact: </b> Director@okpanachi.com
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
