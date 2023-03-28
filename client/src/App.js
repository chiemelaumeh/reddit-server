import "./styles/header.css";
import "./styles/headerboard.css";
import "./styles/postform.css";
import "./styles/redditstory.css";
import "./styles/headerbuttons.css";

import { useEffect, useContext } from "react";

import Authmodal from "./components/Authmodal";
import UserContext from "./context/UserContext";
import axios from "axios";
import Routing from "./components/Routing";
import PostFormModal from "./components/PostFormModal";


function App() {
  const {user, setUser} = useContext(UserContext);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        // "https://redditt-api.onrender.com/user",
        "http://localhost:4000/user",
        {
          withCredentials: true,
        }
        );
        setUser(response.data);
      };
      getUser();
    }, []);
    console.log(user)

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
