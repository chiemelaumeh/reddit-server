import React from "react";
import { useState, useContext, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import AuthModalContext from "../context/AuthModalContext";
import ModalContext from "../context/ModalContext";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { BsFillMoonFill } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";


import ImageComponent from "./ImageComponent";

import logo from "../images/logo.png";
import { CiSearch } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";
import UserContext from "../context/UserContext";
import CommunityContext from "../context/CommunityContext";
import avatar from "../images/user.jpg";
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
    setOpenUpload,
    uploadedImage,
  } = useContext(AuthModalContext);
  const { setModalType } = useContext(ModalContext);
  const { user, setUser } = useContext(UserContext);
  const { setRedirect, showHeader, setShowHeader } = useContext(RedirectContext);
  const { setShowCommunity } = useContext(CommunityContext);

  const theLightModeSearchBox = lightMode ? "search-box-light" : "search-box";
  const theLightMode = lightMode ? "header-light" : "header";
  const theLightModeForm = lightMode ? "form-light" : "form";
  const theLightModeIcon = lightMode ? "icon-light" : "icon";
  const darkOrLight = lightMode ? "Dark Mode" : "Light Mode";
  const openDiv = lightMode ? "plus-btn-icon-light" : "plus-btn-icon"
  const openDivCreate = lightMode ? "plus-btn-light" : "plus-btn"
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
      const response = await axios.get("/communities/");

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
    await axios.get("/logout", {
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
            setShowHeader(false)

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
            placeholder="Search myReddit"
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
                  className={openDivCreate}
                >
                  Create new post
                </button>

                <button
                  onClick={() => {
                    setShowCommunity(true);
                    setPlusDropDownVisibilityClass("hidden");
                  }}
                  className={openDivCreate}
                >
                  Create community
                </button>
              </div>
            </>
          )}
        </OutsideClickHandler>

        <OutsideClickHandler
          onOutsideClick={() => setUserDropDownVisibilityClass("hidden")}
        >
          {!user.username && (
            <button
              className="avatar-btn"
              onClick={() => setModalVisibility(true)}
            >
              LOGIN
            </button>
          )}

          {user.username && (
            <>
              <div className="avatar-btn-on" onClick={toggleDropDown}>
           
                {uploadedImage ? (
                  <ImageComponent />
                ) : (
                  <img src={avatar} alt="" className="avatar" />
                )}

       

                <BsChevronDown className="chevron" />
              </div>

              <div
                className={
                  userDropDownVisibilityClass === "hidden"
                    ? "hide-box"
                    : " show-box"
                }
              >
                <button   className={openDiv}  >
                <FaRegUser className=" login-icon " />
              
                  {user.username}
                

                
                  </button>

                <button
                  onClick={() => {
                    setOpenUpload(true);
                    setUserDropDownVisibilityClass("hidden");
                  }}
                  href=""
                  className={openDiv}
                >
                  <BsUpload className=" login-icon " />
                  Upload 
                </button>
                <button
                  onClick={changeLightMode}
                  href=""
                  className={openDiv}
                >
                  {darkOrLightIcon}

                  {darkOrLight}
                </button>
                <button onClick={logout} href=""   className={openDiv}>
                  <SlLogout className=" login-icon " />
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
