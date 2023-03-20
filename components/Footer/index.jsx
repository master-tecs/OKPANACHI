import { motion } from "framer-motion";
import { LocationOn } from "@mui/icons-material";
import styles from "../../styles/Footer.module.css";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <motion.h2
            className={styles.logo}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, y: 100 }}
          >
            OKPANACHI & CO
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            We are a dynamic indigenous firm of Chartered Accountants, which
            seeks to provide professional services to clients on a personal
            basis and to calve an enviable reputation in our wide range of
            services.
          </motion.p>
        </div>

        <div className={styles.browse}>
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, y: 100 }}
          >
            Browse
          </motion.h3>
          <ul className={styles.menu}>
            <motion.li
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, scale: 0.3 }}
              onClick={handleScrollToTop}
            >
              <a> Home</a>
            </motion.li>
            <motion.li
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, scale: 0.3 }}
            >
              <a href="#services"> Services</a>
            </motion.li>
            <motion.li
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, scale: 0.3 }}
            >
              <a href="#about"> About</a>
            </motion.li>
            <motion.li
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, scale: 0.3 }}
            >
              <a href="#staff"> Staff</a>
            </motion.li>
            <motion.li
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, scale: 0.3 }}
            >
              <a href="#contact"> Contact</a>
            </motion.li>
          </ul>
        </div>

        <div className={styles.servises}>
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, y: 100 }}
          >
            Services
          </motion.h3>
          <motion.p
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            Audit and Accounting
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            Accounting
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            Taxation
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            Management consultancy
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            Insolvency
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            Secretarial
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            Information communication technology (ICT) Services
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            Staff Training. And Development
          </motion.p>
        </div>

        <div className={styles.locations}>
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, y: 100 }}
          >
            Office Locations
          </motion.h3>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            <LocationOn /> <p>1A Junction Road Kaduna.</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            <LocationOn />
            <p>
              LSDPC Estate Ojokoro Block 148 Flat 4(1st floor) Ota Express Road
              Lagos.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            <LocationOn /> <p>No 29 Okene – Kabba Road Lokoja.</p>
          </motion.div>
        </div>
      </div>
      <div className={styles.contact}>
        <motion.p
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
          initial={{ opacity: 0, scale: 0.3 }}
        >
          <b>Contact: </b> Director@okpanachi.com
        </motion.p>
      </div>
      <div className={styles.copy}>
        Copyright &#169;
        <a href="http://www.okpanachi.com/">
          <span>OKPANACHI & CO</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
