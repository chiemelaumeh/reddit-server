import "./styles/header.css";
import "./styles/headerboard.css";
import "./styles/postform.css";
import "./styles/redditstory.css";
import "./styles/headerbuttons.css";

import { useEffect, useContext } from "react";
import UserContext from "./context/UserContext";
import axios from "axios";
import Routing from "./components/Routing";

axios.defaults.baseURL =  "https://redditt-api.onrender.com/user/";

function App() {
  const {setUser} = useContext(UserContext);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        "/user",
        {
          withCredentials: true,
        }
        );
        setUser(response.data);
   

      };
      getUser();
    }, []);


  return (
    <div > 
      <Routing  />
    </div>
  );
}

export default App;
