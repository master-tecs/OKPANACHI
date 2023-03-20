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
          <h2 className={styles.logo}>OKPANACHI & CO</h2>
          <p>
            We are a dynamic indigenous firm of Chartered Accountants, which
            seeks to provide professional services to clients on a personal
            basis and to calve an enviable reputation in our wide range of
            services.
          </p>
        </div>

        <div className={styles.browse}>
          <h3>Browse</h3>
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
        </div>

        <div className={styles.servises}>
          <h3>Services</h3>
          <p>Audit and Accounting</p>
          <p>Accounting</p>
          <p>Taxation</p>
          <p>Management consultancy</p>
          <p>Insolvency</p>
          <p>Secretarial</p>
          <p>Information communication technology (ICT) Services</p>
          <p>Staff Training. And Development</p>
        </div>

        <div className={styles.locations}>
          <h3>Office Locations</h3>
          <div>
            <LocationOn /> <p>1A Junction Road Kaduna.</p>
          </div>
          <div>
            <LocationOn />
            <p>
              LSDPC Estate Ojokoro Block 148 Flat 4(1st floor) Ota Express Road
              Lagos.
            </p>
          </div>
          <div>
            <LocationOn /> <p>No 29 Okene – Kabba Road Lokoja.</p>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <p>
          <b>Contact: </b> Director@okpanachi.com
        </p>
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
