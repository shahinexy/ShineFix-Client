import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader";
import axios from "axios";
import { Link } from "react-router-dom";

const Slider = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["serviceSection"],
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
    <div className="md:pl-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={45}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 45,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 45,
          },
        }}

        modules={[Autoplay]}
        className="mySwiper"
      >
        {
          data.slice(0,5).map(data =>  <SwiperSlide key={data._id}>
           <Link to={`/serviceDetails/${data._id}`}>
           <div className="bg-primary/90 dark:bg-secondary/50 shadow-lg shadow-secondary text-white">
            <img
              className="w-full h-52"
              src={data.servicePhoto}
              alt=""
            />
            <div className="p-2">
            <p className="text-xl font-medium">{data.serviceName}</p>
            <p>{data.description.slice(0,80)}...</p>
            </div>
            </div>
           </Link>
          </SwiperSlide>)
        }
       
        {/* <SwiperSlide>
          <img
            className="w-80 h-72 shadow-lg shadow-black border border-secondary"
            src={slid3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-80 h-72 shadow-lg shadow-black border border-secondary"
            src={slid1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-80 h-72 shadow-lg shadow-black border border-secondary"
            src={slid4}
            alt=""
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
