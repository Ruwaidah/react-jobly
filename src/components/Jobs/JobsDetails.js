import JobCard from "./JobCard";

const JobsDetails = ({ jobs }) => {
  return (
    <div className="JobDetails">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobsDetails;
