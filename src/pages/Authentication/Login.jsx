import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const Login = () => {

    const [showHide, setShowHide] = useState(true);
    const [passType, setPassType] = useState(true);
    const { loginUser, googleLogin, githubLogin } = useContext(authContext);
  
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
  
    const {
      register,
      handleSubmit,
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
  
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
    }
    return (
        <div className="lg:grid grid-cols-2 gap-8">
            <div>

            </div>

            <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="xl:w-1/3 md:w-2/3 text-forth p-8 bg-secondary mx-auto md:my-20 my-6">
        <h1 className="text-3xl font-bold text-center mb-8">Login Now</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <p className="font-semibold mb-1">Email</p>
            <input
              {...register("email")}
              className="w-full bg-third p-2 border-l-4 border-forth"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="relative">
            <p className="font-semibold mb-1">Password</p>
            <input
              {...register("pass")}
              className="w-full bg-third p-2 border-l-4 border-forth"
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
            <button className="btn w-full text-xl text-forth font-semibold hover:bg-primary rounded-none border-2 border-forth hover:border-primary bg-inherit mt-6">
              Login
            </button>
          </div>
          <p>
            Don't have an account?{" "}
            <Link to={"/register"} className="font-bold underline">
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
        </div>
    );
};

export default Login;