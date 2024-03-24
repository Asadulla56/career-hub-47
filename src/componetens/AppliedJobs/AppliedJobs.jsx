import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../../Utility/loaclStorge";
import JobCard from "../JobCard/JobCard";

// import JobCard from "../JobCard/JobCard";
const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [dispaljobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storeJobIds = getJobApplication();
    if (jobs.length > 0) {
      const jobApplied = [];
      for (const id of storeJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
    }
  }, [jobs]);

  return (
    <div>
      {/* <h2>My first jobs :{appliedJobs.length}</h2> */}
      <details className="dropdown">
        <summary className="m-1 btn btn-primary">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>Onside</a>
          </li>
        </ul>
      </details>
      <div className="grid grid-cols-1 gap-6 mt-5">
        {dispaljobs.map((card) => (
          <JobCard key={card.id} card={card}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
