import React, { useEffect, useState } from "react";
import "./setting.css";
import { SidebarSetting } from "./settingsPages/sidebar_setting";
import { General } from "./settingsPages/general";
import { Transaction } from "./settingsPages/transaction";
import { TandG } from "./settingsPages/tandg";
import { TransactionMessage } from "./settingsPages/transactionMessage";
import { PrintSetting } from "./settingsPages/printSetting";
import { ItemSetting } from "./settingsPages/itemSetting";
import { UserManagement } from "./settingsPages/userManagement";
export const Setting = (props) => {
  const [selectedSetting, setSelectedSetting] = useState("General");

  useEffect(() => {}, []);
  return (
    <div className="body-setting">
      <div id="setting-sidebar">
        <SidebarSetting propSet={setSelectedSetting} />
      </div>
      <div id="mainsection-setting">
        {(() => {
          if (selectedSetting === "General") {
            return (
              <General
                userNumber={props.userNumber}
                userCompany={props.userCompany}
              />
            );
          } else if (selectedSetting === "Transaction") {
            return <Transaction />;
          } else if (selectedSetting === "TandG") {
            return <TandG />;
          } else if (selectedSetting === "TransactionMessage") {
            return <TransactionMessage />;
          } else if (selectedSetting === "Print") {
            return <PrintSetting />;
          } else if (selectedSetting === "itemSetting") {
            return <ItemSetting />;
          } else if (selectedSetting === "userManagement") {
            return <UserManagement />;
          }
        })()}
      </div>
    </div>
  );
};
