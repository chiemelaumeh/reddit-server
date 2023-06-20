import "./styles/header.css";
import "./styles/headerboard.css";
import "./styles/postform.css";
import "./styles/redditstory.css";
import "./styles/headerbuttons.css";
import { useEffect, useContext } from "react";
import UserContext from "./context/UserContext";
import axios from "axios";
import Routing from "./components/Routing";

axios.defaults.baseURL =  "https://myreddit-api.onrender.com/";
// axios.defaults.baseURL =  "https://reddit-app-nw97.onrender.com/";
// axios.defaults.baseURL =  "http://localhost:4000/";

function App() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("/user", {
        withCredentials: true,
      });
      setUser(response.data);
    };
    getUser();
  }, []);

  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
