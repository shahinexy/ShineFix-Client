import bgimg from "../../../assets/images/blue-print-with-yellow-repair-kit.jpg";
import Marquee from "react-fast-marquee";
import partner1 from "../../../assets/images/clients-inverse-1-200x90.png";
import partner2 from "../../../assets/images/clients-inverse-2-200x90.png";
import partner3 from "../../../assets/images/clients-inverse-3-200x90.png";
import partner4 from "../../../assets/images/clients-inverse-4-200x90 (1).png";
import partner5 from "../../../assets/images/clients-inverse-4-200x90.png";
import partner6 from "../../../assets/images/clients-inverse-5-200x90.png";

const OurPartnerSection = () => {
  return (
    <div
      style={{ backgroundImage: ` url(${bgimg})` }}
      className="h-[50vh] bg-fixed bg-cover bg-center"
    >
      <div className="bg-black/50 w-full h-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-center md:text-4xl text-3xl text-white font-medium border-b-4 border-secondary pb-3">Our Pratners</h1>

        <div className="flex md:w-4/6 mx-auto  justify-center items-center">
          <Marquee className="">
            <img src={partner1} alt="" />
            <img src={partner2} alt="" />
            <img src={partner3} alt="" />
            <img src={partner4} alt="" />
            <img src={partner5} alt="" />
            <img src={partner6} alt="" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default OurPartnerSection;
