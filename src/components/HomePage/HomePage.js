import { Link, Navigate } from "react-router-dom";
import UserContext from "../../auth/UserContext";
import { useContext } from "react";
import "./HomePage.css";
const HomePage = () => {
  const { token, user } = useContext(UserContext);
  return (
    <div className="HomePage">
      {token ? (
        <Navigate to="/companies" />
      ) : (
        <>
          <h2>Jobly</h2>
          <p>All the jobs in one, convenient place.</p>{" "}
          <div className="HomePage-btns">
            <Link to="/login">Log in</Link>
            <Link to="signup">Sign up</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
