import React, { useState, useLayoutEffect } from "react";
import "./general.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { useEffect } from "react";

export const General = (props) => {
  const [eq, setEQ] = useState("init");
  const [so, setSO] = useState("init");
  const [dc, setDC] = useState("init");
  const [generalSetting, setGeneralSetting] = useState(0);
  const [prev, setPrev] = useState(false);
  const [reloadFlg, setReloadFlg] = useState(false);
  //================================================================
  function handleChange() {
    var a = 0;
    console.log(eq + ">>>>>>>>>>>>>>>");
    if (!eq) {
      a = 1;
    }

    invoke("update_eq", {
      number: props.userNumber.current,
      company: props.userCompany.current,
      value: a.toString(),
    }).then((response) => console.log(JSON.parse(response)));

    wait(1000);

    invoke("general_setting", {
      number: props.userNumber.current,
      company: props.userCompany.current,
    }).then(async (response) => {
      setGeneralSetting(JSON.parse(response));
      console.log(generalSetting);
      await setEQ(JSON.parse(response)["settings"]["eq"]);
      await setSO(JSON.parse(response)["settings"]["so"]);
    });
  }
  function toggleSO() {
    var a = 0;
    if (!so) {
      a = 1;
    }

    invoke("update_so", {
      number: props.userNumber.current,
      company: props.userCompany.current,
      value: a.toString(),
    }).then((response) => console.log(JSON.parse(response)));

    wait(1000);

    invoke("general_setting", {
      number: props.userNumber.current,
      company: props.userCompany.current,
    }).then(async (response) => {
      setGeneralSetting(JSON.parse(response));
      console.log(generalSetting);
      await setEQ(JSON.parse(response)["settings"]["eq"]);
      await setSO(JSON.parse(response)["settings"]["so"]);
    });
  }

  function toggleDC() {
    var a = 0;
    if (!dc) {
      a = 1;
    }

    invoke("update_dc", {
      number: props.userNumber.current,
      company: props.userCompany.current,
      value: a.toString(),
    }).then((response) => console.log(JSON.parse(response)));

    wait(1000);

    invoke("general_setting", {
      number: props.userNumber.current,
      company: props.userCompany.current,
    }).then(async (response) => {
      setGeneralSetting(JSON.parse(response));
      console.log(generalSetting);
      await setEQ(JSON.parse(response)["settings"]["eq"]);
      await setSO(JSON.parse(response)["settings"]["so"]);
      await setDC(JSON.parse(response)["settings"]["dc"]);
    });
  }
  //================================================================
  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  useEffect(() => {
    invoke("general_setting", {
      number: props.userNumber.current,
      company: props.userCompany.current,
    }).then(async (response) => {
      setGeneralSetting(JSON.parse(response));
      console.log(JSON.parse(response));
      // await setEQ(JSON.parse(response)["settings"].eq);
      // await setSO(JSON.parse(response)["settings"].so);
      // await setSO(JSON.parse(response)["settings"].dc);
      // console.log(
      //   "UseEffect is called\t" + JSON.parse(response)["settings"]["eq"]
      // );
    });
  }, []);
  // useLayoutEffect(() => {
  //   invoke("general_setting", {
  //     number: props.userNumber.current,
  //     company: props.userCompany.current,
  //   }).then(async (response) => {
  //     setGeneralSetting(JSON.parse(response));
  //     console.log(JSON.parse(response));
  //     await setEQ(JSON.parse(response)["settings"]["eq"]);
  //     console.log(
  //       "UseLayOutEffect is called\t" + JSON.parse(response)["settings"]["eq"]
  //     );
  //   });
  // }, []);
  return (
    <div className="mainBody-general">
      {generalSetting != 0 && (
        <>
          <div className="partA-general">
            <div className="heading-general-setting">
              <div className="heading-text-div-setting">Application</div>
            </div>
            <div className="checkbox-data">
              <input type="checkbox" name="" className="checkbox-input" />
              <div className="checkbox-data-text" id="flexCheckDefault">
                Enable Passcode
              </div>
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
                // checked={generalSetting["eq"]}
                onClick={async (e) => {
                  // await setEQ(
                  //   // generalSetting != 0 ? generalSetting["settings"]["eq"] : false
                  //   // !generalSetting["settings"]["eq"]
                  // );
                  // wait(2000);
                  handleChange();
                }}
                // defaultChecked={generalSetting["settings"]["eq"]}
                defaultChecked={generalSetting.settings.eq}
                // onChange={(e) => handleChange()}
              />
              <div className="checkbox-data-text">Estimate/Quotation</div>
              <AiFillInfoCircle className="information-icon-general" />
            </div>
            <div className="checkbox-data">
              <input
                type="checkbox"
                name=""
                className="checkbox-input"
                onClick={async (e) => {
                  toggleSO();
                }}
                // defaultChecked={generalSetting["settings"]["so"]}
                defaultChecked={generalSetting.settings.so}
              />
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
              <input
                type="checkbox"
                name=""
                className="checkbox-input"
                onClick={async (e) => {
                  toggleDC();
                }}
                // defaultChecked={generalSetting["settings"]["dc"]}
                defaultChecked={generalSetting.settings.dc}
              />
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
        </>
      )}
    </div>
  );
};
