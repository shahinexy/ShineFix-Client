import { Link } from "react-router-dom";
import icon1 from "../../../assets/images/icon-01-101x100.png";
import icon2 from "../../../assets/images/icon-02-101x100.png";
import icon3 from "../../../assets/images/icon-03-101x100.png";
import icon4 from "../../../assets/images/icon-04-101x100.png";
import icon5 from "../../../assets/images/icon-05-101x100.png";
import icon6 from "../../../assets/images/icon-06-101x100.png";

const OurServicesSection = () => {
  return (
    <div>
      <div className="md:w-4/6 my-10">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
          Whart we offer for you
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          numquam deserunt perferendis sequi illum similique totam. Earum
          repellat assumenda, voluptas nobis exercitationem inventore ducimus
          neque beatae quas rerum, distinctio cum.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 gap-6">
        <Link to={"/services"}>
          <div className="space-y-3  p-4 shadow-lg shadow-secondary text-center duration-500 hover:bg-primary/10">
            <img className="mx-auto" src={icon1} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Painting
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              culpa pariatur, doloribus porro voluptatibus dolores?
            </p>
          </div>
        </Link>
        <Link to={"/services"}>
          <div className="space-y-3  p-4 shadow-lg shadow-secondary text-center duration-500 hover:bg-primary/10">
            <img className="mx-auto" src={icon2} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Plumbing
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              culpa pariatur, doloribus porro voluptatibus dolores?
            </p>
          </div>
        </Link>
        <Link to={"/services"}>
          <div className="space-y-3  p-4 shadow-lg shadow-secondary text-center duration-500 hover:bg-primary/10">
            <img className="mx-auto" src={icon3} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Cleaning
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              culpa pariatur, doloribus porro voluptatibus dolores?
            </p>
          </div>
        </Link>
        <Link to={"/services"}>
          <div className="space-y-3  p-4 shadow-lg shadow-secondary text-center duration-500 hover:bg-primary/10">
            <img className="mx-auto" src={icon4} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Electricity
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              culpa pariatur, doloribus porro voluptatibus dolores?
            </p>
          </div>
        </Link>
        <Link to={"/services"}>
          <div className="space-y-3  p-4 shadow-lg shadow-secondary text-center duration-500 hover:bg-primary/10">
            <img className="mx-auto" src={icon5} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Roofing
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              culpa pariatur, doloribus porro voluptatibus dolores?
            </p>
          </div>
        </Link>
        <Link to={"/services"}>
          <div className="space-y-3  p-4 shadow-lg shadow-secondary text-center duration-500 hover:bg-primary/10">
            <img className="mx-auto" src={icon6} alt="" />
            <h3 className="text-primary dark:text-secondary text-2xl font-medium pt-2">
              Renovatin
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              culpa pariatur, doloribus porro voluptatibus dolores?
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurServicesSection;
