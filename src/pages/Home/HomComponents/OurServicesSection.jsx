import { Link } from "react-router-dom";
import icon1 from "../../../assets/images/icon-01-101x100.png";
import icon2 from "../../../assets/images/icon-02-101x100.png";
import icon3 from "../../../assets/images/icon-03-101x100.png";
import icon4 from "../../../assets/images/icon-04-101x100.png";
import icon5 from "../../../assets/images/icon-05-101x100.png";
import icon6 from "../../../assets/images/icon-06-101x100.png";

const OurServicesSection = () => {
  return (
    <div>
      <div className="md:w-4/6 my-10">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
          Whart we offer for you
        </h1>
        <p>
        At ShineFix, we pride ourselves on offering personalized solutions to suit your unique needs. Whether it's a minor repair or a major renovation project, we've got the expertise to handle it all. From start to finish, our dedicated team works closely with you to understand your requirements and deliver results that exceed your expectations. Experience peace of mind knowing that your home is in capable hands with ShineFix.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 gap-6">
        <Link to={"/services"}>
          <div className="h-full space-y-3  p-4 shadow-lg shadow-secondary text-center duration-500 hover:bg-primary/10">
            <img className="mx-auto" src={icon1} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Painting
            </h3>
            <p>
            Transform your space with our expert painting service. From single rooms to entire properties, we deliver flawless results. Refreshed walls with SineFix.
            </p>
          </div>
        </Link>
        <Link to={"/services"}>
          <div className="h-full space-y-3  p-4 shadow-lg shadow-secondary text-center duration-500 hover:bg-primary/10">
            <img className="mx-auto" src={icon2} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Plumbing
            </h3>
            <p>
            Experience top-notch plumbing services tailored to your needs. From fixing leaks to installing fixtures, our skilled plumbers ensure your systems run smoothly. 
            </p>
          </div>
        </Link>
        <Link to={"/services"}>
          <div className="h-full space-y-3  p-4 shadow-lg shadow-secondary text-center duration-500 hover:bg-primary/10">
            <img className="mx-auto" src={icon3} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Cleaning
            </h3>
            <p>
            Discover the ultimate cleaning experience with our meticulous service. From deep cleans to regular maintenance, we ensure your space sparkles.
            </p>
          </div>
        </Link>
        <Link to={"/services"}>
          <div className="h-full space-y-3  p-4 shadow-lg shadow-secondary text-center duration-500 hover:bg-primary/10">
            <img className="mx-auto" src={icon4} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Electricity
            </h3>
            <p>
            Experience reliable electrical solutions tailored to your needs. From installations to repairs, our expert electricians ensure your home stays safely powered. 
            </p>
          </div>
        </Link>
        <Link to={"/services"}>
          <div className="h-full space-y-3  p-4 shadow-lg shadow-secondary text-center duration-500 hover:bg-primary/10">
            <img className="mx-auto" src={icon5} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Roofing
            </h3>
            <p>
            Protect your home with our premium roofing services. From repairs to installations, our expert team ensures durability and longevity
            </p>
          </div>
        </Link>
        <Link to={"/services"}>
          <div className="h-full space-y-3  p-4 shadow-lg shadow-secondary text-center duration-500 hover:bg-primary/10">
            <img className="mx-auto" src={icon6} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Renovatin
            </h3>
            <p>
            Revitalize your home with our comprehensive renovation services. From concept to completion, our skilled team breathes new life into your space.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurServicesSection;
