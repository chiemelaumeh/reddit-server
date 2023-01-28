import "./styles/header.css";
import "./styles/headerboard.css";
import "./styles/postform.css";
import "./styles/redditstory.css";
import "./styles/headerbuttons.css";

import { AuthModalProvider } from "./context/AuthModalContext";
import { ModalProvider } from "./context/ModalContext";
import { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Headerboard from "./components/Headerboard";
import Postform from "./components/Postform";
import Postlisting from "./components/Postlisting";
import Redditmain from "./components/Post";
import Authmodal from "./components/Authmodal";
import UserContext from "./context/UserContext";
import AuthModalContext from "./context/AuthModalContext";
import Board from "./components/Board";
import Commentpage from "./components/Postpage";
import axios from "axios";
import Routing from "./components/Routing";
import PostFormModal from "./components/PostFormModal";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("https://redditt-api.onrender.com/user", {
        withCredentials: true,
      });
      // .then((response) => setUser(response.data))
      setUser(response.data);
    };
    getUser();
    console.log("f")
  }, []);
  // useEffect(() => {
    const logout = async () => {
      await axios.get("https://redditt-api.onrender.com/logout", {
        withCredentials: true,
      });
      setUser({});
    };
    
  return (
    <AuthModalProvider>
      {/* <UserProvider> */}
      <UserContext.Provider value={{ user, setUser, logout }}>
        <ModalProvider>
          <Routing />
          <Authmodal />
          <PostFormModal />
        </ModalProvider>
      </UserContext.Provider>
      {/* </UserProvider> */}
    </AuthModalProvider>
  );
}

export default App;
//check