import { Link } from "react-router-dom";

const LandingPag = () => {
  return (
    <div>
      <h2>Jobly</h2>
      <p>All the jobs in one, convenient place.</p>
      <Link to="/login">Log in</Link>
      <Link to="signup">Sign up</Link>
    </div>
  );
};

export default LandingPag;
