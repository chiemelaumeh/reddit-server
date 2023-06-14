import React from "react";
import { useState, useContext, useEffect } from "react";
import Headerbuttons from "./Headerbuttons";
import OutsideClickHandler from "react-outside-click-handler";
import AuthModalContext from "../context/AuthModalContext";
import ModalContext from "../context/ModalContext";
import { CiUser } from "react-icons/ci";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../images/logo.png";
import { CiSearch } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";
import { SlLogout } from "react-icons/sl";
import UserContext from "../context/UserContext";
import CommunityContext from "../context/CommunityContext";
import avatar from "../images/IMG_9146.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import RedirectContext from "../context/RedirectContext";

const Header = () => {
  const [userDropDownVisibilityClass, setUserDropDownVisibilityClass] =
    useState("hidden");
  const [plusDropDownVisibilityClass, setPlusDropDownVisibilityClass] =
    useState("hidden");
  const [searchText, setSearchText] = useState("");
  const {
    setModalVisibility,
    setPostFormModalVisibility,
    lightMode,
    setLightMode,
    setAllCommunities,
  } = useContext(AuthModalContext);
  const { setModalType } = useContext(ModalContext);
  const { user, setUser } = useContext(UserContext);
  const { setRedirect } = useContext(RedirectContext);
  const { setShowCommunity } = useContext(CommunityContext);
  
  const theLightModeSearchBox = lightMode ? "search-box-light" : "search-box"
  const theLightMode = lightMode ? "header-light" : "header";
  const theLightModeForm = lightMode ? "form-light" : "form";
  const theLightModeIcon = lightMode ? "icon-light" : "icon";
  const darkOrLight = lightMode ? "Dark Mode" : "Light Mode";
  const darkOrLightIcon = lightMode ? (
    <BsFillMoonFill className=" login-icon" />
  ) : (
    <BsFillBrightnessHighFill className=" login-icon" />
  );
  useEffect(() => {
    setLightMode(JSON.parse(window.localStorage.getItem("lightMode")));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("lightMode", lightMode);
  }, [lightMode]);

  const getAllComunities = async () => {
    try {
      const response = await axios.get("http://localhost:4000/communities/");

      setAllCommunities(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

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
    await axios.get("http://localhost:4000/logout", {
      withCredentials: true,
    });
    setUser({});
  };

  const doSearch = (e) => {
    e.preventDefault();
    setRedirect("/search/" + encodeURIComponent(searchText));
  };

  const changeLightMode = () => {
    if (!lightMode) {
      setLightMode(true);
    } else {
      setLightMode(false);
    }
  };
  return (
    <header className={theLightMode}>
      <div className="sub-header">
        <Link
          to="/"
          onClick={() => {
            setRedirect("/");
          }}
        >
          <img className="logo" src={logo} alt="" />
        </Link>
        <form className={theLightModeForm} onSubmit={doSearch}>
          <CiSearch className="search-icon" />

          <input
            className={theLightModeSearchBox}
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
              {/* <button className="icon-btn">
                <BsBell className={theLightModeIcon} />
              </button>
              <button className="icon-btn">
                <BsChatDots className={theLightModeIcon} />
              </button> */}
              <button className="icon-btn" onClick={togglePlusDropDown}>
                <HiOutlinePlus className={theLightModeIcon} />
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
                    getAllComunities();
                    setPostFormModalVisibility(true);
                    setPlusDropDownVisibilityClass("hidden");
                  }}
                  className="btn link-box"
                >
                  Create new post
                </button>

                <button
                  onClick={() => {
                    setShowCommunity(true);
                    setPlusDropDownVisibilityClass("hidden");
                  }}
                  className="btn link-box"
                >
                  Create new community
                </button>
              </div>
            </>
          )}
        </OutsideClickHandler>
       

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

                <button onClick={logout} href="" className=" link-box ">
                  <SlLogout className=" login-icon " />
                  Logout
                </button>

                <button
                  onClick={changeLightMode}
                  href=""
                  className=" link-box border-top"
                >
                  {darkOrLightIcon}

                  {darkOrLight}
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
