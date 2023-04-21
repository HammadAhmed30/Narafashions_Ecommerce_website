import BrowseOurProducts from "@/components/MainHome/BrowseOurProduct";
import KnowAboutUs from "../components/MainHome/KnowAboutUs";
import LandingPage from "../components/MainHome/LandingPage";
import OurAssurance from "@/components/MainHome/OurAssurance";
import Collection from "@/components/MainHome/Collection";
import ContactPart from "@/components/MainHome/Contact";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";


const Home = () => {
  return (
    <div className="width-100">
      <Head>
        <title>NaraFashions | Abrade The Best Apparel</title>
      </Head>
      <Navbar />
      <LandingPage />
      <KnowAboutUs />
      <BrowseOurProducts />
      <OurAssurance />
      <Collection />
      <ContactPart />
      <Footer />
    </div>
  );
};

export default Home;
