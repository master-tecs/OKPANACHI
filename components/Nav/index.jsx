import styles from "../../styles/Nav.module.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h3 className={styles.logo}>
          <a href="http://www.okpanachi.com/"> OKPANACHI & CO</a>
        </h3>
        <ul className={styles.menu}>
          <li onClick={handleScrollToTop}>
            <a> Home</a>
          </li>
          <li>
            <a href="#services"> Services</a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#staff"> Staff</a>
          </li>
          <li>
            <a href="#contact"> Contact</a>
          </li>
        </ul>
        <a href="#contact">
          <button className={styles.cta}>Get A Quote</button>
        </a>

        {!open ? (
          <MenuRoundedIcon
            className={styles.icon}
            onClick={() => setOpen(!open)}
          />
        ) : (
          <CloseRoundedIcon
            className={styles.icon}
            onClick={() => setOpen(!open)}
          />
        )}

        <ul
          className={!open ? styles.menuSm : `${styles.menuSm} ${styles.open}`}
        >
          <li onClick={handleScrollToTop}>
            <a> Home</a>
          </li>
          <li>
            <a href="#services"> Services</a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#staff"> Staff</a>
          </li>
          <li>
            <a href="#contact"> Contact</a>
          </li>
          <a href="#contact">
            <button className={styles.cta}>Get A Quote</button>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
