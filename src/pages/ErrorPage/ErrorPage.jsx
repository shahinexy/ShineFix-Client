import { Button } from "@nextui-org/react";
import errorLogo from "../../assets/images/404-landing-page-free-vector.jpg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center space-y-5">
        <img src={errorLogo} alt="" />
        <h2 className="text-primary text-4xl font-bold">
          Oops!! Page Not Found
        </h2>
        <Link to={"/"}>
          <Button className="text-xl rounded-none bg-primary dark:bg-secondary text-white font-medium px-10 py-7 mt-7">
            Back To Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
