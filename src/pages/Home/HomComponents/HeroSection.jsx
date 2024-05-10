import benner from '../../../assets/images/pngwing3.com.png'
import Slider from './Slider';

const HeroSection = () => {
    return (
        <div className="lg:grid grid-cols-2 gap-10 items-center py-7 px-4">
            <div>
                <div className='lg:w-5/6 mx-auto'>
                <h1 className="text-primary dark:text-secondary md:text-7xl text-4xl font-bold uppercase">This is a hero section hearder</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, cupiditate ducimus dignissimos voluptatum cum laudantium sapiente alias expedita, ipsam, illo quis accusamus tenetur similique nobis facere odio libero labore dicta?</p>
                </div>
            </div>
            <div className='relative'>
                <div >
                    <img className='w-full h-full' src={benner} alt="" />
                </div>
                <div className='absolute inset-0 top-1/3'>
                    <Slider></Slider>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;