import React, { useState } from "react";
import "./addNewCompany.css";
import { GiIndiaGate } from "react-icons/gi";
import { invoke } from "@tauri-apps/api";
import { useNavigate } from "react-router-dom";

export const AddNewCompany = (props) => {
  const [companyName, setCompanyName] = useState("");
  const [pnumber, setPNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function navigateToCompanies() {
    navigate("/yourCompanies");
  }

  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  function addNewBussiness() {
    console.log(props.userNumber.current);
    invoke("add_new_business", {
      number: props.userNumber.current,
      name: companyName,
      email: email,
      pnumber: pnumber,
    }).then((response) => {
      console.log(response);
      props.showToastMessage();
      wait(1000);
      navigateToCompanies();
    });
  }
  return (
    <div className="complete-page-business-addNewCompany">
      <div className="left-section-addNewCompany">
        <div className="image-content-addNewCompany">
          <div className="image-section-addNewCompany">
            {/* <img
              src="./assets/autotekk_logo-v4.jpeg"
              height="50px"
              width="50px"
            ></img> */}
          </div>
          <div className="content-ofImage-addNewCompany">
            Har Business banega
            <div className="content2-ofImage-addNewCompany">Digital</div>
            <GiIndiaGate className="after-content-icon-addNewCompany" />
          </div>
        </div>
      </div>
      <div className="right-section-addNewCompany">
        <div className="add-main-business-addNewCompany">
          {/* <div className="info-add-business-addNewCompany"> */}
          <div className="main-heading-add-business-addNewCompany">
            ADD BUSINESS
          </div>
          <div className="heading-withInputs-addNewCompany">
            <input
              className="input-business-addNewCompany"
              placeholder="Business Name"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="heading-withInputs-addNewCompany">
            <input
              className="input-business-addNewCompany"
              placeholder="Phone"
              type="text"
              onChange={(e) => setPNumber(e.target.value)}
            />
          </div>
          <div className="heading-withInputs-addNewCompany">
            <input
              className="input-business-addNewCompany"
              placeholder="Email "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="tAndc-addNewCompany">
            By clicking on the Login button I accept the
            <div className="tAndc-2-content-addNewCompany">
              terms and conditions.
            </div>
          </div>
          <div className="last-button-addNewCompany">
            <button
              className="value-ofButton-addNewCompany"
              onClick={addNewBussiness}
            >
              LOGIN
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
