import React from "react";
import "./topBar.css";
import { AiOutlineReload } from "react-icons/ai";
import { FaRegWindowMinimize } from "react-icons/fa";
import { BsTextareaResize } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { appWindow } from "@tauri-apps/api/window";

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

  return (
    <div className="topBar-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvrUnSvQymoN1-cYQv4YQBn6fShtchhOpbg&usqp=CAU"
        alt=""
        id="Logo-topbar"
      />
      <div className="top-bar-content">Company</div>
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
