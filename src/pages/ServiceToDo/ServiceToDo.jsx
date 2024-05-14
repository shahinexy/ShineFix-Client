import { Helmet } from "react-helmet";
import ServiceToDoCard from "./ServiceToDoComponent/ServiceToDoCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import Loader from "../../components/Loader";

const ServiceToDo = () => {
  const { user } = useContext(authContext);
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

  if(isPending) return <Loader></Loader>
  if(isError) return console.log(error.message);

  console.log(data);
  return (
    <div className="max-w-7xl mx-auto px-4 md:mt-20 my-10">
      <Helmet>
        <title>Service To Do</title>
      </Helmet>
      <div className="md:w-4/6 my-10">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
          Your services to-do
        </h1>
        <p>
        Stay organized and efficient with our Services To-Do page. Easily manage your upcoming tasks, prioritize assignments, and track progress all in one place. Simplify your workflow and ensure nothing falls through the cracks with Fix It Right.
        </p>
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
