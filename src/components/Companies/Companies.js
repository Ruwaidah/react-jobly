import { useContext, useEffect, useState } from "react";
import UserContext from "../../auth/UserContext";
import JoblyApi from "../../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

const Companies = () => {
  const { user, token } = useContext(UserContext);
  const [companies, setCompanies] = useState(null);
  useEffect(() => {
    async function getCompanies() {
      try {
        const data = await JoblyApi.getCompanies();
        setCompanies(data);
      } catch (error) {}
    }
    getCompanies();
  }, []);
  if (!companies) return <h2>Loading</h2>;
  return (
    <div className="Companies">
      <h2>Companies</h2>
      <SearchForm />
      {companies.map((company, indx) => (
        <CompanyCard key={indx} company={company} />
      ))}
    </div>
  );
};

export default Companies;
