import "./App.css";
import LandingPag from "./components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/LoginForm/LoginForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPag />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
