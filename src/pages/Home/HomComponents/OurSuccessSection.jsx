import { FaRegCalendarAlt, FaRegThumbsUp, FaRegUser } from "react-icons/fa";
import { MdOutlineCloudDone } from "react-icons/md";
import { motion } from "framer-motion";

const OurSuccessSection = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 ">
      <div className="space-y-5  p-4 text-center duration-500 hover:bg-primary/10">
        <div className="flex justify-center pb-6">
          <motion.div
            animate={{
              y: [20, 50, 20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0,
              delay: 0
            }}
          >
            <FaRegThumbsUp className="text-7xl text-primary dark:text-secondary" />
          </motion.div>
        </div>
        <h3 className="border-b-3 pb-3 border-primary dark:border-secondary inline-block text-5xl font-medium pt-2">
          100%
        </h3>
        <p className="text-xl font-medium">Customer Satisfaction</p>
      </div>
      <div className="space-y-5  p-4 text-center duration-500 hover:bg-primary/10">
        <div className="flex justify-center pb-6">
        <motion.div
            animate={{
              y: [20, 50, 20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0,
              delay: 0.7
            }}
          >
            <FaRegCalendarAlt className="text-7xl text-primary dark:text-secondary" />
          </motion.div>
          
        </div>
        <h3 className="border-b-3 pb-3 border-primary dark:border-secondary inline-block text-5xl font-medium pt-2">
          7
        </h3>
        <p className="text-xl font-medium">Years in the Market</p>
      </div>
      <div className="space-y-5  p-4 text-center duration-500 hover:bg-primary/10">
        <div className="flex justify-center pb-6">
        <motion.div
            animate={{
              y: [20, 50, 20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0,
              delay: 0
            }}
          >
          <FaRegUser className="text-7xl text-primary dark:text-secondary" />
          </motion.div>
        </div>
        <h3 className="border-b-3 pb-3 border-primary dark:border-secondary inline-block text-5xl font-medium pt-2">
          3000+
        </h3>
        <p className="text-xl font-medium">Happy Clients</p>
      </div>
      <div className="space-y-5  p-4 text-center duration-500 hover:bg-primary/10">
        <div className="flex justify-center pb-6">
        <motion.div
            animate={{
              y: [20, 50, 20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0,
              delay: 0.7
            }}
          >
          <MdOutlineCloudDone className="text-7xl text-primary dark:text-secondary" />
          </motion.div>
        </div>
        <h3 className="border-b-3 pb-3 border-primary dark:border-secondary inline-block text-5xl font-medium pt-2">
          3200+
        </h3>
        <p className="text-xl font-medium">Projects Completed</p>
      </div>
    </div>
  );
};

export default OurSuccessSection;
