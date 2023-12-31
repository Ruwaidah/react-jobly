import { Link } from "react-router-dom";
import "./CompanyCard.css";

const CompanyCard = ({ company }) => {
  return (
    <Link to={`${company.handle}`} className="CompanyCard">
      <h3>{company.name}</h3>
      <p>{company.description}</p>
    </Link>
  );
};

export default CompanyCard;
