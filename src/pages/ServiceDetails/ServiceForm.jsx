import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const ServiceForm = () => {
  const { user } = useContext(authContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log({
      ...data,
      providerEmail: user.email,
      providerPhoto: user.photoURL,
      providerName: user.displayName,
    });
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
              placeholder="url"
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-1">Service Name</p>
            <input
              {...register("serviceName")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="text"
              placeholder="name"
            />
          </div>
        </div>

        <div className="md:flex gap-3">
          <div className="w-full">
            <p className="font-semibold mb-1">Photo URL</p>
            <input
              {...register("photo")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="number"
              placeholder="url"
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-1">Provider email</p>
            <input
              {...register("providerEmail")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="text"
              placeholder="Provider email"
            />
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="w-full">
            <p className="font-semibold mb-1">Provider Name</p>
            <input
              {...register("providerName")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="number"
              placeholder="Provider Name"
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-1">Current User email </p>
            <input
              {...register("currentUseremail ")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="text"
              placeholder="Current User email "
            />
          </div>
        </div>

        <div className="md:flex gap-3">
          <div className="w-full">
            <p className="font-semibold mb-1">Current User Name</p>
            <input
              {...register("currentUserName")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="number"
              placeholder="Current User Name"
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-1">Service price</p>
            <input
              {...register("servicePrice")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="text"
              placeholder="price"
            />
          </div>
        </div>

        <div className="w-full">
          <p className="font-semibold mb-1">Service Taking Date</p>
          <input
            {...register("serviceTakingDate")}
            className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
            type="text"
            placeholder="Service Taking Date"
          />
        </div>

        <div className="w-full">
          <p className="font-semibold mb-1">Special instruction</p>
          <textarea
            {...register("description")}
            className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
            placeholder="description"
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

export default ServiceForm;
