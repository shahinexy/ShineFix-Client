import axios from "axios";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { PropTypes } from "prop-types";
import { MdOutlineAttachEmail } from "react-icons/md";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Swal from "sweetalert2";

const ServiceToDoCard = ({ data, refetch }) => {
  const {
    _id,
    status,
    serviceName,
    servicePhoto,
    instruction,
    servicePrice,
    currentUserName,
    currentUseremail,
    serviceTakingDate,
  } = data;


  const handlestatus = (id, status) =>{
    console.log(status);
    
    axios.patch(`${import.meta.env.VITE_SERVER_API}/bookedServices/${id}`, {status})
    .then(res => {
      console.log(res.data);
      refetch()
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(err =>console.log(err))
  }

  return (
    <div className="flex md:flex-row-reverse flex-col-reverse gap-5 border border-primary dark:border-secondary md:p-8 p-3 shadow-lg shadow-secondary mb-8">
      <div className="md:w-4/6 space-y-3">
        <h2 className="text-2xl font-bold text-primary dark:text-secondary">
          {serviceName}
        </h2>
        <p>{instruction}</p>

        <div className="flex justify-between flex-wrap gap-1 items-center">
          <p className="font-medium">Price: {servicePrice}$</p>
          <p className="font-medium flex items-center gap-2">
            <FaRegCalendarAlt className="text-primary text-xl dark:text-secondary" />
            {serviceTakingDate}
          </p>
        </div>

        <div className="flex py-3 justify-between gap-1 flex-wrap border-t border-primary dark:border-secondary">
          <div className="flex md:gap-7 gap-3 items-center">
            <p className="flex items-center gap-2">
              <FaRegUser className="text-primary text-lg dark:text-secondary" />
              {currentUserName}
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineAttachEmail className="text-primary text-xl dark:text-secondary" />
              {currentUseremail}
            </p>
          </div>

          <Dropdown className="bg-white dark:bg-[#31363F] shadow-lg shadow-secondary rounded-none">
            <DropdownTrigger>
              <Button  className={`border border-primary dark:border-secondary rounded-none bg-inherit text-base font-medium ${status === 'Pending' && 'text-red-500' } ${status === 'Working' && 'text-orange-500' } ${status === 'Completed' && 'text-green-500' }`}>{status}</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem onClick={() => handlestatus(_id, 'Pending')} >Pending</DropdownItem>
              <DropdownItem onClick={() => handlestatus(_id, 'Working')} >Working</DropdownItem>
              <DropdownItem onClick={() => handlestatus(_id, 'Completed')} >Completed</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="md:w-2/6 flex justify-center">
        <img src={servicePhoto} alt="" />
      </div>
    </div>
  );
};

ServiceToDoCard.propTypes = {
  data: PropTypes.object,
  refetch: PropTypes.func
};

export default ServiceToDoCard;
