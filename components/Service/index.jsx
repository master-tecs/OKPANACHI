import { ArrowForwardRounded } from "@mui/icons-material";
import styles from "../../styles/Service.module.css";

function Service({ Icon, title, details }) {
  return (
    <div className={styles.service}>
      <div className={styles.container}>
        <div>
          <div className={styles.icon}>
            <Icon />
          </div>
          <h4>{title}</h4>
          <p>{details}</p>
        </div>
        <span className={styles.cta}>
          <p>Tap for more</p>
          <ArrowForwardRounded />
        </span>
      </div>
    </div>
  );
}

export default Service;
