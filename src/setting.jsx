import React, { useState } from "react";
import "./setting.css";
import { SidebarSetting } from "./settingsPages/sidebar_setting";
import { General } from "./settingsPages/general";
export const Setting = () => {
  const [selectedSetting, setSelectedSetting] = useState();

  return (
    <div className="body-setting">
      <div id="setting-sidebar">
        <SidebarSetting propSet={setSelectedSetting} />
      </div>
      <div id="mainsection-setting">
        <General />
      </div>
    </div>
  );
};
