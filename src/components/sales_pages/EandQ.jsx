import { React, useState, useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
// import {FiSearch} from 'react-icons/fi';
// import {AiOutlinePlus} from 'react-icons/ai';
import { TbReport } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./EandQ.css";
import { invoke } from "@tauri-apps/api";

export const EandQ = (props) => {
  const [b_name, setNewBName] = useState();
  const navigate = useNavigate();
  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_saleEandQ() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  function navigate_to_add_EandQ() {
    navigate("/EandQ");
  }
  return (
    <div className="main-saleEandQ">
      <div className="upperDiv-saleEandQ">
        <div className="upperDivPart1-saleEandQ">
          <div className="input-business-saleEandQ">
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-saleEandQ"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-saleEandQ"
              onClick={update_b_name_saleEandQ}
            >
              Save
            </button>
            {/* <input type="text" placeholder='•Enter Business Name' id='business-entry-saleEandQ'></input> */}
          </div>

          <div className="marginDiv-saleEandQ">
            <div className="saleBtnDiv-saleEandQ">
              <BsFillPlusCircleFill className="plusSale-saleEandQ" />
              <button className="addBtnSale-saleEandQ" onClick={navigateToSale}>
                Add Sale
              </button>
            </div>
            <div className="purchaseBtnDiv-saleEandQ">
              <BsFillPlusCircleFill className="plusSale-purchase-saleEandQ" />
              <button
                className="addBtnPurchase-saleEandQ"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button>
            </div>
            <div className="moreBtnDiv-saleEandQ">
              <BsFillPlusCircleFill className="plusSaleMore-saleEandQ" />
              <button className="addBtnMore-saleEandQ">Add More</button>
            </div>
            <div className="settingBtnDiv-saleEandQ">
              <AiFillSetting className="setting-saleEandQ" />
            </div>
          </div>
        </div>
        <div className="horizontal-line-saleEandQ"></div>
        <div className="heading-saleEandQ">ESTIMATES/QUOTATIONS</div>
        <div
          className="horizontal-line-saleEandQ"
          id="blue-line-saleEandQ"
        ></div>
      </div>

      <div className="lowerBody-saleEandQ">
        <div className="lowerBody-part1-saleEandQ">
          <TbReport className="image-saleEandQ" />
          <p className="paragraph-saleEandQ">
            Make Estimates/Quotations/Proforma Invoices and share with your
            parties by WhatsApp, Email or Printed copies. You can convert them
            to Sale invoices later by just click of a button
          </p>
          <button
            className="add-your-first-estimate-saleEandQ"
            onClick={navigate_to_add_EandQ}
          >
            Add Your First Estimate
          </button>
        </div>
      </div>
    </div>
  );
};
