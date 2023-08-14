import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <h2>Jobly</h2>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default NavBar;
