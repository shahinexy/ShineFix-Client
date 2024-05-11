import { Helmet } from "react-helmet";
import ManageServiceCard from "./ManageServiceComponents/ManageServiceCard";

const ManageService = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:mt-20 my-10">
      <Helmet>
        <title>Manage Service</title>
      </Helmet>
      <div className="md:w-4/6 my-10">
        <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary uppercase mb-4">
          Thsi is a title for Manage services
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          numquam deserunt perferendis sequi illum similique totam. Earum
          repellat assumenda, voluptas nobis exercitationem inventore ducimus
          neque beatae quas rerum, distinctio cum.
        </p>
      </div>

      <div className="gird grid-cols-1 max-w-5xl mx-auto gap-8">
        <ManageServiceCard></ManageServiceCard>
      </div>
    </div>
  );
};

export default ManageService;
