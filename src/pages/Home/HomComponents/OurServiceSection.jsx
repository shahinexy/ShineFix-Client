import { Button } from "@nextui-org/react";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../../components/Loader";

const OurServiceSection = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["serviceSection"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/services`
      );
      return res.data;
    },
  });
  console.log(data);

  if (isPending) return <Loader></Loader>;
  if (isError) console.log(error.message);

  return (
    <div>
      <div className="md:w-4/6 my-10">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
          Our popular servicese
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          numquam deserunt perferendis sequi illum similique totam. Earum
          repellat assumenda, voluptas nobis exercitationem inventore ducimus
          neque beatae quas rerum, distinctio cum.
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {
          data.slice(0,6).map(data => <HomeCard key={data._id} data={data}></HomeCard>)
        }
      </div>

      <div className="flex justify-center my-10">
        <Link to={'/services'}>
          <Button className="rounded-none bg-primary dark:bg-secondary text-xl text-white uppercase px-20 py-6 hover:text-black duration-500 hover:scale-110">
            Show All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OurServiceSection;
