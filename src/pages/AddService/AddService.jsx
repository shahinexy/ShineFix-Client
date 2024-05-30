import { useContext } from "react";
import img1 from "../../assets/images/icon-01-101x100.png";
import img2 from "../../assets/images/icon-02-101x100.png";
import img3 from "../../assets/images/icon-05-101x100.png";
import img4 from "../../assets/images/icon-06-101x100.png";
import { useForm } from "react-hook-form";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = useContext(authContext);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {

    const serviseData = {
      ...data,
      providerEmail: user.email,
      providerPhoto: user.photoURL,
      providerName: user.displayName,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_API}/services`, serviseData)
      .then((res) => {
        console.log(res.data)
        if(res.data.acknowledged){
          reset()
          Swal.fire({
            icon: "success",
            title: "Service Added Successfully ",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Helmet>
        <title>Add Services</title>
      </Helmet>
      <div className="md:w-4/6 sm:my-20 my-12">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
        Add Your Services Today
        </h1>
        <p>
        Join our platform and showcase your expertise to a wider audience. Increase your visibility and connect with clients seeking your specific services. With easy registration and seamless integration, expanding your service offerings has never been simpler. Join ShineFix and grow your business today.
        </p>
      </div>
      <div className="md:grid grid-cols-2 gap-5 space-y-4 mb-10 md:mb-20 mt-5">
        {/* ======= form section ==========  */}
        <div>
          <div className=" p-8 bg-white/60 dark:bg-white/40 shadow-lg shadow-secondary dark:shadow-white border border-white  mx-auto ">
            <h1 className="text-3xl text-primary dark:text-secondary font-bold text-center mb-8">
              Add Your service Now
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Service Photo</p>
                <input
                  {...register("servicePhoto")}
                  className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
                  type="text"
                  placeholder="url"
                  required
                />
              </div>
              <div>
                <p className="font-semibold mb-1">Service Name</p>
                <input
                  {...register("serviceName")}
                  className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
                  type="text"
                  placeholder="name"
                  required
                />
              </div>
              <div className="flex md:gap-5 gap-3 flex-wrap">
                <div className="w-full">
                  <p className="font-semibold mb-1">Service Price</p>
                  <input
                    {...register("servicePrice")}
                    className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
                    type="number"
                    placeholder="price"
                    required
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold mb-1">Service Area</p>
                  <input
                    {...register("serviceArea")}
                    className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
                    type="text"
                    placeholder="area"
                    required
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold mb-1">Description</p>
                  <textarea
                    {...register("description")}
                    className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
                    placeholder="description"
                    required
                  ></textarea>
                </div>
              </div>
              <div>
                <button className="btn w-full text-xl text-forth dark:text-white font-semibold hover:bg-primary rounded-none border-2 border-forth border-primary dark:border-secondary bg-inherit mt-6">
                  Add Now
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ===== card section ======  */}
        <div className="grid md:grid-cols-2 gap-5 p-10">
          <div className="border border-primary dark:border-secondary flex items-center justify-center shadow-lg shadow-secondary/60 p-4">
            <div className="">
              <img src={img1} alt="" />
              <p className="text-2xl font-semibold  my-4">Painting</p>
            </div>
          </div>
          <div className="border border-primary dark:border-secondary flex items-center justify-center shadow-lg shadow-secondary/60  p-4">
            <div className="">
              <img src={img2} alt="" />
              <p className="text-2xl font-semibold  my-4">Plumbing</p>
            </div>
          </div>
          <div className="border border-primary dark:border-secondary flex items-center justify-center shadow-lg shadow-secondary/60 p-4">
            <div className="">
              <img src={img3} alt="" />
              <p className="text-2xl font-semibold  my-4">Roofing</p>
            </div>
          </div>
          <div className="border border-primary dark:border-secondary flex items-center justify-center shadow-lg shadow-secondary/60 p-4">
            <div className="">
              <img src={img4} alt="" />
              <p className="text-2xl font-semibold  my-4">Renovation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
