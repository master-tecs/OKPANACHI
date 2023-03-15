import styles from "../../styles/Staff.module.css";
import { Carousel, ScrollingCarousel } from "@trendyol-js/react-carousel";

function Staff() {
  return (
    <div className={styles.staff}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2> PROFESSIONAL STAFF</h2>
          <h3>Assurance Associate and Information Technology Audit Staff</h3>

          <div>
            <p>Michael Okpanachi B.Sc. ACIT, FCA</p>
            <p> L.A Sipe B.Sc. FCA (as Review Partner) </p>
          </div>
        </div>

        <ScrollingCarousel
          show={3.5}
          swiping={true}
          className={styles.bottom}
          transition={0.5}
          rightArrow={true}
        >
          <Item
            name="Audu Fadipe"
            job="Consultant"
            img="./images/Consultant.jpeg"
          />
          <Item
            name="Dr Ifeoluwa Albert"
            job="Audit Supervisor"
            img="./images/Audit.jpeg"
          />
          <Item
            name="Franklin Chigbo"
            job="Tax Analyst"
            img="./images/Tax Analyst.jpeg"
          />
          <Item
            name="Clara Dogara"
            job="Finance Manager"
            img="./images/Finance.jpeg"
          />
          <Item
            name="Emily Onoja"
            job="Secretary"
            img="./images/Secretary.jpeg"
          />
        </ScrollingCarousel>
      </div>
    </div>
  );
}

export default Staff;

function Item({ img, name, job }) {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={img} alt={job} />
      </div>
      <h2>{name}</h2>
      <h3>{job}</h3>
    </div>
  );
}

export function Partners() {
  return (
    <div className={styles.partners}>
      <div className={styles.container}>
        <h2>PRINCIPAL PARTNERS</h2>
        <div>
          <p>Michael Okpanachi B.Sc. ACIT, FCA</p>
          <p> L.A Sipe B.Sc. FCA (as Review Partner) </p>
        </div>
      </div>
    </div>
  );
}
