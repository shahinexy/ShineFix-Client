import { Helmet } from "react-helmet";
import HeroSection from "./HomComponents/HeroSection";
import OurServiceSection from "./HomComponents/OurServiceSection";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import OurPartnerSection from "./HomComponents/OurPartnerSection";
import OurServicesSection from "./HomComponents/OurServicesSection";

const Home = () => {
  const {user} = useContext(authContext)
  // console.log(user);
  return (
    <div>
      <Helmet>
        <title>ShineFix | Home</title>
      </Helmet>
      <HeroSection></HeroSection>
      <div className="max-w-6xl mx-auto px-4 md:my-12 my-7">
        <OurServiceSection></OurServiceSection>
      </div>
      <OurPartnerSection></OurPartnerSection>
      <div className="max-w-7xl mx-auto px-4 md:my-12 my-7">
          <OurServicesSection></OurServicesSection>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:my-12 my-7">
          
      </div>
    </div>
  );
};

export default Home;
