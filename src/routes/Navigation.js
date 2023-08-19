import { Link, redirect } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../auth/UserContext";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const logout = () => {
    console.log("ewfwef");
    localStorage.clear();
    redirect("/");
  };
  return (
    <div className="Navigation">
      {user ? (
        <>
          {" "}
          <Link to="/">Jobly</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/companies">Companies</Link>
          <Link to="/" onClick={logout}>
            Logout
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
