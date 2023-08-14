import { Link } from "react-router-dom";
import ApIJobly from "../../api";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {};
  console.log(ApIJobly);
  const handleChange = (e) => {};
  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" value="Login" />
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
};

export default LoginForm;
