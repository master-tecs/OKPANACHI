import styles from "../../styles/Nav.module.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h3 className={styles.logo}>OKPANACHI</h3>
        <ul className={styles.menu}>
          <li>About</li>
          <li>Services</li>
          <li>Testimonial</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <button className={styles.cta}>Get A Col</button>

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

        <ul className={open ? styles.menuSm : styles.menuSmClose}>
          <li>About</li>
          <li>Services</li>
          <li>Testimonial</li>
          <li>Blog</li>
          <li>Contact</li>
          <button className={styles.cta}>Get A Col</button>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
