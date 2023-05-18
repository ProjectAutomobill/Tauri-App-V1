import React from "react";
import "./sidebar_setting.css";
import { BiSearch } from "react-icons/bi";
export const SidebarSetting = (props) => {
  function setProp(val) {
    props.propSet(val);
    console.log(val);
  }
  return (
    <div className="mainbody-sidebar-setting">
      <div className="heading-sidebar-setting-main">
        <div className="heading-setting-main">
          <div>Settings</div>
        </div>
        <BiSearch className="search-icon-setting" />
      </div>
      <div className="heading-sidebar-setting">
        <div className="heading-setting" onClick={() => setProp("General")}>
          GENERAL
        </div>
      </div>
      <div className="heading-sidebar-setting">
        <div className="heading-setting" onClick={() => setProp("Transaction")}>
          TRANSACTION
        </div>
      </div>
      <div className="heading-sidebar-setting">
        <div className="heading-setting" onClick={() => setProp("Print")}>
          PRINT
        </div>
      </div>
      <div className="heading-sidebar-setting">
        <div className="heading-setting" onClick={() => setProp("TandG")}>
          TAX & GST
        </div>
      </div>
      <div className="heading-sidebar-setting">
        <div
          className="heading-setting"
          onClick={() => setProp("UserManagement")}
        >
          USER MANAGEMENT
        </div>
      </div>
      <div className="heading-sidebar-setting">
        <div
          className="heading-setting"
          onClick={() => setProp("TransactionMessage")}
        >
          TRANSACTION MESSAGE
        </div>
      </div>
      <div className="heading-sidebar-setting">
        <div className="heading-setting" onClick={() => setProp("Party")}>
          PARTY
        </div>
      </div>
      <div className="heading-sidebar-setting">
        <div className="heading-setting" onClick={() => setProp("Item")}>
          ITEM
        </div>
      </div>
    </div>
  );
};
