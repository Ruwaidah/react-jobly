import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../auth/UserContext";
import "./Navigation.css";

const Navigation = ({ logout }) => {
  const { token, user } = useContext(UserContext);
  return (
    <div className="Navigation">
      {token && user ? (
        <>
          {" "}
          <div className="Navigation-logo">
            <Link to="/companies">Jobly</Link>
          </div>
          <div className="Navigation-all-btns">
            <Link to="/profile">Profile</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/companies">Companies</Link>
            <Link to="/" onClick={logout}>
              Logout {user.username}
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="Navigation-logo">
            <Link to="/">Jobly</Link>
          </div>
          <div className="Navigation-btn">
            {" "}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navigation;
