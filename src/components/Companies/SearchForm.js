import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ serachSubmit }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    serachSubmit(value);
  };
  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={value}
          placeholder="search for name..."
          onChange={handleChange}
        />
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default SearchForm;
