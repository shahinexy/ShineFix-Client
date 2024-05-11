import { Helmet } from "react-helmet";
import registerImg from "../../assets/images/undraw_access_account_re_8spm.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
const Register = () => {
  const { createUser, updateUser, refetch } = useContext(authContext);
  const [showHide, setShowHide] = useState(true);
  const [passType, setPassType] = useState(true);

  const navegate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(data.pass)) {
      return toast.error(
        "Password requires 1 lowercase, 1 uppercase, and min 6 characters."
      );
    }

    createUser(data.email, data.pass)
      .then((res) => {
        toast.success("Register Successfull");
        navegate("/");
        if (res) {
          updateUser(data.name, data.photo)
            .then(()=> refetch() )
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message.split("/")[1].replaceAll(")", ""));
      });
  };

  //handle show hide icon
  const handleShowHide = () => {
    setShowHide(!showHide);
    setPassType(!passType);
  };

  return (
    <div className="max-w-7xl mx-auto lg:grid grid-cols-2 md:py-10 py-6">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div>
        <img src={registerImg} alt="" />
      </div>

      <div className="md:w-2/3 text-forth p-8 bg-white/60 dark:bg-white/40 shadow-lg shadow-secondary dark:shadow-white border border-white  mx-auto">
        <h1 className="text-3xl text-primary dark:text-secondary font-bold text-center mb-8">Register Now</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <p className="font-semibold mb-1">Name</p>
            <input
              {...register("name")}
              className="w-full bg-third p-2 border-l-4  border border-primary dark:border-secondary"
              type="text"
              placeholder="name"
            />
          </div>
          <div>
            <p className="font-semibold mb-1">Photo URL</p>
            <input
              {...register("photo")}
              className="w-full bg-third p-2 border-l-4  border border-primary dark:border-secondary"
              type="text"
              placeholder="url"
            />
          </div>
          <div>
            <p className="font-semibold mb-1">Email</p>
            <input
              {...register("email")}
              className="w-full bg-third p-2 border-l-4  border border-primary dark:border-secondary"
              type="email"
              placeholder="email"
              required
            />
          </div>
          <div className="relative">
            <p className="font-semibold mb-1">Password</p>
            <input
              {...register("pass")}
              className="w-full bg-third p-2 border-l-4  border border-primary dark:border-secondary"
              type={passType ? "password" : "text"}
              placeholder="password"
              required
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
              Register
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="font-bold underline text-primary dark:text-secondary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
