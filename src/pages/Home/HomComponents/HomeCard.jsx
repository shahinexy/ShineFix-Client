import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { PropTypes } from "prop-types";

const HomeCard = ({ data }) => {
  const {
    _id,
    serviceName,
    servicePhoto,
    description,
    servicePrice,
    providerPhoto,
    providerName,
  } = data;
  return (
    <div className="border border-primary dark:border-secondary space-y-3 md:p-8 p-5 shadow-lg shadow-secondary">
      <h1 className="text-2xl font-bold text-primary dark:text-secondary">
        {serviceName}
      </h1>
      <div className="overflow-hidden">
        <img
          className="w-full h-64 duration-500 hover:scale-125 hover:rotate-12"
          src={servicePhoto}
          alt=""
        />
      </div>
      <p>{description.slice(0, 100)}...</p>
      <div className="flex justify-between flex-wrap-reverse gap-1 items-center">
        <div className="flex gap-4 items-center">
          <img className="w-14 h-14 rounded-full" src={providerPhoto} alt="" />
          <p className="text-lg font-bold">{providerName}</p>
        </div>
        <div>
          <p className="shadow-md shadow-secondary px-3 py-1 font-medium">
            Price: {servicePrice}$
          </p>
        </div>
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
  );
};

HomeCard.propTypes = {
  data: PropTypes.object,
};

export default HomeCard;
