import JobCard from "./JobCard";
import "./JobsDetails.css"

const JobsDetails = ({ jobs }) => {
  return (
    <div className="JobsDetails">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobsDetails;
