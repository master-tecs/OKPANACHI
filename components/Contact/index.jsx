import { LocationOn, Phone } from "@mui/icons-material";
import styles from "../../styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <p>
          The firms’ offices are located in Kaduna, Lokoja and Lagos, from where
          our various assignments are carried out.
        </p>
        <div className={styles.locations}>
          <div className={styles.location}>
            <h4>Kaduna Office</h4>
            <div>
              <LocationOn /> <p>1A Junction Road Kaduna.</p>
            </div>
          </div>

          <div className={styles.location}>
            <h4>Lagos Office</h4>
            <div>
              <LocationOn />
              <p>
                LSDPC Estate Ojokoro Block 148 Flat 4(1st floor) Ota Express
                Road Lagos.
              </p>
            </div>
          </div>

          <div className={styles.location}>
            <h4>Lokoja Office</h4>
            <div>
              <LocationOn /> <p>No 29 Okene – Kabba Road Lokoja.</p>
            </div>
          </div>
        </div>
        <div className={styles.numbers}>
          <div className={styles.number}>
            <Phone />
            <p>+234 802 309 9191</p>
          </div>
          <div className={styles.number}>
            <Phone />
            <p>+234 803 644 5182</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
