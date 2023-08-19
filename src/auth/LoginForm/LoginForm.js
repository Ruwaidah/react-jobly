import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../UserContext";

const LoginForm = ({ login }) => {
  const { token } = useContext(UserContext);
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
  if (token) return <Navigate to="/companies" />;
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
