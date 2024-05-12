import { Link, useLoaderData } from "react-router-dom";
import img from "../../assets/images/ey-male-carpenter-using-tape-measure-piece-of-wood-in-wood-processing-plants.jpg";
import { Helmet } from "react-helmet";
import { HiLocationMarker } from "react-icons/hi";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import ServiceForm from "./ServiceForm";

const ServiceDetails = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const data = useLoaderData()

    const {
      serviceName,
      servicePhoto,
      description,
      servicePrice,
      providerPhoto,
      providerName,
      serviceArea,
      providerEmail,
    } = data;
console.log(data);
  return (
    <div className="my-10 max-w-7xl mx-auto p-4">
      <Helmet>
        <title>Service Details </title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-full h-56 bg-center bg-cover mb-5"
      >
        <div className="flex w-full h-full bg-primary/40 justify-center items-center">
          <h1 className="text-3xl font-medium text-white">
            SERVICE DETAILS /{" "}
            <Link to={"/"} className="text-secondary underline">
              HOME
            </Link>
          </h1>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col-reverse gap-8 mt-10 items-center">
        <div className="md:w-6/12 space-y-3">
          <h2 className="shadow-md shadow-secondary text-3xl font-bold p-3">
            {serviceName}
          </h2>
          <p>{description}          </p>

          <div className="flex justify-between flex-wrap-reverse gap-1 items-center pb-3">
            <div className="flex gap-4 items-center">
              <img className="w-14 h-14 rounded-full" src={providerPhoto} alt="" />
              <p className="text-lg font-bold">{providerName}</p>
            </div>
            <div>
              <p className="shadow-md shadow-secondary px-3 py-1 font-medium">
                Price: {servicePrice}$
              </p>
            </div>
          </div>
          <h2 className="shadow-md shadow-secondary text-3xl font-bold p-3">
          Provider Information:
          </h2>
          <div className="flex gap-5">
          <img className="w-44 h-32" src={providerPhoto} alt="" />
          <div className="font-medium">
            <p>Name: {providerName}</p>
            <p>Email: {providerEmail}</p>
            <p className="flex items-center gap-2 mt-2">
            <HiLocationMarker className="text-primary dark:text-secondary" />{" "}
             {serviceArea}
            </p>
          </div>
          </div>
        </div>
        <div className="md:w-6/12">
          <img className="shadow-2xl shadow-secondary w-full" src={servicePhoto} alt="" />
        </div>
      </div>

        <div className="flex justify-center md:my-10 my-5">
            <Button onPress={onOpen} className="rounded-none bg-primary dark:bg-secondary text-xl text-white uppercase px-20 py-6 hover:text-black duration-500 hover:scale-110">Book Now</Button>
        </div>

        {/* ======= modal =========  */}

        <Modal size="4xl" backdrop="blur" scrollBehavior="outside" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="shadow-2xl shadow-secondary">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">Service Details</ModalHeader>
              <ModalBody>

                <ServiceForm data={data}></ServiceForm>

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
  );
};

export default ServiceDetails;
