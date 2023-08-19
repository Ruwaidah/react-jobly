import { useState } from "react";

const SearchForm = () => {
  const [fromData, setFormData] = useState({
    name: "",
  });
  const handleChange = (e) => {
    setFormData({["name"]:e.target.value});
  };
  const handleSubmit = () => {

  }
  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={fromData.name}
          placeholder="search for name..."
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;
