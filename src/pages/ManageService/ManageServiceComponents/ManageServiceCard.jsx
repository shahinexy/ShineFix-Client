import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ManageServiceForm from "./ManageServiceForm";
import { PropTypes } from "prop-types";
import axios from "axios";
import Swal from "sweetalert2";

const ManageServiceCard = ({ data, refetch }) => {
  const { _id, serviceName, servicePhoto, description, serviceArea, servicePrice } = data;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
        .delete(`${import.meta.env.VITE_SERVER_API}/services/id/${id}`)
        .then((res) => {
          console.log(res)
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        })
        .catch((err) => console.log(err));


      }
    });


  };

  return (
    <div className="flex md:flex-row flex-col gap-5 border border-primary dark:border-secondary md:p-8 p-3 shadow-lg shadow-secondary mb-8">
      <div className="md:w-2/6">
        <img className="w-full" src={servicePhoto} alt="" />
      </div>

      <div className="md:w-4/6 space-y-3">
        <h2 className="text-2xl font-bold text-primary dark:text-secondary">
          {serviceName}
        </h2>
        <p>{description.slice(0, 100)}...</p>

        <div className="flex justify-between flex-wrap gap-1 items-center">
          <p className="font-medium">Price: {servicePrice}$</p>
          <p className="font-medium flex items-center gap-2">
            <HiLocationMarker className="text-primary text-xl dark:text-secondary" />
            {serviceArea}
          </p>
        </div>

        <div className="flex justify-between gap-1 flex-wrap">
          <p className="py-3 text-xl font-semibold text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary">
            <Link
              to={`/serviceDetails/${_id}`}
              className="flex items-center justify-center duration-500 hover:scale-110 hover:-rotate-2"
            >
              View Details &nbsp; &nbsp;----
              <FaAngleDoubleRight className="text-2xl mt-[2px]"></FaAngleDoubleRight>{" "}
            </Link>
          </p>
          <div className="flex gap-2 items-center">
            <button onClick={() => handleDelete(_id)}>
              <RiDeleteBin6Line className="text-3xl text-red-500 hover:text-red-700 duration-500 hover:scale-110 hover:-rotate-3" />
            </button>
            <Button onPress={onOpen} className="bg-inherit">
              <Link>
                <FaEdit className="text-3xl text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary duration-500 hover:scale-110 hover:-rotate-3" />
              </Link>
            </Button>
          </div>

          {/* ============ Modal ============ */}
          <Modal
            size="4xl"
            backdrop="blur"
            scrollBehavior="outside"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
          >
            <ModalContent className="shadow-2xl shadow-secondary">
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-xl">
                    Service Details
                  </ModalHeader>
                  <ModalBody>
                    <ManageServiceForm data={data} refetch={refetch}></ManageServiceForm>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      variant="light"
                      onPress={onClose}
                      className="rounded-none border duration-400 hover:scale-105 border-red-700 text-base"
                    >
                      Cancle
                    </Button>
                    {/* <Button onPress={onClose} className="rounded-none border duration-400 hover:scale-105 border-primary bg-primary text-base">
                Purchase
                </Button> */}
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
};

ManageServiceCard.propTypes = {
  data: PropTypes.object,
  refetch: PropTypes.function,
};

export default ManageServiceCard;
