import { useEffect, useState } from "react";
import "./Companies.css";
import JoblyApi from "../../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

const Companies = () => {
  const [value, setValue] = useState("");
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, [value]);

  async function getCompanies() {
    try {
      const data = await JoblyApi.getCompanies();
      const componiesFilter = data.filter((c) => {
        if (value === "") {
          return true;
        } else return c.name.toLowerCase().includes(value.toLowerCase());
      });
      setCompanies(componiesFilter);
    } catch (error) {}
  }

  const serachSubmit = (data) => {
    setValue(data);
  };
  if (!companies) return <h2>Loading</h2>;
  return (
    <div className="Companies">
      <SearchForm serachSubmit={serachSubmit} />
      <div>
        {companies.length === 0 ? (
          <p>No results</p>
        ) : (
          companies.map((company, indx) => (
            <CompanyCard key={indx} company={company} />
          ))
        )}
      </div>
    </div>
  );
};

export default Companies;
