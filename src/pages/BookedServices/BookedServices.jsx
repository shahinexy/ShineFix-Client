import { Helmet } from "react-helmet";
// import ServiceCard from "../Services/ServiceComponents/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../components/Loader";
import BookedCard from "./BookedServiceComponents/BookedCard";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";
import { useEffect } from "react";

const BookedServices = () => {
  const { user } = useContext(authContext);
  const [isVisible, setIsVisisble] = useState(false);
  const [search, setSearch] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["bookedServices"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/bookedServices/email/${user.email}`
      );
      return res.data;
    },
  });
  console.log(data);

  useEffect(() => {
    const searchData = data;
    setSearch(searchData);
  }, [data]);

  if (isPending) return <Loader></Loader>;
  if (isError) console.log(error.message);

  return (
    <div className="max-w-7xl mx-auto px-4 md:mt-20 my-10">
      <Helmet>
        <title>Booekd Services</title>
      </Helmet>
      <div className="md:w-4/6 sm:my-20 my-12">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
           Your Booked services
        </h1>
        <p>
        Streamline your bookings and appointments effortlessly. Our user-friendly platform allows you to manage scheduled services with ease, from confirming appointments to rescheduling as needed. Experience the convenience of organized bookings and ensure smooth service delivery every time with ShineFix.
        </p>
      </div>



      <div className="relative max-w-5xl mx-auto flex justify-between flex-wrap-reverse gap-3 md:my-10 my-5">
      <div className="flex gap-5 ">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <p>Pending</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <p>Working</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <p>Completed</p>
          </div>
      </div>

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
                  <p className="text-sm">{data.description.slice(0, 70)}...</p>
                  <div className="flex justify-between flex-wrap">
                    <p>{data.providerName}</p>
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
        {data.length > 0 ? data.map((data) => (
          <BookedCard key={data._id} data={data}></BookedCard>
          
        ))
        :  <h2 className="text-3xl text-center ">You don't have any booked services...</h2>
      }
      </div>
    </div>
  );
};

export default BookedServices;
