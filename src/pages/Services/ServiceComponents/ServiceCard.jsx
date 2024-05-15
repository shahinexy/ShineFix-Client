import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { PropTypes } from "prop-types";

const ServiceCard = ({ data }) => {
  const {
    _id,
    serviceName,
    servicePhoto,
    description,
    servicePrice,
    providerPhoto,
    providerName,
    serviceArea,
  } = data;
  return (
    <div
      data-aos-anchor-placement="bottom-bottom"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="flex md:flex-row flex-col-reverse gap-5 border border-primary dark:border-secondary md:p-8 p-3 shadow-lg shadow-secondary mb-8"
    >
      <div className="md:w-4/6 space-y-3">
        <h2 className="text-2xl font-bold text-primary dark:text-secondary">
          {serviceName}
        </h2>
        <p>{description ? description.slice(0, 100) : "Unknown"}... </p>

        <div className="flex justify-between flex-wrap gap-1 items-center">
          <p className="font-medium">Price: {servicePrice}$</p>
          <p className="font-medium flex items-center gap-2">
            <HiLocationMarker className="text-primary text-xl dark:text-secondary" />
            {serviceArea || "Unknown"}
          </p>
        </div>

        <div className="flex justify-between gap-1 flex-wrap">
          <div className="flex gap-4 items-center">
            <img
              className="w-14 h-14 rounded-full"
              src={providerPhoto}
              alt=""
            />
            <p className="text-lg font-bold">{providerName}</p>
          </div>

          <p className="py-3 text-xl font-semibold text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary">
            <Link
              to={`/serviceDetails/${_id}`}
              className="flex items-center justify-center duration-500 hover:scale-110 hover:-rotate-2"
            >
              View Details &nbsp; &nbsp;----
              <FaAngleDoubleRight className="text-2xl mt-[2px]"></FaAngleDoubleRight>{" "}
            </Link>
          </p>
        </div>
      </div>
      <div className="md:w-2/6">
        <img src={servicePhoto} alt="" />
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  data: PropTypes.object,
};

export default ServiceCard;
