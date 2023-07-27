import React, { useState } from "react";
import "./general.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { useEffect } from "react";

export const General = (props) => {
  const [eq, setEQ] = useState(false);
  const [generalSetting, setGeneralSetting] = useState();
  const [prev, setPrev] = useState(false);
  const [reloadFlg, setReloadFlg] = useState(false);
  // const [eqState, setEQState] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = JSON.stringify(rows);
  //   console.log(formData);
  // };

  // if (prev != generalSetting["eq"]) {
  //   setReloadFlg(!reloadFlg);
  //   setPrev(generalSetting);
  // }
  function handleChange() {
    var a = 0;
    console.log(eq + ">>>>>>>>>>>>>>>");
    if (eq) {
      a = 1;
    }

    invoke("update_eq", {
      number: "789456123",
      company: "AutotekkV2",
      value: a.toString(),
    }).then((response) => console.log(JSON.parse(response)));

    invoke("general_setting", {
      number: "789456123",
      company: "AutotekkV2",
    }).then((response) => setGeneralSetting(JSON.parse(response)));
  }
  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  useEffect(() => {
    invoke("general_setting", {
      number: "789456123",
      company: "AutotekkV2",
    }).then((response) => {
      setGeneralSetting(JSON.parse(response));
      wait(2000);
    });
  }, []);
  return (
    <div className="mainBody-general">
      <div className="partA-general">
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">Application</div>
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Enable Passcode</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <div className="checkbox-data-text">Business Currency</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <div className="checkbox-data-text">Amount</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">GSTIN Number</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">More Transactions</div>
        </div>
        <div className="checkbox-data">
          <input
            type="checkbox"
            name=""
            className="checkbox-input"
            // value={generalSetting["eq"]}
            checked={generalSetting ? generalSetting["eq"] : false}
            onClick={(e) => {
              setEQ(!generalSetting["eq"]);
              wait(2000);
              handleChange();
            }}
            onChange={() => handleChange()}
          />
          <div className="checkbox-data-text">Estimate/Quotation</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Sale/Purchase Order</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Other Income</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Fixed Assets (FA)</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Delivery Challan</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <div className="margin-div-general"></div>
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">
            Goods return on <b>Delivery Challan</b>
          </div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <div className="margin-div-general"></div>
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">
            Print amount in <b>Delivery Challan</b>
          </div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
      </div>
      <div className="partA-general">
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">Multi Firm</div>
        </div>
        <div className="checkbox-data-multifirm">
          <input type="radio" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Company</div>
          <div className="default-multifirm">Default</div>
          {/* <AiFillInfoCircle className="information-icon-general" /> */}
        </div>
      </div>
      <div className="partA-general">
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">Backup</div>
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Auto Backup</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
      </div>
    </div>
  );
};
