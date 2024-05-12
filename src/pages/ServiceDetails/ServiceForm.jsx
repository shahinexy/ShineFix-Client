import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { PropTypes } from "prop-types";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceForm = ({ data }) => {
  const { user } = useContext(authContext);
  console.log(user.email);
  const {
    _id,
    serviceName,
    servicePhoto,
    servicePrice,
    providerName,
    providerEmail,
    description,
    serviceArea, 
    providerPhoto
  } = data;
  // console.log(data);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const datas = {...data, description, serviceArea, providerPhoto, status: 'pending'}

    axios
      .post(`${import.meta.env.VITE_SERVER_API}/bookedServices`, datas)
      .then((res) => {
        // console.log(res.data);
        if (res.data.acknowledged) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Service Booked Successfully ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="md:flex gap-3">
          <div className="w-full">
            <p className="font-semibold mb-1">Service ID</p>
            <input
              {...register("ServiceId")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="Service Id"
              value={_id}
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-1">Service Name</p>
            <input
              {...register("serviceName")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              value={serviceName}
            />
          </div>
        </div>

        <div className="md:flex gap-3">
          <div className="w-full">
            <p className="font-semibold mb-1">Photo URL</p>
            <input
              {...register("servicePhoto")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="text"
              value={servicePhoto}
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-1">Provider email</p>
            <input
              {...register("providerEmail")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              value={providerEmail}
            />
          </div>
        </div>

        <div className="md:flex gap-3">
          <div className="w-full">
            <p className="font-semibold mb-1">Provider Name</p>
            <input
              {...register("providerName")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              value={providerName}
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-1">Current User email </p>
            <input
              {...register("currentUseremail")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              value={user.email}
            />
          </div>
        </div>

        <div className="md:flex gap-3">
          <div className="w-full">
            <p className="font-semibold mb-1">Current User Name</p>
            <input
              {...register("currentUserName")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              value={user.displayName}
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-1">Service price</p>
            <input
              {...register("servicePrice")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              value={servicePrice}
            />
          </div>
        </div>

        <div className="w-full">
          <p className="font-semibold mb-1">
            Service Taking Date <span className="text-red-500">*</span>
          </p>
          <input
            {...register("serviceTakingDate")}
            className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
            type="date"
            required
          />
        </div>

        <div className="w-full">
          <p className="font-semibold mb-1">
            Special instruction <span className="text-red-500">*</span>
          </p>
          <textarea
            {...register("instruction")}
            className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
            placeholder="text here"
            required
          ></textarea>
        </div>
        <div>
          <button className="btn w-full text-xl text-forth dark:text-white font-semibold hover:bg-primary rounded-none border-2 border-forth border-primary dark:border-secondary bg-inherit mt-6">
            Purchase Now
          </button>
        </div>
      </form>
    </div>
  );
};

ServiceForm.propTypes = {
  data: PropTypes.object,
};

export default ServiceForm;
