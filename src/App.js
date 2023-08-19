import "./App.css";
import RoutesComponent from "./routes/RoutesComponent";
import UserContext from "./auth/UserContext";
import JoblyApi from "./api";
import useLocalStorageState from "./hooks/useLocalStorageState";
import Navigation from "./routes/Navigation";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useLocalStorageState("token", null);
  const navigate = useNavigate()
  
  const signup = (data) => {
    JoblyApi.signup(data)
      .then((result) => {
        setUser(result);
        navigate("/")
      })
      .catch((error) => console.log(error));
  };
  const login = (data) => {
    JoblyApi.login(data)
      .then((result) => {
        setUser(result);
        navigate("/")
      })
      .catch((error) => "Error Login");
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ user }}>
        <Navigation />
        <RoutesComponent login={login} signup={signup} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
