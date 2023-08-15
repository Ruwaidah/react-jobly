import { Link } from "react-router-dom";
import ApIJobly from "../../api";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login-username">Username</label>
          <input
            onChange={handleChange}
            value={formData.username}
            type="text"
            id="login-username"
            name="username"
            placeholder="username"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="login-password">Password</label>
          <input
            onChange={handleChange}
            value={formData.password}
            type="password"
            id="login-password"
            name="password"
            placeholder="password"
          />
        </div>
        <input type="submit" value="Login" />
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
};

export default LoginForm;
