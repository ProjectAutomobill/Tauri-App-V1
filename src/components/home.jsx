import React from "react";
import { useState } from "react";

import { SideBar } from "./sidebar";
import { MainSection } from "./mainSection";
import "./home.css";
export const Home = (props) => {
  // var [content, setContent] = useState("home");

  return (
    <div className="App-home">
      <div className="sideBar">
        <SideBar
          val1={props.content}
          val2={props.setContent}
          userNumber={props.userNumber.current}
          userCompany={props.userCompany.current}
        />
      </div>
      <div className="mainSection-home">
        <MainSection
          val1={props.content}
          userNumber={props.userNumber.current}
          userCompany={props.userCompany.current}
        />
      </div>
    </div>
  );
};
