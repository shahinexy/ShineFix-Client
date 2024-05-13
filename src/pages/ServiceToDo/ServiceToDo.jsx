import { Helmet } from "react-helmet";
import ServiceToDoCard from "./ServiceToDoComponent/ServiceToDoCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import Loader from "../../components/Loader";

const ServiceToDo = () => {
  const { user } = useContext(authContext);
  const { data, isPending, isError, error } = useQuery({
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
          Thsi is a title for all services
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          numquam deserunt perferendis sequi illum similique totam. Earum
          repellat assumenda, voluptas nobis exercitationem inventore ducimus
          neque beatae quas rerum, distinctio cum.
        </p>
      </div>
      <div className="gird grid-cols-1 max-w-5xl mx-auto gap-8">
        {
          data.map(data => <ServiceToDoCard key={data._id} data={data}></ServiceToDoCard>)
        }
        
      </div>
    </div>
  );
};

export default ServiceToDo;
