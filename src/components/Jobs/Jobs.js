import { useEffect, useState } from "react";
import JoblyApi from "../../api";
import JobsDetails from "./JobsDetails";
import SearchForm from "../Companies/SearchForm";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    getJobs();
  }, []);
  async function getJobs() {
    try {
      const data = await JoblyApi.getJobs();
      setJobs(data);
    } catch {}
  }
  const serachSubmit = (data) => {
    if (data === "") {
      getJobs();
    } else {
      const newJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(data.toLowerCase())
      );
      setJobs(newJobs);
    }
  };

  if (!jobs) return <h4>Loading</h4>;
  return (
    <div className="Jobs">
      <SearchForm serachSubmit={serachSubmit} />
      {jobs.length === 0 ? <p>No results</p> : <JobsDetails jobs={jobs} />}
    </div>
  );
};

export default Jobs;
