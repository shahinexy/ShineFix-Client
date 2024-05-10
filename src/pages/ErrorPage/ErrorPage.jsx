import { Button } from '@nextui-org/react';
import errorLogo from '../../assets/images/oops-404-error-with-a-broken-robot-animation-flash-message-color-failed-loading-animation-for-broken-link-web-design-animation-ultra-hd-4k-fre.jpg'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='flex h-screen w-full items-center justify-center'>
            <div className='text-center'>
                <img src={errorLogo} alt="" />
                <Link to={'/'}><Button className='text-xl rounded-none bg-primary dark:bg-secondary text-white font-medium px-10 py-7 mt-8'>Back To Home</Button></Link>
            </div>            
        </div>
    );
};

export default ErrorPage;