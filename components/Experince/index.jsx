import { motion } from "framer-motion";
import styles from "../../styles/Experince.module.css";

function Experince() {
  return (
    <div className={styles.experince}>
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, type: "tween", duration: 0.15 }}
          initial={{ opacity: 0, y: 100 }}
        >
          MAJOR AGNMENTS/EXPERIENCE
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, type: "tween", duration: 0.15 }}
          initial={{ opacity: 0, scale: 0.3 }}
        >
          Since the commencement of operations we have been privileged to have
          been appointed External Auditors / Accountants (and our Partners have
          previously provided services) to a number of Government establishments
          and Companies, chief amongst which are the following:-
        </motion.p>
        <ul>
          <li>
            <div className={styles.federal}>
              <input
                type="radio"
                name="accordion"
                id="first"
                className={styles.input}
              />
              <label for="first">
                <h3>Federal Government Parastatals</h3>
              </label>
              <div className={styles.list}>
                <p className={styles.item}>
                  University of Agriculture Abeokuta (UNAB)
                </p>
                <p className={styles.item}>
                  University Teaching Hospital Ibadan (UCH)
                </p>
                <p className={styles.item}>
                  Nigeria Institute of Social and Economic Research (NISER)
                </p>
                <p className={styles.item}>
                  Population Research and Management Unit
                </p>
                <p className={styles.item}>
                  National Centre for Economic Management and Administration
                  (NCEMA)
                </p>
                <p className={styles.item}>
                  Institute of Agricultural Research and Training (IAR&T)
                </p>
                <p className={styles.item}>Moore Plantation Ibadan</p>
                <p className={styles.item}>
                  Federal College of Agricultural Ibadan
                </p>
                <p className={styles.item}>
                  Federal College of Agricultural Akure
                </p>
                <p className={styles.item}>
                  Federal Institute of Industrial Research (FIIRO)
                </p>
                <p className={styles.item}>
                  Federal Ministry of Health – Managed by NISER (World Bank /
                  IDA Credit No 2238 UNI
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.federal}>
              <input
                type="radio"
                name="accordion"
                id="second"
                className={styles.input}
              />
              <label for="second">
                <h3>State Government Parastatals</h3>
              </label>
              <div className={styles.list}>
                <p className={styles.item}>
                  Benue State Urban Development Board
                </p>
                <p className={styles.item}>
                  Kogi State Christian Pilgrims Welfare Board
                </p>
                <p className={styles.item}>
                  Kogi State College of Education – Ankpa
                </p>
                <p className={styles.item}>Kaduna Capital School</p>
                <p className={styles.item}>College of Education Sokoto</p>
                <p className={styles.item}>Bauchi State Water Board</p>
                <p className={styles.item}>Borno State Water Board</p>
                <p className={styles.item}>Sokoto State Housing Corporation</p>
                <p className={styles.item}>
                  Kaduna State Rural Electrification Board Ogun State Forest
                  Plantation Project (World Bank/ ADB Assisted (Jefo in Ijebu
                  Ode) Oyo State Multi-state Roads project MSEPII (world Bank /
                  IDA credit No 2485 UNI)
                </p>
                <p className={styles.item}>
                  Lagos State Primary Education Board (SPEB)
                </p>
                <p className={styles.item}>Kogi State foundation.</p>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.federal}>
              <input
                type="radio"
                name="accordion"
                id="third"
                className={styles.input}
              />
              <label for="third">
                <h3>Local Government Council</h3>
              </label>
              <div className={styles.list}>
                <p className={styles.item}>
                  Dekina Local Government Council of Kogi State
                </p>
                <p className={styles.item}>
                  Kachia Local Government Council of Kaduna State
                </p>
                <p className={styles.item}>
                  Kachia Local Educational Authority of Kaduna State
                </p>
                <p className={styles.item}>
                  Birin-Gwari Local Government Council of Kaduna State
                </p>
                <p className={styles.item}>
                  Birin-Gwari Local Education Authority of Kaduna State
                </p>
                <p className={styles.item}>
                  Kudan Local Government Council of Kaduna State
                </p>
                <p className={styles.item}>
                  Makarfi Local Government Council of Kaduna State
                </p>
                <p className={styles.item}>
                  Giwa Local Government of Kaduna State.
                </p>
                <p className={styles.item}>
                  Babana Local Education Authority of Niger State
                </p>
                <p className={styles.item}>
                  Zugurma Local Education Authority of Niger State
                </p>
                <p className={styles.item}>
                  Shagunu Local Education Authority of Niger State
                </p>
                <p className={styles.item}>
                  Agwara Local Education Authority of Niger State
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.federal}>
              <input
                type="radio"
                name="accordion"
                id="fourth"
                className={styles.input}
              />
              <label for="fourth">
                <h3>Private Companies – Non Financial Institutions</h3>
              </label>
              <div className={styles.list}>
                <p className={styles.item}>Riyab Nigeria Limited Kaduna</p>
                <p className={styles.item}>Crew Construction Limited Kaduna</p>
                <p className={styles.item}>Fenix Construction Limited Kaduna</p>
                <p className={styles.item}>
                  Standard Distribution Agency Limited Kaduna
                </p>
                <p className={styles.item}>Cabis Nigeria Limited Kaduna</p>
                <p className={styles.item}>AMB Limited Kaduna</p>
                <p className={styles.item}>Facinogem Nigeria Limited Kaduna</p>
                <p className={styles.item}>Kadimpex Nigeria Limited Kaduna</p>
                <p className={styles.item}>Harco Textile Mills Limited Zaria</p>
                <p className={styles.item}>
                  Arewa Cotton and Allied Products Limited New Bussa
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.federal}>
              <input
                type="radio"
                name="accordion"
                id="fifth"
                className={styles.input}
              />
              <label for="fifth">
                <h3>Financial Institutions</h3>
              </label>
              <div className={styles.list}>
                <p className={styles.item}>Riyab Nigeria Limited Kaduna</p>
                <p className={styles.item}>
                  Inye Community Bank Nigeria Limited
                </p>
                <p className={styles.item}>
                  Ejilogwu Community Bank Nigeria Limited Ankoa
                </p>
                <p className={styles.item}>
                  Bank of the North (From 1983-1989)
                </p>
                <p className={styles.item}>
                  North- South Bank of Nigeria PLC (in liquidation)
                </p>
                <p className={styles.item}>
                  Highland Bank Nigeria Ltd (in liquidation)
                </p>
                <p className={styles.item}>Sabon Yelwa Community Bank.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experince;
