import { Button } from "@nextui-org/react";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../../components/Loader";

const OurServiceSection = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["homeServiceSection"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/services`
      );
      return res.data;
    },
  });

  if (isPending) return <Loader></Loader>;
  if (isError) console.log(error.message);

  return (
    <div>
      <div className="md:w-4/6 my-10">
        <h1
          data-aos="zoom-out-right"
          className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4"
        >
          Top Picks: Our Popular Services
        </h1>
        <p
          data-aos="zoom-out-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          Explore our top-rated services tailored to meet your home repair
          needs. From routine maintenance to emergency fixes, our skilled
          technicians deliver exceptional results every time. Discover why these
          services are favorites among our satisfied customers and experience
          the difference with Fix It Right today.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {data.slice(0, 6).map((data) => (
          <HomeCard key={data._id} data={data}></HomeCard>
        ))}
      </div>

      <div className="flex justify-center my-10">
        <Link to={"/services"}>
          <Button className="rounded-none bg-primary dark:bg-secondary text-xl text-white uppercase px-20 py-6 hover:text-black duration-500 hover:scale-110">
            Show All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OurServiceSection;
