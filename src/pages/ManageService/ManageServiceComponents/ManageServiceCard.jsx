import { HiLocationMarker } from "react-icons/hi";
import img from "../../../assets/images/ey-male-carpenter-using-tape-measure-piece-of-wood-in-wood-processing-plants.jpg";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import ManageServiceForm from "./ManageServiceForm";


const ManageServiceCard = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="flex md:flex-row flex-col-reverse gap-5 border border-primary dark:border-secondary md:p-8 p-3 shadow-lg shadow-secondary ">
      <div className="md:w-2/6">
        <img src={img} alt="" />
      </div>

      <div className="md:w-4/6 space-y-3">
        <h2 className="text-2xl font-bold text-primary dark:text-secondary">
          This is service title{" "}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          consequatur. Iusto, repellendus, eaque dicta reiciendis dignissimos
          veritatis debitis doloribus magnam id adipisci eligendi deserunt
          consequatur earum ratione vel ullam beatae!
        </p>

        <div className="flex justify-between flex-wrap gap-1 items-center">
          <p className="font-medium">Price: 231$</p>
          <p className="font-medium flex items-center gap-2">
            <HiLocationMarker className="text-primary text-xl dark:text-secondary" />{" "}
            Bangladesh Narayangonj
          </p>
        </div>

        <div className="flex justify-between gap-1 flex-wrap">
          <p className="py-3 text-xl font-semibold text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary">
            <Link to={'/serviceDetails'} className="flex items-center justify-center duration-500 hover:scale-110 hover:-rotate-2">
              View Details &nbsp; &nbsp;----
              <FaAngleDoubleRight className="text-2xl mt-[2px]"></FaAngleDoubleRight>{" "}
            </Link>
          </p>
          <div className="flex gap-2 items-center">
                <button><RiDeleteBin6Line  className="text-3xl text-red-500 hover:text-red-700 duration-500 hover:scale-110 hover:-rotate-3"/></button>
                <Button onPress={onOpen} className="bg-inherit"><Link><FaEdit  className="text-3xl text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary duration-500 hover:scale-110 hover:-rotate-3"/></Link></Button>
                
          </div>

          {/* ============ Modal ============ */}
          <Modal size="4xl" backdrop="blur" scrollBehavior="outside" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent  className="shadow-2xl shadow-secondary">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">Service Details</ModalHeader>
              <ModalBody>

                <ManageServiceForm></ManageServiceForm>

              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose} className="rounded-none border duration-400 hover:scale-105 border-red-700 text-base">
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

export default ManageServiceCard;
