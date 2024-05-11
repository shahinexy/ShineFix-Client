import { HiLocationMarker } from "react-icons/hi";
import img from "../../../assets/images/ey-male-carpenter-using-tape-measure-piece-of-wood-in-wood-processing-plants.jpg";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

const ServiceCard = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse gap-5 border border-primary dark:border-secondary md:p-8 p-3 shadow-lg shadow-secondary ">
      <div className="md:w-4/6 space-y-3">
        <h2 className="text-2xl font-bold text-primary dark:text-secondary">
          This is service title{" "}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          consequatur. Iusto, repellendus, eaque dicta reiciendis dignissimos
          veritatis debitis doloribus magnam id adipisci eligendi deserunt
          consequatur earum ratione vel ullam beatae!
        </p>

        <div className="flex justify-between flex-wrap gap-1 items-center">
          <p className="font-medium">Price: 231$</p>
          <p className="font-medium flex items-center gap-2">
            <HiLocationMarker className="text-primary dark:text-secondary" />{" "}
            Bangladesh Narayangonj
          </p>
        </div>

        <div className="flex justify-between gap-1 flex-wrap">
          <div className="flex gap-4 items-center">
            <img className="w-14 h-14 rounded-full" src={img} alt="" />
            <p className="text-lg font-bold">Provider Name</p>
          </div>

          <p className="py-3 text-xl font-semibold text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary">
            <Link to={'/serviceDetails'} className="flex items-center justify-center duration-500 hover:scale-110 hover:-rotate-2">
              View Details &nbsp; &nbsp;----
              <FaAngleDoubleRight className="text-2xl mt-[2px]"></FaAngleDoubleRight>{" "}
            </Link>
          </p>
        </div>
      </div>
      <div className="md:w-2/6">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ServiceCard;
