import { useForm } from "react-hook-form";

const ManageServiceForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-5">
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
        <div className="flex gap-5"> 
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
        <div className="flex md:gap-5 gap-3 flex-wrap">
          <div className="w-full">
            <p className="font-semibold mb-1">Description</p>
            <textarea
              {...register("description")}
              className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
              placeholder="description"
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
  );
};

export default ManageServiceForm;
