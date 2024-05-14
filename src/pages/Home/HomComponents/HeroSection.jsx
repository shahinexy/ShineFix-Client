import { Link } from "react-router-dom";
import benner from "../../../assets/images/pngwing3.com.png";
import Slider from "./Slider";
import { FaAngleDoubleRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="lg:grid grid-cols-2 gap-10 items-center py-7 px-4">
      <div>
        <div className="lg:w-5/6 mx-auto">
          <h1 className="text-primary dark:text-secondary md:text-6xl text-4xl font-bold uppercase md:mb-5 mb-2">
          Your Trusted Home Repair Service
          </h1>
          <p>
          Welcome to ShineFix, where your home repair needs are our top priority. Our expert team is dedicated to providing reliable and efficient service, ensuring your home is in excellent condition. From plumbing and electrical repairs to carpentry and painting, we've got you covered. Trust us to deliver quality craftsmanship and personalized solutions tailored to your specific needs. Don't let home repairs stress you out – let Fix It Right handle it with professionalism and care.
          </p>
          <p className="md:my-6 my-3 inline-block text-start md:text-2xl text-xl font-semibold text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary">
            <Link
              to={`/services`}
              className="flex items-center duration-500 hover:scale-105 hover:-rotate-2"
            >
              Exlore Our Services &nbsp; &nbsp;----
              <FaAngleDoubleRight className="text-2xl mt-[2px]"></FaAngleDoubleRight>{" "}
            </Link>
          </p>
        </div>
      </div>
      <div className="relative">
        <div>
          <img className="w-full h-full" src={benner} alt="" />
        </div>
        <div className="absolute inset-0 sm:top-1/3 top-0">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
