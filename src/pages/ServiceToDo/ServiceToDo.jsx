import { Helmet } from "react-helmet";
import ServiceToDoCard from "./ServiceToDoComponent/ServiceToDoCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import Loader from "../../components/Loader";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleDoubleRight, FaSearch } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { Link } from "react-router-dom";

const ServiceToDo = () => {
  const { user } = useContext(authContext);
  const [isVisible, setIsVisisble] = useState(false);
  const [search, setSearch] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["serviceToDo"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/bookedServices/provider/${
          user.email
        }`
      );
      return res.data;
    },
  });

  useEffect(() => {
    const searchData = data;
    setSearch(searchData);
  }, [data]);

  if(isPending) return <Loader></Loader>
  if(isError) return console.log(error.message);

  return (
    <div className="max-w-7xl mx-auto px-4 md:mt-20 my-10">
      <Helmet>
        <title>Service To Do</title>
      </Helmet>
      <div className="md:w-4/6 sm:my-20 my-12">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
          Your services to-do
        </h1>
        <p>
        Stay organized and efficient with our Services To-Do page. Easily manage your upcoming tasks, prioritize assignments, and track progress all in one place. Simplify your workflow and ensure nothing falls through the cracks with Fix It Right.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto flex justify-end flex-wrap-reverse gap-3 md:my-10 my-5">

        <div className="flex gap-3 items-center bg-white dark:bg-white/40 px-5 shadow-md shadow-secondary">
          <input
            onChange={(e) => setSearchFilter(e.target.value)}
            onFocus={() => setIsVisisble(true)}
            className="py-2 focus:outline-none bg-white dark:bg-white/0"
            type="text"
            placeholder="write in lower care"
          />
          <FaSearch className="text-xl text-primary dark:text-secondary" />
        </div>

        {isVisible && (
          <div className="absolute top-14 right-0 z-20 sm:w-[500px] w-full bg-[#eef7ff] dark:bg-primary shadow-lg shadow-secondary px-5 py-2 border border-primary dark:border-secondary">
            <div className="flex justify-end">
              <button onClick={() => setIsVisisble(false)}>
                <GiTireIronCross className="text-primary dark:text-white text-4xl font-bold border-2 border-primary dark:border-white rounded-full p-2" />
              </button>
            </div>
            {search
              .filter((item) => {
                return searchFilter.toLowerCase() === ""
                  ? item
                  : item.serviceName.toLowerCase().includes(searchFilter.toLowerCase());
              })
              .slice(0, 3)
              .map((data) => (
                <div key={data._id} className=" border-b py-2">
                  <h3 className="text-lg font-semibold ">{data.serviceName}</h3>
                  <p className="text-sm">{data.instruction.slice(0, 70)}...</p>
                  <div className="flex justify-between flex-wrap">
                    <p>{data.currentUserName}</p>
                    <p>price: {data.servicePrice}$</p>
                    <Link
                      to={`/bookedServiceDetails/${data._id}`}
                      className="flex items-center justify-center duration-500 hover:scale-110 hover:-rotate-2"
                    >
                      Details &nbsp; ----
                      <FaAngleDoubleRight className="text-2xl mt-[2px]"></FaAngleDoubleRight>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="gird grid-cols-1 max-w-5xl mx-auto gap-8">
        {
          data.length > 0 ? data.map(data => <ServiceToDoCard key={data._id} data={data} refetch={refetch}></ServiceToDoCard>)
            :  <div className="text-3xl text-center ">You don't have any service to do...</div>
        }
        
      </div>
    </div>
  );
};

export default ServiceToDo;
