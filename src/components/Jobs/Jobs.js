import { useEffect, useState } from "react";
import JoblyApi from "../../api";
import JobsDetails from "./JobsDetails";
import SearchForm from "../Companies/SearchForm";
import "./Jobs.css";

const Jobs = () => {
  const [value, setValue] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, [value]);

  async function getJobs() {
    try {
      const data = await JoblyApi.getJobs();
      const jobsFilter = data.filter((j) => {
        if (value === "") return true;
        else {
          return j.title.toLowerCase().includes(value.toLowerCase());
        }
      });
      setJobs(jobsFilter);
    } catch (error) {}
  }
  const serachSubmit = (data) => {
    setValue(data);
  };

  if (!jobs) return <h4>Loading</h4>;
  return (
    <div className="Jobs">
      <SearchForm serachSubmit={serachSubmit} />
      {jobs.length === 0 ? (
        <p className="no-result">No results</p>
      ) : (
        <JobsDetails jobs={jobs} />
      )}
    </div>
  );
};

export default Jobs;
