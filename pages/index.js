import BrowseOurProducts from "@/components/MainHome/BrowseOurProduct";
import KnowAboutUs from "../components/MainHome/KnowAboutUs";
import LandingPage from "../components/MainHome/LandingPage";
import OurAssurance from "@/components/MainHome/OurAssurance";
import Collection from "@/components/MainHome/Collection";
import ContactPart from "@/components/MainHome/Contact";



const Home = () => {
  return(
    <div className="width-100">
      <LandingPage/>
      <KnowAboutUs/>
      <BrowseOurProducts/>
      <OurAssurance/>
      <Collection/>
      <ContactPart/>
    </div>
  )
}

export default Home;