import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl ">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="py-2 px-5 border rounded border-[#7E90FE] font-extrabold mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="py-2 px-5 mt-2 border rounded border-[#7E90FE] font-extrabold mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex mt-4 gap-2">
          <h2 className="flex items-center ">
            <FaLocationDot className="mr-2 text-2xl"></FaLocationDot>
            {location}{" "}
          </h2>
          <h2 className="flex items-center">
            {" "}
            <HiOutlineCurrencyDollar className="mr-2 text-2xl"></HiOutlineCurrencyDollar>{" "}
            salary: {salary}{" "}
          </h2>
        </div>
        <div className="card-actions mx-3">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary font-bold">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
