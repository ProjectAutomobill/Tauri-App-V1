import React, { useState } from "react";
import "./topBar.css";
import { AiOutlineReload, AiOutlineWhatsApp } from "react-icons/ai";
import { FaRegWindowMinimize } from "react-icons/fa";
import { BsTextareaResize } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { ImCross } from "react-icons/im";
import { VscChromeMinimize } from "react-icons/vsc";
import { appWindow } from "@tauri-apps/api/window";
import { Navigate, redirect, useNavigate, useLocation } from "react-router-dom";
import { MdOutlineCall } from "react-icons/md";
import { useEffect } from "react";

export const TopBar = (props) => {
  var [optionsFlg, setOptionsFlg] = useState(false);
  var [prevVal, setPrevVal] = useState("/");
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
  const location = useLocation();

  if (
    prevVal != location.pathname.toString() &&
    (location.pathname.toString() == "/yourCompanies" ||
      location.pathname.toString() == "/")
  ) {
    console.log("Options Set to False");
    setOptionsFlg(false);
    setPrevVal(location.pathname.toString());
  } else if (prevVal != location.pathname.toString()) {
    console.log("Options Set to true\t" + location.pathname.toString());
    setPrevVal(location.pathname.toString());
    setOptionsFlg(true);
  }

  useEffect(() => {
    console.log(location.pathname);
  }, []);
  return (
    <div className="topBar-container">
      {/* <img
        src="D:\Autotekk\Tauri-App-V1\src-tauri\icons\128x128.png"
        alt=""
        id="Logo-topbar"
      /> */}
      <div className="logo-img-topbar"></div>
      <div className="top-bar-content">
        {optionsFlg && (
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
        )}
      </div>
      {/* <div className="top-bar-content">Company</div> */}
      <div className="top-bar-content">
        <div class="dropdown">
          <button class="dropbtn">Help</button>
          <div class="dropdown-content">
            <a
              href="#"
              className="company-items"
              onClick={() => navigate("/yourCompanies")}
            >
              Contact Us
            </a>
            <a href="#" className="company-items">
              Autotekk Support
            </a>
            <a href="#" className="company-items">
              Video Tutorial
            </a>
            <a href="#" className="company-items">
              View Release Notes
            </a>
            <a href="#" className="company-items">
              Check For Update
            </a>
            <a href="#" className="company-items">
              Version : V1.0.4-alpha
            </a>
          </div>
        </div>
      </div>
      {optionsFlg && (
        <div
          className="top-bar-content"
          onClick={() => props.setContent("shortcuts")}
        >
          <div class="dropdown">
            <button class="dropbtn">Shortcuts</button>
          </div>
        </div>
      )}
      {optionsFlg && (
        <div className="top-bar-content">
          <AiOutlineReload />
        </div>
      )}
      <div className="customer-support-data">
        Customer Support:
        <MdOutlineCall className="phone-icon-topBar" />
        <div className="pNumber-topBar">
          (+91) 123456789 ||{" "}
          <AiOutlineWhatsApp className="whatsapp-icon-topbar" /> (+91) 123456879
        </div>
      </div>
      <div className="top-bar-content-options-box">
        <div className="top-bar-content-options">
          <VscChromeMinimize
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
          <TfiClose id="titlebar-close" onClick={() => appWindow.close()} />
        </div>
      </div>
    </div>
  );
};
