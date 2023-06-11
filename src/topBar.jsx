import React from "react";
import "./topBar.css";
import { AiOutlineReload, AiOutlineWhatsApp } from "react-icons/ai";
import { FaRegWindowMinimize } from "react-icons/fa";
import { BsTextareaResize } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { appWindow } from "@tauri-apps/api/window";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { MdOutlineCall } from "react-icons/md";

export const TopBar = (props) => {
  //   document
  //     .getElementById("titlebar-minimize")
  //     .addEventListener("click", () => appWindow.minimize());
  //   document
  //     .getElementById("titlebar-maximize")
  //     .addEventListener("click", () => appWindow.toggleMaximize());
  //   document
  //     .getElementById("titlebar-close")
  //     .addEventListener("click", () => appWindow.close());
  const navigate = useNavigate();
  return (
    <div className="topBar-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvrUnSvQymoN1-cYQv4YQBn6fShtchhOpbg&usqp=CAU"
        alt=""
        id="Logo-topbar"
      />
      <div className="top-bar-content">
        <div class="dropdown">
          <button class="dropbtn">Company</button>
          <div class="dropdown-content">
            <a
              href="#"
              className="company-items"
              onClick={() => navigate("/yourCompanies")}
            >
              Change Company
            </a>
            <a href="#" className="company-items">
              Rename Company Name
            </a>
          </div>
        </div>
      </div>
      {/* <div className="top-bar-content">Company</div> */}
      <div className="top-bar-content">Help</div>
      <div
        className="top-bar-content"
        onClick={() => props.setContent("shortcuts")}
      >
        Shortcuts
      </div>
      <div className="top-bar-content">
        <AiOutlineReload />
      </div>
      <div className="customer-support-data">
        Customer Support:
        <MdOutlineCall className="phone-icon-topBar" />
        <div className="pNumber-topBar">
          (+91) 123456789 || <AiOutlineWhatsApp> </AiOutlineWhatsApp> (+91)
          123456879
        </div>
      </div>
      <div className="top-bar-content-options-box">
        <div className="top-bar-content-options">
          <FaRegWindowMinimize
            id="titlebar-minimize"
            onClick={() => appWindow.minimize()}
          />
        </div>
        <div className="top-bar-content-options">
          <BsTextareaResize
            id="titlebar-maximize"
            onClick={() => appWindow.maximize()}
          />
        </div>
        <div className="top-bar-content-options">
          <ImCross id="titlebar-close" onClick={() => appWindow.close()} />
        </div>
      </div>
    </div>
  );
};
