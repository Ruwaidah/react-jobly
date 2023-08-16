import "./App.css";
import LandingPag from "./components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/LoginForm/LoginForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import NotFound from "./components/NotFound/NotFound";
import UserContext from "./auth/UserContext";
import JoblyApi from "./api";
import useLocalStorageState from "./auth/useLocalStorageState";

function App() {
  const [state, setState] = useLocalStorageState("token",null)
  const signup = (data) => {
    JoblyApi.signup(data).then(result => {
      setState(result)
    }).catch(error => console.log(error))
  
  }

  const login = (data) =>  {
    JoblyApi.login(data).then(result => {
      console.log(result,setState("token", result))
      setState("token", result)
    }).catch(error =>  "Error Login")
  }
  return (
    <div className="App">
      <UserContext.Provider>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPag />} />
          <Route path="/login" element={<LoginForm login={login}/>} />
          <Route path="/signup" element={<SignUpForm signup={signup}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
