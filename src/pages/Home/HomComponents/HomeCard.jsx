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
    <div
      data-aos-anchor-placement="bottom-bottom"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="flex sm:flex-row flex-col-reverse gap-3 border border-primary dark:border-secondary  p-5 shadow-lg shadow-secondary"
    >
      <div className="md:w-7/12 space-y-2">
        <h1 className="text-2xl font-bold text-primary dark:text-secondary">
          {serviceName}
        </h1>
        <p>{description.slice(0, 100)}...</p>
        <div className="flex justify-between flex-wrap-reverse gap-1 items-center">
          <div className="flex gap-4 items-center">
            <img
              className="w-12 h-12 rounded-full"
              src={providerPhoto}
              alt=""
            />
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
      <div className="md:w-5/12 overflow-hidden">
        <img
          className="w-full h-full duration-500 hover:scale-125 hover:rotate-12"
          src={servicePhoto}
          alt=""
        />
      </div>
    </div>
  );
};

HomeCard.propTypes = {
  data: PropTypes.object,
};

export default HomeCard;
