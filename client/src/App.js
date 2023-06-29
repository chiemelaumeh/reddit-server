import "./styles/header.css";
import "./styles/headerboard.css";
import "./styles/postform.css";
import "./styles/redditstory.css";
import "./styles/headerbuttons.css";
import { useEffect, useContext } from "react";
import UserContext from "./context/UserContext";
import axios from "axios";
import Routing from "./components/Routing";

// axios.defaults.baseURL =  "http://localhost:4000/";
axios.defaults.baseURL =  "http://franklyn.local:4000/";
// axios.defaults.baseURL =  "https://myreddit-api.onrender.com/";

function App() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {

    const getUser = async () => {
      const response = await axios.get("/user", {
        withCredentials: true,
      });
      setUser(response.data.user);
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
