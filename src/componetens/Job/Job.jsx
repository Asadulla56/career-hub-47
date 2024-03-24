const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
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
          <button className="py-2 px-5 border rounded border-[#7E90FE] font-extrabold mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
