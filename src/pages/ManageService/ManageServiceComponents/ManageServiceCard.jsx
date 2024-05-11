import { HiLocationMarker } from "react-icons/hi";
import img from "../../../assets/images/ey-male-carpenter-using-tape-measure-piece-of-wood-in-wood-processing-plants.jpg";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaEdit } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageServiceCard = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse gap-5 border border-primary dark:border-secondary md:p-8 p-3 shadow-lg shadow-secondary ">
      <div className="md:w-2/6">
        <img src={img} alt="" />
      </div>

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
          <p className="py-3 text-xl font-semibold text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary">
            <Link className="flex items-center justify-center duration-500 hover:scale-110 hover:-rotate-2">
              View Details &nbsp; &nbsp;----
              <FaAngleDoubleRight className="text-2xl mt-[2px]"></FaAngleDoubleRight>{" "}
            </Link>
          </p>
          <div className="flex gap-8 items-center">
                <button><RiDeleteBin6Line  className="text-3xl text-red-500 duration-500 hover:scale-110 hover:-rotate-3"/></button>

                <Link><FaEdit className="text-3xl text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary duration-500 hover:scale-110 hover:-rotate-3"/></Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceCard;
