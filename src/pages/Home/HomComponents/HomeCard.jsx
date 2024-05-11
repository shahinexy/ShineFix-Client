import { Link } from "react-router-dom";
import img from "../../../assets/images/ey-male-carpenter-using-tape-measure-piece-of-wood-in-wood-processing-plants.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
const HomeCard = () => {
  return (
    <div className="border border-primary dark:border-secondary space-y-3 md:p-8 p-5">
      <h1 className="text-2xl font-bold text-primary dark:text-secondary">
        Tis is items name title
      </h1>
      <div className="overflow-hidden">
        <img className="w-full h-64 duration-500 hover:scale-125 hover:rotate-12" src={img} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt sit
        pariatur accusamus praesentium quaerat aut? Atque in, provident ut natus
        eligendi vel hic maxime
      </p>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img className="w-14 h-14 rounded-full" src={img} alt="" />
          <p className="text-lg font-bold">Provider Name</p>
        </div>
        <div>
          <p className="border border-primary dark:border-secondary px-3 py-1 font-medium">
            Price: 231$
          </p>
        </div>
      </div>

      <p className="py-3 text-xl font-semibold text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary">
        <Link className="flex items-center justify-center">
          View Details &nbsp; &nbsp;----
          <FaAngleDoubleRight className="text-2xl mt-[2px]"></FaAngleDoubleRight>{" "}
        </Link>
      </p>
    </div>
  );
};

export default HomeCard;
