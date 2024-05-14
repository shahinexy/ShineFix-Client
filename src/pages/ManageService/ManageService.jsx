import { Helmet } from "react-helmet";
import ManageServiceCard from "./ManageServiceComponents/ManageServiceCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import Loader from "../../components/Loader";

const ManageService = () => {
  const { user } = useContext(authContext);

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["manageService"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/services/email/${user.email}`
      );
      return res.data;
    },
  });

  if (isPending) return <Loader></Loader>;
  if (isError) console.log(error.message);
  console.log(data);

  return (
    <div className="max-w-7xl mx-auto px-4 md:mt-20 my-10">
      <Helmet>
        <title>Manage Service</title>
      </Helmet>
      <div className="md:w-4/6 my-10">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
        Manage with Ease
        </h1>
        <p>
        Efficiently update and organize your service details in one convenient location. Our intuitive platform allows you to easily add, edit, or remove services as needed. Stay in control of your offerings and ensure accurate information for your clients. Simplify your service management with ShineFix.
        </p>
      </div>

      <div className="gird grid-cols-1 max-w-5xl mx-auto gap-8">
        {
         data.length > 0 ? data.map(data => <ManageServiceCard key={data._id} data={data} refetch={refetch}></ManageServiceCard>) 
         : <h2 className="text-3xl text-center ">You don't have any services...</h2>        
        }
      </div>
    </div>
  );
};

export default ManageService;
