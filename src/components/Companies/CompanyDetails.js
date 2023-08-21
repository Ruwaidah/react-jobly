import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../../api";
import JobsDetails from "../Jobs/JobsDetails";
import "./CompanyDetails.css";

const CompanyDetails = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  useEffect(() => {
    async function getCompany() {
      try {
        const data = await JoblyApi.getCompany(handle);
        setCompany(data);
      } catch (error) {}
    }
    getCompany();
  }, []);
  if (!company) return <h3>Loading</h3>;
  return (
    <div className="CompanyDetails">
      <h4 className="CompanyDetails-h4">{company.name}</h4>
      <p className="CompanyDetails-p">{company.description}</p>
      <JobsDetails jobs={company.jobs} />
    </div>
  );
};

export default CompanyDetails;
