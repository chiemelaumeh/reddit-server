import Headerbuttons from "./Headerbuttons";
import Input from "./Input";
import { useState, useContext } from "react";
import axios from "axios";
import AuthModalContext from "../context/AuthModalContext";
import OutsideClickHandler from "react-outside-click-handler";

const Authmodal = () => {
  const [modalType, setModalType] = useState("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const visibleClass = props.show ? 'hidden' : 'block'
  // const visibleClass = useContext(AuthModalContext);
  // console.log(visibleClass)

  const { modalVisibility, setModalVisibility } = useContext(AuthModalContext);
  console.log(modalVisibility);
  async function register(e) {
    e.preventDefault();
    const data = { email, username, password };
    try {
      const res = await axios.post("http://localhost:4000/register", data, {
        withCredentials: true,
      });
      console.log(res);
      console.log("hey");
    } catch (error) {
      console.log(error.error);
    }
  }

  return (
    <div className={modalVisibility ? "auth-page" : "hide-auth-page"}>
      {/* <OutsideClickHandler onOutsideClick={() => setModalVisibility(false)}> */}
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
          {modalType === "login" && <Headerbuttons>Log In</Headerbuttons>}
          {modalType === "register" && (
            <Headerbuttons onClick={(e) => register(e)}>Sign Up</Headerbuttons>
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
      {/* </OutsideClickHandler> */}
    </div>
  );
};

export default Authmodal;
