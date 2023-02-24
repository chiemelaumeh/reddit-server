import "./styles/header.css";
import "./styles/headerboard.css";
import "./styles/postform.css";
import "./styles/redditstory.css";
import "./styles/headerbuttons.css";

import { AuthModalProvider } from "./context/AuthModalContext";
import { ModalProvider } from "./context/ModalContext";
import { UserProvider } from "./context/UserContext";
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
      console.log(user)
      getUser();
  }, []);

  
  // console.log(user);


  // useEffect(() => {
  const logout = async () => {
    await axios.get(
      // "https://redditt-api.onrender.com/logout",
      "http://localhost:4000/logout",
      {
        withCredentials: true,
      }
    );
    setUser({});
  };
// logout()
  return (
    // <AuthModalProvider>
    //   <UserProvider>
    //     <ModalProvider>
    <>
      <Routing />
      <Authmodal />
      <PostFormModal />
    </>
    //     </ModalProvider>
    //   </UserProvider>
    // </AuthModalProvider>
  );
}

export default App;
