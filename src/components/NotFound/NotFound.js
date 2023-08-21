import { Link } from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="NotFound">
      <h3>Page Not Found</h3>
      <Link to ="/">Go to Home Page</Link>
    </div>
  );
};

export default NotFound;
