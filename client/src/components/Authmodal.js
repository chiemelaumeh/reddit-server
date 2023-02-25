import Headerbuttons from "./Headerbuttons";
import Input from "./Input";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import AuthModalContext from "../context/AuthModalContext";
import OutsideClickHandler from "react-outside-click-handler";
import ModalContext from "../context/ModalContext";
import UserContext from "../context/UserContext";

const Authmodal = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { modalVisibility, setModalVisibility } = useContext(AuthModalContext);
  const { modalType, setModalType } = useContext(ModalContext);
  const { user, setUser } = useContext(UserContext);

  async function register(e) {
    e.preventDefault();
    setModalVisibility(false);
    setEmail("");
    setPassword("");
    setUsername("");
    const data = { email, username, password };
    try {
      const res = await axios.post(
        // "https://redditt-api.onrender.com/register",
        "http://localhost:4000/register",
        data,
        {
          withCredentials: true,
        }
      );
      await setUser({ username });

      console.log(res);
    } catch (err) {
      console.error(err.message);
    }
  }

  const login = async () => {
    setModalVisibility(false);
    const data = { username, password };
    try {
      const response = await axios.post(
        // "https://redditt-api.onrender.com/login",
        "http://localhost:4000/login",
        data,
        {
          withCredentials: true,
        }
        );
        // console.log(response.data.username)
        setUser(response.data.username)
    } catch (error) {
      console.error(error.messagee);
    }
  };

  return (
    <div className={modalVisibility ? "auth-page" : "hide-auth-page"}>
      <OutsideClickHandler onOutsideClick={() => setModalVisibility(false)}>
        <div className="auth-sub">
          {modalType === "login" && <h1>Login</h1>}
          {modalType === "register" && <h1>Register</h1>}
          {modalType === "register" && (
            <label>
              <span>E-mail: </span>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          )}
          <label>
            <span>Username: </span>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <span>Password: </span>

            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {modalType === "login" && (
            <Headerbuttons onClick={login}>Log In</Headerbuttons>
          )}
          {modalType === "register" && (
            <Headerbuttons onClick={register}>Sign Up</Headerbuttons>
          )}
          {modalType === "login" && (
            <div className="login-state">
              <p className="login-p-1">New to Reddit?</p>
              <button className="btn" onClick={() => setModalType("register")}>
                SIGN UP
              </button>
            </div>
          )}
          {modalType === "register" && (
            <div className="login-state">
              <p className="login-p-1">Already have an account?</p>
              <button className="btn" onClick={() => setModalType("login")}>
                LOG IN
              </button>
            </div>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Authmodal;
