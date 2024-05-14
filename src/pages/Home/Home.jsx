import { Helmet } from "react-helmet";
import HeroSection from "./HomComponents/HeroSection";
import OurServiceSection from "./HomComponents/OurServiceSection";
import OurPartnerSection from "./HomComponents/OurPartnerSection";
import OurServicesSection from "./HomComponents/OurServicesSection";
import OurCllientReviewSection from "./HomComponents/OurCllientReviewSection";
import OurSuccessSection from "./HomComponents/OurSuccessSection";

const Home = () => {
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
      <div className="max-w-7xl mx-auto px-4 md:my-20 my-7">
        <OurCllientReviewSection></OurCllientReviewSection>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:my-24 my-7">
        <OurSuccessSection></OurSuccessSection>
      </div>
    </div>
  );
};

export default Home;
