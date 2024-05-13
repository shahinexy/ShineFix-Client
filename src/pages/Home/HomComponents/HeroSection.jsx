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
            This is a hero section hearder
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            cupiditate ducimus dignissimos voluptatum cum laudantium sapiente
            alias expedita, ipsam, illo quis accusamus tenetur similique nobis
            facere odio libero labore dicta?
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
        <div className="absolute inset-0 top-1/3">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
