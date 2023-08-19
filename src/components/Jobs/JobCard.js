import { useContext, useState } from "react";
import JoblyApi from "../../api";
import UserContext from "../../auth/UserContext";

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
      <h4>{job.title}</h4>
      <p>{job.companyName}</p>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
       <button disabled={isApplied} onClick={applyToJob}>Apply</button>
    </div>
  );
};

export default JobCard;
