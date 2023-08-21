import { useContext, useState } from "react";
import JoblyApi from "../../api";
import UserContext from "../../auth/UserContext";
import "./JobCard.css";

const JobCard = ({ job }) => {
  const { user } = useContext(UserContext);
  const [isApplied, setIsApplied] = useState(
    user.applications.includes(job.id)
  );
  const applyToJob = async () => {
    console.log(job.id);
    const data = await JoblyApi.applyToJob(user.username, job.id);
    setIsApplied(true);
  };
  return (
    <div className="JobCard">
      <div>
        <h4>{job.title}</h4>
        <h5>{job.companyName}</h5>
        <p>Salary: {job.salary}</p>
        <p>Equity: {job.equity}</p>
      </div>
      <button className={isApplied? "job-applied" : null} disabled={isApplied} onClick={applyToJob}>
        {isApplied ? "Applied" : "Apply"}
      </button>
    </div>
  );
};

export default JobCard;
