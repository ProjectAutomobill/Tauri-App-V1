import React, { useState } from "react";
import "./sidebar_setting.css";
import { BiSearch } from "react-icons/bi";
export const SidebarSetting = (props) => {
  const [selectedOption, setSelectedOption] = useState(1);
  function setProp(val) {
    props.propSet(val);
    console.log(val);
    setSelectedOption(0);
  }
  return (
    <div className="mainbody-sidebar-setting">
      <div className="heading-sidebar-setting-main">
        <div className="heading-setting-main">
          <div>Settings</div>
        </div>
        <BiSearch className="search-icon-setting" />
      </div>
      <div
        className={
          selectedOption == 1
            ? "heading-selected-sidebar-setting"
            : "heading-sidebar-setting"
        }
      >
        <div
          className={
            selectedOption == 1 ? "heading-selected-setting" : "heading-setting"
          }
          onClick={() => {
            setProp("General");
            setSelectedOption(1);
          }}
        >
          GENERAL
        </div>
      </div>
      <div
        className={
          selectedOption == 2
            ? "heading-selected-sidebar-setting"
            : "heading-sidebar-setting"
        }
      >
        <div
          className={
            selectedOption == 2 ? "heading-selected-setting" : "heading-setting"
          }
          onClick={() => {
            setProp("Transaction");
            setSelectedOption(2);
          }}
        >
          TRANSACTION
        </div>
      </div>
      <div
        className={
          selectedOption == 3
            ? "heading-selected-sidebar-setting"
            : "heading-sidebar-setting"
        }
      >
        <div
          className={
            selectedOption == 3 ? "heading-selected-setting" : "heading-setting"
          }
          onClick={() => {
            setProp("Print");
            setSelectedOption(3);
          }}
        >
          PRINT
        </div>
      </div>
      <div
        className={
          selectedOption == 4
            ? "heading-selected-sidebar-setting"
            : "heading-sidebar-setting"
        }
      >
        <div
          className={
            selectedOption == 4 ? "heading-selected-setting" : "heading-setting"
          }
          onClick={() => {
            setProp("TandG");
            setSelectedOption(4);
          }}
        >
          TAX & GST
        </div>
      </div>
      <div
        className={
          selectedOption == 5
            ? "heading-selected-sidebar-setting"
            : "heading-sidebar-setting"
        }
      >
        <div
          className={
            selectedOption == 5 ? "heading-selected-setting" : "heading-setting"
          }
          onClick={() => {
            setProp("UserManagement");
            setSelectedOption(5);
          }}
        >
          USER MANAGEMENT
        </div>
      </div>
      <div
        className={
          selectedOption == 6
            ? "heading-selected-sidebar-setting"
            : "heading-sidebar-setting"
        }
      >
        <div
          className={
            selectedOption == 6 ? "heading-selected-setting" : "heading-setting"
          }
          onClick={() => {
            setProp("TransactionMessage");
            setSelectedOption(6);
          }}
        >
          TRANSACTION MESSAGE
        </div>
      </div>
      <div
        className={
          selectedOption == 7
            ? "heading-selected-sidebar-setting"
            : "heading-sidebar-setting"
        }
      >
        <div
          className={
            selectedOption == 7 ? "heading-selected-setting" : "heading-setting"
          }
          onClick={() => {
            setProp("Party");
            setSelectedOption(7);
          }}
        >
          PARTY
        </div>
      </div>
      <div
        className={
          selectedOption == 8
            ? "heading-selected-sidebar-setting"
            : "heading-sidebar-setting"
        }
      >
        <div
          className={
            selectedOption == 8 ? "heading-selected-setting" : "heading-setting"
          }
          onClick={() => {
            setProp("itemSetting");
            setSelectedOption(8);
          }}
        >
          ITEM
        </div>
      </div>
    </div>
  );
};
