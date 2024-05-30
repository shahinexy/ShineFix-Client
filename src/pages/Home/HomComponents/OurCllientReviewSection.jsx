import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

import icon1 from '../../../assets/images/ey-male-carpenter-using-tape-measure-piece-of-wood-in-wood-processing-plants.jpg'
import icon2 from '../../../assets/images/plumbing-professional-doing-his-job.jpg'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const OurCllientReviewSection = () => {
  return (
    <div>
      <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-10">
        What our client say...
      </h1>

      <div className='my-20'>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><div>
          <div className="md:w-1/2 mx-auto space-y-3  p-4 shadow-lg shadow-secondary duration-500 hover:bg-primary/10">
            <FaQuoteLeft className='text-4xl text-primary dark:text-secondary' />
            <div className='px-10'>
            <img className='w-16 h-16 rounded-full' src={icon1} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Smilay Sek
            </h3>
            <p>
            Fix It Right exceeded all my expectations! From start to finish, their team was professional, courteous, and efficient. They transformed my outdated space into a modern oasis with their expert renovation services. The attention to detail and quality craftsmanship truly set them apart. I couldn't be happier with the results. Thank you, Fix It Right, for making my renovation dreams a reality!
            </p>
            </div>
            <div className='flex justify-end'>
            <FaQuoteRight className='text-4xl text-primary dark:text-secondary' />
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><div>
          <div className="md:w-1/2 mx-auto space-y-3  p-4 shadow-lg shadow-secondary duration-500 hover:bg-primary/10">
            <FaQuoteLeft className='text-4xl text-primary dark:text-secondary' />
            <div className='px-10'>
            <img className='w-16 h-16 rounded-full' src={icon2} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Jhone Doe
            </h3>
            <p>
            I can't recommend Fix It Right enough! Their dedication to excellence is unparalleled. From the initial consultation to the final touches, they were with me every step of the way. Their renovation team not only met but exceeded my vision for my home. The results speak for themselves – impeccable craftsmanship and attention to detail. If you're looking for a renovation partner you can trust
            </p>
            </div>
            <div className='flex justify-end'>
            <FaQuoteRight className='text-4xl text-primary dark:text-secondary' />
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><div>
          <div className="md:w-1/2 mx-auto space-y-3  p-4 shadow-lg shadow-secondary duration-500 hover:bg-primary/10">
            <FaQuoteLeft className='text-4xl text-primary dark:text-secondary' />
            <div className='px-10'>
            <img className='w-16 h-16 rounded-full' src={icon1} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Smilay Sek
            </h3>
            <p>
            Fix It Right exceeded all my expectations! From start to finish, their team was professional, courteous, and efficient. They transformed my outdated space into a modern oasis with their expert renovation services. The attention to detail and quality craftsmanship truly set them apart. I couldn't be happier with the results. Thank you, Fix It Right, for making my renovation dreams a reality!
            </p>
            </div>
            <div className='flex justify-end'>
            <FaQuoteRight className='text-4xl text-primary dark:text-secondary' />
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><div>
          <div className="md:w-1/2 mx-auto space-y-3  p-4 shadow-lg shadow-secondary duration-500 hover:bg-primary/10">
            <FaQuoteLeft className='text-4xl text-primary dark:text-secondary' />
            <div className='px-10'>
            <img className='w-16 h-16 rounded-full' src={icon2} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Jhone Doe
            </h3>
            <p>
            I can't recommend Fix It Right enough! Their dedication to excellence is unparalleled. From the initial consultation to the final touches, they were with me every step of the way. Their renovation team not only met but exceeded my vision for my home. The results speak for themselves – impeccable craftsmanship and attention to detail. If you're looking for a renovation partner you can trust
            </p>
            </div>
            <div className='flex justify-end'>
            <FaQuoteRight className='text-4xl text-primary dark:text-secondary' />
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default OurCllientReviewSection;
