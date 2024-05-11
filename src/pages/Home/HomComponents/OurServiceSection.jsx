import { Button } from "@nextui-org/react";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";

const OurServiceSection = () => {
  return (
    <div>
      <div className="md:w-4/6 my-10">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
          Our popular servicese
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          numquam deserunt perferendis sequi illum similique totam. Earum
          repellat assumenda, voluptas nobis exercitationem inventore ducimus
          neque beatae quas rerum, distinctio cum.
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <HomeCard></HomeCard>
      </div>

      <div className="flex justify-center my-10">
        <Link>
          <Button className="rounded-none bg-primary dark:bg-secondary text-xl text-white uppercase px-20 py-6 hover:text-black">
            Show All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OurServiceSection;
