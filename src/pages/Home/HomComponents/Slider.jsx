import slid1 from '../../../assets/images/1690797244757.jpg'
import slid2 from '../../../assets/images/ey-male-carpenter-using-tape-measure-piece-of-wood-in-wood-processing-plants.jpg'
import slid3 from '../../../assets/images/istockphoto-1412399528-612x612.jpg'
import slid4 from '../../../assets/images/plumbing-professional-doing-his-job.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
                  <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-80 h-72 shadow-lg shadow-black border border-secondary' src={slid2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-80 h-72 shadow-lg shadow-black border border-secondary' src={slid3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-80 h-72 shadow-lg shadow-black border border-secondary' src={slid1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-80 h-72 shadow-lg shadow-black border border-secondary' src={slid4} alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;