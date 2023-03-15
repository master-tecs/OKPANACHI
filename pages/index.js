import Head from "next/head";
import About from "../components/About/inde";
import Banner from "../components/Banner";
import Experince from "../components/Experince";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Staff, { Partners } from "../components/Staff";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OKPANACHI & CO (CHARTERED ACCOUNTANTS)</title>
        <meta
          name="description"
          content="We are a dynamic indigenous firm of Chartered Accountants, which seeks to provide professional services to clients on a personal basis and to calve an enviable reputation in our wide range of services."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Nav */}
      <Nav />

      {/* Main */}
      <main className="main">
        {/* Banner */}
        <Banner
          title="Finance and Accounting"
          detail=" We are a dynamic indigenous firm of Chartered Accountants, which
            seeks to provide professional services to clients on a personal
            basis and to calve an enviable reputation in our wide range of
            services."
          btn="Get A Col"
          img="./images/3.jpg"
        />

        {/* About */}
        <About
          subTitle="BRIEF ON THE FIRM"
          title="OKPANACHI & CO (CHARTERED ACCOUNTANTS)"
          detail={[
            "We are a dynamic indigenous firm of Chartered Accountants, which seeks to provide professional services to clients on a personal basis and to calve an enviable reputation in our wide range of services. We have our offices located in Kaduna, Lokoja and Lagos. We provide a wide range of Financial and Accountancy services which include auditing, investigation of financial irregularities and other types of investigation, writing up books of accounts and asset register, implementing Accounting Manual, Tax consultancy, corporate reconstruction and insolvency, formulation of financial plan, management consultancy, staff recruitment and training, feasibility studies, etc.",
          ]}
        />

        {/* Experince */}
        <Experince />

        {/* Partners & Staffs */}
        <Partners />
        <Staff />

        {/* OUR PRINCIPLE */}
        <Banner
          title="OUR PRINCIPLE"
          detail="In our firm all Partners and Professional staff adhere to recommended principle of independence, objectivity, integrity and confidentiality.
 
          Our audit is carried out in accordance with the best-approved Auditing standards and with any statutory or contractual requirements.  Other functions are carried out with the best professional standard and practice.
          "
          img="./images/1.jpg"
          noMarging
        />

        {/* Services */}
        <Services />

        {/* PROFESSIONAL DEVELOPMENTS */}
        <Banner
          title="PROFESSIONAL DEVELOPMENTS"
          detail=" We recognize that the essence of training for the profession is in working in it. Therefore, on the job training is an important part of the development of potentialities of staff through exposure to different types of assignments and working with more experienced members of staff.  Staff are therefore properly supervised and the work of junior staff reviewed by more experienced members of staff and evaluated.
          "
          img="./images/2.jpg"
        />

        {/* Why choose us */}
        <About
          subTitle="WHY APPOINT US
          "
          title="OKPANACHI & CO."
          detail={[
            "a)                 As a young indigenous firm of Chartered Accountants, we provide prompt and personal services to all relevant executives of an organization.  We maintain close contacts with the management, we are able to meet all reporting requirement and make constructive suggestion on the development of the organisation’s accounting and management information systems.",
            "b)                 Our approach is innovative and cost effective.",

            "c)                 As an indigenous firm, we have considerable knowledge of local conditions, regulations and practices, and have the ability to appropriately transact business with Government agencies.",

            "d)                 We are a firm growing and varied clientele.",

            "e)                We are conversant with both Local and International reporting requirements and standards.",
          ]}
        />

        {/* FEES */}
        <Banner
          title="FEES"
          detail="Our fees are normally based on the time necessarily involved in the audit of an Organization. Where we are able to carry out an initial survey in the form of preliminary review of a client’s record, we will be able to prepare a detailed fee estimate. It is our policy to prepare a time cost budget, which is agreed with the management before the commencement of each assignment."
          img="./images/4.jpg"
        />

        {/* Case Study */}
        {/* Testimonial */}
        {/* Contact */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
