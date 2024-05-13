import { useForm } from "react-hook-form";
import { PropTypes } from 'prop-types';
import axios from "axios";
import Swal from "sweetalert2";

const ManageServiceForm = ({data, refetch}) => {
  const { 
    _id,
    serviceName,
    servicePhoto,
    description,
    servicePrice,
    serviceArea
  } = data;


  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.patch(`${import.meta.env.VITE_SERVER_API}/services/id/${_id}`, data)
    .then(res => {
      console.log(res);
      refetch()
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-5">
        <div className="w-full">
          <p className="font-semibold mb-1">Service Photo URL</p>
          <input
            {...register("servicePhoto")}
            className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
            type="text"
            placeholder="url"
            defaultValue={servicePhoto}
              required
          />
        </div>
        <div className="w-full">
          <p className="font-semibold mb-1">Service Name</p>
          <input
            {...register("serviceName")}
            className="w-full bg-third p-2 border-l-4 border border-primary dark:border-secondary"
            type="text"
            placeholder="name"
            defaultValue={serviceName}
              required
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
              defaultValue={servicePrice}
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
              defaultValue={serviceArea}
              required
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
              defaultValue={description}
              required
            ></textarea>
          </div>
        </div>
        <div>
          <button className="btn w-full text-xl text-forth dark:text-white font-semibold hover:bg-primary rounded-none border-2 border-forth border-primary dark:border-secondary bg-inherit mt-6">
            Update Now
          </button>
        </div>
      </form>
    </div>
  );
};

ManageServiceForm.propTypes = {
  data: PropTypes.object,
  refetch: PropTypes.func,
};


export default ManageServiceForm;
