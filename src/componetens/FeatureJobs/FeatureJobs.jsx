import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className=" text-center py-5">
        <h2 className="text-4xl text-[#1A1919] font-bold ">
          Featured Jobs:{jobs.length}
        </h2>
        <p className="py-4 text[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center">
        <div className={dataLength === jobs.length && "hidden"}>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-primary font-bold my-5"
          >
            Show All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobs;
