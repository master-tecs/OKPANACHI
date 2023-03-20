import {
  AccountBalanceRounded,
  AdUnits,
  CommentBank,
  InfoSharp,
  InsertChartOutlined,
  LayersTwoTone,
  MilitaryTechOutlined,
  MoneyOffCsredRounded,
  PeopleAltOutlined,
  ProductionQuantityLimitsSharp,
} from "@mui/icons-material";
import styles from "../../styles/Services.module.css";
import Service from "../Service";

function Services() {
  return (
    <div className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.top}>
          <h4 className={styles.subtitle}>Services</h4>
          <h1 className={styles.title}>SERVICES WE PROVIDE</h1>
          <p></p>
        </div>

        <div className={styles.bottom}>
          <Service
            Icon={AdUnits}
            title="Audit and Accounting"
            details="After completing the various steps, set out above we would then be in a       position to draft out audit report on the accounts."
          />
          <Service
            Icon={AccountBalanceRounded}
            title="Accounting
"
            details="The statutory legislation setting up these organization require that proper books of accounts be maintained and annual audited accounts submitted to the appropriate authorities (Registrar of companies, Director General, Supervising Ministry) on a yearly basis."
          />
          <Service
            Icon={MoneyOffCsredRounded}
            title="Taxation"
            details="Complexities in Nigeria tax legislation have increased tremendously in recent times with new taxes being generated. The methods of arriving at the quantum of tax payable keep changing and complicated."
          />
          <Service
            Icon={CommentBank}
            title="Management consultancy"
            details="Many enterprises in the economy whether they belong to the public or private  sector have been inflicted with many ills due to the prevailing harsh economic conditions."
          />
          <Service
            Icon={InsertChartOutlined}
            title="Insolvency"
            details="Nigeria has been facing economic recession in recent times, which has place a number of Nigerian enterprises in economic coma and where they survive they merely exists."
          />
          <Service
            Icon={LayersTwoTone}
            title="Secretarial"
            details="Procedures for incorporation of companies are provided in the companies and Allied Matters Decree 1990..."
          />
          <Service
            Icon={InfoSharp}
            title="Information communication technology (ICT) Services"
            details="ICT services include:
                    Networking,
                    Solutions Packaging,
                    Multi – vendor/multi – platform system integration,
                    Trends Tracking and Research...
                    "
          />
          <Service
            Icon={PeopleAltOutlined}
            title="Staff  Training. And Development"
            details="Human resources are very vital to the success of an organization. Anything that could be done to enhance the performance and therefore productivity should be embarked upon."
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
