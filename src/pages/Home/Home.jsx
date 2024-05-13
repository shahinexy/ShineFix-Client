import { Helmet } from "react-helmet";
import HeroSection from "./HomComponents/HeroSection";
import OurServiceSection from "./HomComponents/OurServiceSection";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

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
    </div>
  );
};

export default Home;
