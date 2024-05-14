import { Helmet } from "react-helmet";
import ServiceCard from "./ServiceComponents/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../components/Loader";
import { FaAngleDoubleRight, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiTireIronCross } from "react-icons/gi";

const Services = () => {
  const [isVisible, setIsVisisble] = useState(false);
  const [search, setSearch] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["serviceSection"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/services`
      );
      return res.data;
    },
  });

  useEffect(() => {
    const searchData = data;
    setSearch(searchData);
  }, [data]);

  if (isPending) return <Loader></Loader>;
  if (isError) console.log(error.message);

  return (
    <div className="max-w-7xl mx-auto px-4 md:mt-20 my-10">
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="md:w-4/6 my-10">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
          Thsi is a title for all services
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          numquam deserunt perferendis sequi illum similique totam. Earum
          repellat assumenda, voluptas nobis exercitationem inventore ducimus
          neque beatae quas rerum, distinctio cum.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col items-end gap-3 my-10">
        <div className="flex gap-3 items-center bg-white dark:bg-white/40 px-5 shadow-md shadow-secondary">
          <input
            onChange={(e) => setSearchFilter(e.target.value)}
            onFocus={() => setIsVisisble(true)}
            // onBlur={() => setIsVisisble(false)}
            className="py-2 focus:outline-none bg-white dark:bg-white/0"
            type="text"
            placeholder="search now"
          />
          <FaSearch className="text-xl text-primary dark:text-secondary" />
        </div>

        {isVisible && (
          <div className="absolute top-14 z-20 max-w-3xl bg-[#eef7ff] dark:bg-primary shadow-lg shadow-secondary px-5 py-2 border border-primary dark:border-secondary">
            <div className="flex justify-end">
              <button onClick={() =>setIsVisisble(false)}>
              <GiTireIronCross className="text-primary dark:text-white text-4xl font-bold border-2 border-primary dark:border-white rounded-full p-2" />
              </button>

            </div>
            {search
              .filter((item) => {
                return searchFilter.toLowerCase() === ""
                  ? item
                  : item.serviceName.toLowerCase().includes(searchFilter);
              })
              .slice(0, 3)
              .map((data) => (
                <div key={data._id} className=" border-b py-2">
                  <h3 className="text-lg font-semibold ">{data.serviceName}</h3>
                  <p className="text-sm">{data.description.slice(0, 70)}...</p>
                  <div className="flex justify-between flex-wrap">
                    <p>{data.providerName}</p>
                    <p>price: {data.servicePrice}$</p>
                    <Link to={`/serviceDetails/${data._id}`} className="flex items-center justify-center duration-500 hover:scale-110 hover:-rotate-2">
                      Details &nbsp; &nbsp;----
                      <FaAngleDoubleRight className="text-2xl mt-[2px]"></FaAngleDoubleRight>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      <div className=" max-w-5xl mx-auto">
        {data.map((data) => (
          <ServiceCard key={data._id} data={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
