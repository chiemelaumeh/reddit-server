import React from "react";

import Headerbuttons from "./Headerbuttons";

import logo from "../images/logo.png";
import avatar from "../images/avatar.webp";

import { CiSearch } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
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

        {/* <button className="icon-btn">
          <BsBell className="icon" />
        </button>
        <button className="icon-btn">
          <BsChatDots className="icon" />
        </button>
        <button className="icon-btn">
          <HiOutlinePlus className="icon" />
        </button> */}
      <Headerbuttons>Login </Headerbuttons>
      <Headerbuttons>Sign Up </Headerbuttons>

        <button className="avatar-btn">
          <img src={avatar} alt="" className="avatar" />
          <BsChevronDown className="icon avatar-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
