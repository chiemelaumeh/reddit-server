import React from "react";
import { useState, useContext } from "react";
import Headerbuttons from "./Headerbuttons";
import OutsideClickHandler from "react-outside-click-handler";
import AuthModalContext from "../context/AuthModalContext";
import ModalContext from "../context/ModalContext";
import { CiUser } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import logo from "../images/logo.png";
import { CiSearch } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";
import UserContext from "../context/UserContext";
import avatar from "../images/chess.webp";

const Header = () => {
  const [userDropDownVisibilityClass, setUserDropDownVisibilityClass] =
    useState("hidden");
  const { modalVisibility, setModalVisibility } = useContext(AuthModalContext);
  const { modalType, setModalType } = useContext(ModalContext);
  const user = useContext(UserContext);

  const handleLogin = () => {
    setModalVisibility(true);
    setModalType("login");
  };

  const handleSignUp = () => {
    setModalVisibility(true);
    setModalType("register");
  };

  const toggleDropDown = () => {
    if (userDropDownVisibilityClass === "hidden") {
      setUserDropDownVisibilityClass("show");
    } else {
      setUserDropDownVisibilityClass("hidden");
    }
  };

  return (
    <header className="header">
      <div className="sub-header">
        <img className="logo" src={logo} alt="" />
        <form className="form" action="">
          <CiSearch className="search-icon" />

          <input
            className="search-box"
            type="text"
            placeholder="Search Reddit"
          />
        </form>
        {user && (
          <>
            <button className="icon-btn">
              <BsBell className="icon" />
            </button>
            <button className="icon-btn">
              <BsChatDots className="icon" />
            </button>
            <button className="icon-btn">
              <HiOutlinePlus className="icon" />
            </button>
          </>
        )}
        {!user && (
          <div className="login-div">
            <Headerbuttons onClick={handleLogin}>Log In </Headerbuttons>
            <Headerbuttons onClick={handleSignUp}>Sign Up </Headerbuttons>
          </div>
        )}

        <OutsideClickHandler
          onOutsideClick={() => setUserDropDownVisibilityClass("hidden")}
        >
          <button className="avatar-btn" onClick={toggleDropDown}>
            {!user.username && <CiUser className="icon" />}

            {user.username && (
              <>
                <img src={avatar} alt="" className="avatar" />
                <BsChevronDown className="icon avatar-icon" />
              </>
            )}
          </button>
        </OutsideClickHandler>

        <div
          onClick={() => setModalVisibility(true)}
          className={
            userDropDownVisibilityClass === "hidden" ? "hide-box" : " show-box"
          }
        >
          <button href="" className="btn link-box">
            <SlLogin className=" login-icon" />
            Log In / Sign UP
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

// const useUserDropDown = (ref) => {
//   useEffect(() => {

//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         // alert("You clicked outside of me!");
//         setUserDropDownVisibilityClass("hidden")
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {

//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);

// }
// const userDropDownRef = useRef(null)
// useUserDropDown(userDropDownRef)
