import { Link } from "react-router-dom";
import UserContext from "../../auth/UserContext";
import { useContext } from "react";
import Companies from "../Companies/Companies";

const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="HomePage">
      <h2>Jobly</h2>
      <p>All the jobs in one, convenient place.</p>
      {user ? (
        <h3>Welcome</h3>
      ) : (
        <>
        {" "}
        <Link to="/login">Log in</Link>
        <Link to="signup">Sign up</Link>
      </>
      )
      
      }
    </div>
  );
};

export default HomePage;
