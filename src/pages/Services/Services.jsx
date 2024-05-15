import { Helmet } from "react-helmet";
import ServiceCard from "./ServiceComponents/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../components/Loader";
import { FaAngleDoubleRight, FaAngleDown, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiTireIronCross } from "react-icons/gi";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const Services = () => {
  const [isVisible, setIsVisisble] = useState(false);
  const [search, setSearch] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [asc, setAsc] = useState("non");

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["serviceSection", asc],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/services?sort=${asc}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    const searchData = data;
    setSearch(searchData);
  }, [data]);

  console.log(asc);
  console.log(searchFilter.toLowerCase());

  if (isPending) return <Loader></Loader>;
  if (isError) console.log(error.message);

  return (
    <div className="max-w-7xl mx-auto px-4 md:mt-20 my-10">
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="md:w-4/6 my-10">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
          Your One-Stop Solution for Home Excellence
        </h1>
        <p>
          Discover a comprehensive range of expert services tailored to elevate
          your home. From renovations to repairs, plumbing to painting, trust
          our skilled team to deliver exceptional results with professionalism
          and care. Experience the convenience of finding all your home
          improvement needs under one roof with ShineFix.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto flex justify-between flex-wrap-reverse gap-3 md:my-10 my-5">
        <div>
          <Dropdown className="bg-white dark:bg-[#31363F] shadow-lg shadow-secondary rounded-none">
            <DropdownTrigger>
              <Button
                className={`bg-primary dark:bg-secondary border border-primary dark:border-secondary rounded-none text-lg text-white`}
              >
                Sort by price <FaAngleDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem onClick={() => setAsc("asc")}>
                Low to high
              </DropdownItem>
              <DropdownItem onClick={() => setAsc("dsc")}>
                High to low
              </DropdownItem>
              <DropdownItem onClick={() => setAsc("non")}>Default</DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
                      to={`/serviceDetails/${data._id}`}
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

      <div className=" max-w-5xl mx-auto">
        {data.map((data) => (
          <ServiceCard key={data._id} data={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
