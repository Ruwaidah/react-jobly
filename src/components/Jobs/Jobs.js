import { useEffect, useState } from "react";
import JoblyApi from "../../api";
import JobsDetails from "./JobsDetails";
import SearchForm from "../Companies/SearchForm";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    async function getJobs() {
      try {
        const data = await JoblyApi.getJobs();
        setJobs(data);
      } catch {}
    }
    getJobs();
  }, []);
  if (!jobs) return <h4>Loading</h4>
  return (
    <div className="Jobs">
      <h2>Jobs</h2>
      <SearchForm />
      <JobsDetails jobs={jobs}/>{" "}
    </div>
  );
};

export default Jobs;
