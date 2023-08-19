import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../auth/UserContext";

const Navigation = ({ logout }) => {
  const { token, user } = useContext(UserContext);
  return (
    <div className="Navigation">
      {token&&user ? (
        <>
          {" "}
          <Link to="/">Jobly</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/companies">Companies</Link>
          <Link to="/" onClick={logout}>
            Logout {user.username}
          </Link>
        </>
      ) : (
        <>
          {" "}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
};

export default Navigation;
