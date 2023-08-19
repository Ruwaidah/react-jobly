import { Route, Routes } from "react-router-dom";
import LoginForm from "../auth/LoginForm/LoginForm";
import SignUpForm from "../auth/SignUpForm/SignUpForm";
import LandingPag from "../components/HomePage/HomePage";
import NotFound from "../components/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import Jobs from "../components/Jobs/Jobs";
import Companies from "../components/Companies/Companies"

const RoutesComponent = ({ login, signup }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPag />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignUpForm signup={signup} />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/companies" element={<Companies /> } />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
