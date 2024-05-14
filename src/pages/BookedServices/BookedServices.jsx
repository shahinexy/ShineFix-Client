import { Helmet } from "react-helmet";
// import ServiceCard from "../Services/ServiceComponents/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../components/Loader";
import BookedCard from "./BookedServiceComponents/BookedCard";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

const BookedServices = () => {
  const { user } = useContext(authContext);
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

  if (isPending) return <Loader></Loader>;
  if (isError) console.log(error.message);

  return (
    <div className="max-w-7xl mx-auto px-4 md:mt-20 my-10">
      <Helmet>
        <title>Booekd Services</title>
      </Helmet>
      <div className="md:w-4/6 my-10">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
           Your Booked services
        </h1>
        <p>
        Streamline your bookings and appointments effortlessly. Our user-friendly platform allows you to manage scheduled services with ease, from confirming appointments to rescheduling as needed. Experience the convenience of organized bookings and ensure smooth service delivery every time with ShineFix.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex justify-end md:gap-5 gap-3 my-5">
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
