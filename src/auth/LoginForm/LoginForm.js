import { Link } from "react-router-dom";
import { useState } from "react";
import JoblyApi from "../../api";

const LoginForm = ({ login }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData);
    if (result) {
    } else {
      setFormErrors(result);
    }
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
            required
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
            required
          />
        </div>
        <input type="submit" value="Login" />
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
};

export default LoginForm;
