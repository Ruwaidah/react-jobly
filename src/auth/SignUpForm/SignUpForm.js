import { useState } from "react";
import { Link } from "react-router-dom";
import JoblyApi from "../../api";

const SignUpForm = ({signup}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const result = await signup(formData);
    if (result) {
    } else setFormErrors(result.error);
  };
  return (
    <div className="SignUpForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            value={formData.username}
            type="text"
            id="username"
            name="username"
            placeholder="username"
            required
          />
        </div>
        <div>
          {" "}
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={formData.password}
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <div>
          <label htmlFor="firstname">First name</label>
          <input
            onChange={handleChange}
            value={formData.firstName}
            type="text"
            id="firstname"
            name="firstName"
            placeholder="first name"
            required
          />
        </div>{" "}
        <div>
          <label htmlFor="lastname">Last name</label>
          <input
            onChange={handleChange}
            value={formData.lastName}
            type="text"
            id="lastname"
            name="lastName"
            placeholder="last name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <input type="submit" value="Sing Up" />
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
};

export default SignUpForm;
