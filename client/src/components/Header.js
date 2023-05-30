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
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import logo from "../images/logo.png";
import { CiSearch } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";
import { SlLogout } from "react-icons/sl";
import UserContext from "../context/UserContext";
import avatar from "../images/IMG_9146.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import RedirectContext from "../context/RedirectContext";

const Header = () => {
  const [userDropDownVisibilityClass, setUserDropDownVisibilityClass] =
    useState("hidden");
  const [plusDropDownVisibilityClass, setPlusDropDownVisibilityClass] =
    useState("hidden");
  const { setModalVisibility, setPostFormModalVisibility } =
    useContext(AuthModalContext);
  // const { setPostFormModalVisibility} = useContext(A)
  const { setModalType } = useContext(ModalContext);
  const { user, setUser } = useContext(UserContext);
  const { redirect, setRedirect } = useContext(RedirectContext);
  const [searchText, setSearchText] = useState("");

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

  const togglePlusDropDown = () => {
    if (plusDropDownVisibilityClass === "hidden") {
      setPlusDropDownVisibilityClass("show");
    } else {
      setPlusDropDownVisibilityClass("hidden");
    }
  };

  const logout = async () => {
    const response = await axios.get(
      // "https://redditt-api.onrender.com/logout",
      "http://localhost:4000/logout",
      {
        withCredentials: true,
      }
      );
      // console.log(response)
    setUser({});
  };

  const doSearch = (e) => {
    e.preventDefault();
    setRedirect("/search/" + encodeURIComponent(searchText));
  };
  return (
    <header className="header">
      <div className="sub-header">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <form className="form" onSubmit={doSearch}>
          <CiSearch className="search-icon" />

          <input
            className="search-box"
            required
            type="text"
            placeholder="Search Reddit"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>
        <OutsideClickHandler
          onOutsideClick={() => setPlusDropDownVisibilityClass("hidden")}
        >
          {user.username && (
            <>
              <button className="icon-btn">
                <BsBell className="icon" />
              </button>
              <button className="icon-btn">
                <BsChatDots className="icon" />
              </button>
              <button className="icon-btn" onClick={togglePlusDropDown}>
                <HiOutlinePlus className="icon" />
              </button>

              <div
                className={
                  plusDropDownVisibilityClass === "hidden"
                    ? "hide-box"
                    : "show-box"
                }
              >
                <button
                  onClick={() => {
                    setPostFormModalVisibility(true);
                    setPlusDropDownVisibilityClass("hidden");
                  }}
                  className="btn link-box"
                >
                  Create new post
                  {/* <BsFillFileEarmarkPostFill
                  className=" icon" /> */}
                </button>

                <button className="btn link-box">
                  Create new community
                  {/* <FaUsers 
                className=" icon" /> */}
                </button>
              </div>
            </>

            // <>
            // <button className="avatar-btn" onClick={toggleDropDown}>
            //   <img src={avatar} alt="" className="avatar" />
            //   <BsChevronDown className="chevron" />
            // </button>

            // <div
            //   className={
            //     userDropDownVisibilityClass === "hidden"
            //       ? "hide-box"
            //       : " show-box"
            //   }
            // >
            //   <p>Welcome, {user.username}</p>
            //   <button onClick={logout} href="" className="btn link-box">
            //     <SlLogout className=" login-icon" />
            //     Logout
            //   </button>
            // </div>
            // </>
          )}
        </OutsideClickHandler>
        {!user.username && (
          <div className="login-div">
            <Headerbuttons onClick={handleLogin}>Log In </Headerbuttons>
            <Headerbuttons onClick={handleSignUp}>Sign Up </Headerbuttons>
          </div>
        )}

        <OutsideClickHandler
          onOutsideClick={() => setUserDropDownVisibilityClass("hidden")}
        >
          {!user.username && (
            <button className="avatar-btn" onClick={toggleDropDown}>
              <>
                <CiUser className="icon default-icon" />
                <BsChevronDown className="default-chevron" />
              </>
            </button>
          )}

          {!user.username && (
            <div
              onClick={() => setModalVisibility(true)}
              className={
                userDropDownVisibilityClass === "hidden"
                  ? "hide-box"
                  : " show-box"
              }
            >
              <button href="" className="btn link-box">
                <SlLogin className=" login-icon" />
                Log In / Sign UP
              </button>
            </div>
          )}

          {user.username && (
            <>
              <button className="avatar-btn" onClick={toggleDropDown}>
                <img src={avatar} alt="" className="avatar" />
                <BsChevronDown className="chevron" />
              </button>

              <div
                className={
                  userDropDownVisibilityClass === "hidden"
                    ? "hide-box"
                    : " show-box"
                }
              >
                <p>Welcome, {user.username}</p>
                <button onClick={logout} href="" className="btn link-box">
                  <SlLogout className=" login-icon" />
                  Logout
                </button>
              </div>
            </>
          )}
        </OutsideClickHandler>
      </div>
    </header>
  );
};

export default Header;
