import "./App.css";
import RoutesComponent from "./routes/RoutesComponent";
import UserContext from "./auth/UserContext";
import JoblyApi from "./api";
import useLocalStorageState from "./hooks/useLocalStorageState";
import Navigation from "./routes/Navigation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useLocalStorageState("token", null);

  useEffect(() => {
    async function getCurrentUser() {
      try {
        const user = await JoblyApi.getCurrentUser();
        setUser(user);
      } catch (error) {}
    }
    if (token) getCurrentUser();
  }, [token]);

  const signup = (data) => {
    JoblyApi.signup(data)
      .then((result) => {
        setToken(result);
        navigate("/companies");
      })
      .catch((error) => console.log(error));
  };
  const login = (data) => {
    JoblyApi.login(data)
      .then((result) => {
        setToken(result);
        navigate("/companies");
      })
      .catch((error) => "Error Login");
  };

  const logout = () => {
    setToken(null);
    localStorage.clear();
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ token, user, setUser }}>
        <Navigation logout={logout} />
        <RoutesComponent login={login} signup={signup} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
