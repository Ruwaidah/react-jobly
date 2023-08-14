import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = () => {};

  const handleChange = () => {};
  return (
    <div className="SignUpForm">
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <input type="text" name="firstName" placeholder="first name" />
        <input type="text" name="lastname" placeholder="last name" />
        <input type="email" name="email" placeholder="email" />
        <input type="submit" value="Sing Up" />
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
};

export default SignUpForm;
