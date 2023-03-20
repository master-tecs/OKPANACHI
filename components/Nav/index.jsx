import styles from "../../styles/Nav.module.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <motion.h3
          className={styles.logo}
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.15 }}
          initial={{ opacity: 0 }}
        >
          <a href="http://www.okpanachi.com/"> OKPANACHI & CO</a>
        </motion.h3>
        <ul className={styles.menu}>
          <motion.li
            onClick={handleScrollToTop}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, type: "tween", duration: 0.1 }}
            initial={{ opacity: 0 }}
          >
            <a> Home</a>
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, type: "tween", duration: 0.1 }}
            initial={{ opacity: 0 }}
          >
            <a href="#services"> Services</a>
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, type: "tween", duration: 0.1 }}
            initial={{ opacity: 0 }}
          >
            <a href="#about"> About</a>
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, type: "tween", duration: 0.1 }}
            initial={{ opacity: 0 }}
          >
            <a href="#staff"> Staff</a>
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, type: "tween", duration: 0.1 }}
            initial={{ opacity: 0 }}
          >
            <a href="#contact"> Contact</a>
          </motion.li>
        </ul>
        <a href="#contact">
          <motion.button
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, type: "tween", duration: 0.1 }}
            initial={{ opacity: 0 }}
            className={styles.cta}
          >
            Get A Quote
          </motion.button>
        </a>

        {!open ? (
          <MenuRoundedIcon
            className={styles.icon}
            onClick={() => setOpen((open) => !open)}
          />
        ) : (
          <CloseRoundedIcon
            className={styles.icon}
            onClick={() => setOpen((open) => !open)}
          />
        )}

        {/* SMALLER DEVIES */}
        <AnimatePresence>
          <motion.ul
            className={`${styles.menuSm} ${styles.open}`}
            animate={open ? "open" : "closed"}
            variants={variants}
          >
            <motion.li onClick={handleScrollToTop}>
              <a> Home</a>
            </motion.li>
            <motion.li
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.55, type: "tween", duration: 0.1 }}
              initial={{ opacity: 0 }}
            >
              <a href="#services"> Services</a>
            </motion.li>
            <motion.li
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, type: "tween", duration: 0.1 }}
              initial={{ opacity: 0 }}
            >
              <a href="#about"> About</a>
            </motion.li>
            <motion.li
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.65, type: "tween", duration: 0.1 }}
              initial={{ opacity: 0 }}
            >
              <a href="#staff"> Staff</a>
            </motion.li>
            <motion.li
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, type: "tween", duration: 0.1 }}
              initial={{ opacity: 0 }}
            >
              <a href="#contact"> Contact</a>
            </motion.li>
            <a href="#contact">
              <motion.button
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, type: "tween", duration: 0.1 }}
                initial={{ opacity: 0 }}
                className={styles.cta}
              >
                Get A Quote
              </motion.button>
            </a>
          </motion.ul>
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Nav;
