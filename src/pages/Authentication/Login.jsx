import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import loginImg from "../../assets/images/undraw_my_password_re_ydq7.svg";

const Login = () => {
  const [showHide, setShowHide] = useState(true);
  const [passType, setPassType] = useState(true);
  const { loginUser, googleLogin, githubLogin } = useContext(authContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.pass)
      .then((res) => {
        if (res) {
          toast.success("Login Successfull");
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message.split("/")[1].replaceAll(")", ""));
      });
  };

  // handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        if (res) {
          toast.success("Login Successfull");
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle github login
  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => {
        if (res) {
          toast.success("Login Successfull");
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //handle show hide icon
  const handleShowHide = () => {
    setShowHide(!showHide);
    setPassType(!passType);
  };
  return (
    <div className="max-w-7xl mx-auto lg:grid grid-cols-2 md:py-28 py-6">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div>
        <img src={loginImg} alt="" />
      </div>

      <div className=" md:w-2/3 text-forth p-8 bg-white/60 dark:bg-white/40 shadow-lg shadow-secondary dark:shadow-white border border-white  mx-auto ">
        <h1 className="text-3xl text-primary dark:text-secondary font-bold text-center mb-8">
          Login Now
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <p className="font-semibold mb-1">Email</p>
            <input
              {...register("email")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="relative">
            <p className="font-semibold mb-1">Password</p>
            <input
              {...register("pass")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type={passType ? "password" : "text"}
              placeholder="password"
            />
            {/* pass show and hide  */}
            <span
              onClick={handleShowHide}
              className="absolute bottom-0 right-0 text-primary cursor-pointer p-3"
            >
              {showHide ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <div>
            <button className="btn w-full text-xl text-forth dark:text-white font-semibold hover:bg-primary rounded-none border-2 border-forth border-primary dark:border-secondary bg-inherit mt-6">
              Login
            </button>
          </div>
          <p>
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="font-bold underline text-primary dark:text-secondary"
            >
              Register
            </Link>
          </p>
        </form>
        <div className="flex gap-3">
          <button
            onClick={handleGoogleLogin}
            className="btn flex-1 text-xl text-forth font-semibold hover:bg-primary rounded-none border-2 border-primary hover:border-forth bg-inherit mt-6"
          >
            <FaGoogle></FaGoogle> Login
          </button>
          <button
            onClick={handleGithubLogin}
            className="btn flex-1 text-xl text-forth font-semibold hover:bg-primary rounded-none border-2 border-primary hover:border-forth bg-inherit mt-6"
          >
            <FaGithub></FaGithub> Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
