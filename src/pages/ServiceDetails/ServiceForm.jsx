import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const ServiceForm = () => {
  const { user } = useContext(authContext);

  const { register, handleSubmit } = useForm();
  console.log(user);
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
          <p className="font-semibold mb-1">Service Photo</p>
          <input
            {...register("servicePhoto")}
            className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
            type="text"
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
            <p className="font-semibold mb-1">Service Price</p>
            <input
              {...register("servicePrice")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="number"
              placeholder="price"
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-1">Service Area</p>
            <input
              {...register("serviceArea")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="text"
              placeholder="area"
            />
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="w-full">
            <p className="font-semibold mb-1">Service Price</p>
            <input
              {...register("servicePrice")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="number"
              placeholder="price"
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-1">Service Area</p>
            <input
              {...register("serviceArea")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="text"
              placeholder="area"
            />
          </div>
        </div>
        
        <div className="md:flex gap-3">
          <div className="w-full">
            <p className="font-semibold mb-1">Service Price</p>
            <input
              {...register("servicePrice")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="number"
              placeholder="price"
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-1">Service Area</p>
            <input
              {...register("serviceArea")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="text"
              placeholder="area"
            />
          </div>
        </div>
        
        <div className="w-full">
            <p className="font-semibold mb-1">Service Area</p>
            <input
              {...register("serviceArea")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              type="text"
              placeholder="area"
            />
          </div>
        <div className="w-full">
            <p className="font-semibold mb-1">Description</p>
            <textarea
              {...register("description")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              placeholder="description"
            ></textarea>
          </div>
      </form>
    </div>
  );
};

export default ServiceForm;
