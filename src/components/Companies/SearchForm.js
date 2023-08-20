import { useState } from "react";

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;
