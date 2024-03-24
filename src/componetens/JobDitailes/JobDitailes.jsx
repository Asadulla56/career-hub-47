import { useLoaderData, useParams } from "react-router-dom";

const JobDitailes = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(id, job);
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4 mt-10">
        <div className="border md:col-span-3 p-5 rounded-lg">
          <p className="mb-5">
            <span className="font-bold">Job_description</span>:{" "}
            {job.job_description}
          </p>
          <p className="mb-5">
            <span className="font-bold">Job_responsibility </span>:{" "}
            {job.job_responsibility}
          </p>
          <h2 className="text-xl font-bold mb-5"> Educational_requirements</h2>
          <p>{job.educational_requirements}</p>
          <h2 className="text-xl font-bold mt-5">Experiences</h2>
          <p>{job.experiences}</p>
        </div>
        <div className="border bg-[#c4caf5] p-5 rounded-lg">
          <h2 className="font-extrabold text-xl mb-2">Job Ditails</h2>
          <hr />
          <div className="py-5">
            <h2>
              <span className="font-bold mb-2">Selary</span> : {job.salary} (per
              monthy)
            </h2>
            <h2>
              {" "}
              <span className="font-bold">Job Title</span> : {job.job_title}
            </h2>
          </div>
          <h1 className="font-extrabold text-[#1A1919] mb-5">
            Contact Information
          </h1>
          <hr />
          <div className="mt-5">
          <h2> <span className="font-bold">Phone</span> : {job.contact_information.phone}</h2>
          <h2> <span className="font-bold">Email</span> : {job.contact_information.email}</h2>
          <h2>
            <span className="font-bold">Address</span> : {job.contact_information.address}
          </h2>
          </div>
          <button className="w-full mt-5 btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDitailes;
