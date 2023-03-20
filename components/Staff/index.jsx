import { motion } from "framer-motion";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import styles from "../../styles/Staff.module.css";

function Staff() {
  return (
    <div className={styles.staff}>
      <div className={styles.container}>
        <div className={styles.top}>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, y: 100 }}
          >
            PROFESSIONAL STAFF
          </motion.h2>
          {/* <h3>Assurance Associate and Information Technology Audit Staff</h3> */}

          <div>
            <motion.p
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, scale: 0.3 }}
            >
              Michael Okpanachi B.Sc. ACIT, FCA
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "tween", duration: 0.15 }}
              initial={{ opacity: 0, scale: 0.3 }}
            >
              L.A Sipe B.Sc. FCA (as Review Partner){" "}
            </motion.p>
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
    <div className={styles.partners} id="staff">
      <div className={styles.container}>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
          initial={{ opacity: 0, y: 100 }}
        >
          PRINCIPAL PARTNERS
        </motion.h2>
        <div>
          <motion.p
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            Michael Okpanachi B.Sc. ACIT, FCA
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, type: "tween", duration: 0.15 }}
            initial={{ opacity: 0, scale: 0.3 }}
          >
            L.A Sipe B.Sc. FCA (as Review Partner){" "}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
