import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
// import {FiSearch} from 'react-icons/fi';
// import {AiOutlinePlus} from 'react-icons/ai';
import { FaTruck } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
import "./deliveryChallan.css";

export const DeliveryChallan = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();

  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_deliveryChallan() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
  }
  return (
    <div className="main-deliveryChallan">
      <div className="upperDiv-deliveryChallan">
        <div className="upperDivPart1-deliveryChallan">
          <div className="input-business-deliveryChallan">
            {/* <input type="text" placeholder='•Enter Business Name' id='business-entry-deliveryChallan'></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-deliveryChallan"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-deliveryChallan"
              onClick={update_b_name_deliveryChallan}
            >
              Save
            </button>
          </div>

          <div className="marginDiv-deliveryChallan">
            <div className="saleBtnDiv-deliveryChallan">
              <BsFillPlusCircleFill className="plusSale-deliveryChallan" />
              <button
                className="addBtnSale-deliveryChallan"
                onClick={navigateToSale}
              >
                Add Sale
              </button>
            </div>
            <div className="purchaseBtnDiv-deliveryChallan">
              <BsFillPlusCircleFill className="plusSale-purchase-deliveryChallan" />
              <button
                className="addBtnPurchase-deliveryChallan"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button>
            </div>
            <div className="moreBtnDiv-deliveryChallan">
              <BsFillPlusCircleFill className="plusSaleMore-deliveryChallan" />
              <button className="addBtnMore-deliveryChallan">Add More</button>
            </div>
            <div className="settingBtnDiv-deliveryChallan">
              <AiFillSetting className="setting-deliveryChallan" />
            </div>
          </div>
        </div>
        <div className="horizontal-line-deliveryChallan"></div>
        <div className="heading-deliveryChallan">DELIVERY CHALLAN</div>
        <div
          className="horizontal-line-deliveryChallan"
          id="blue-line-deliveryChallan"
        ></div>
      </div>

      <div className="lowerBody-deliveryChallan">
        <div className="lowerBody-part1-deliveryChallan">
          <FaTruck className="image-deliveryChallan" />
          <p className="paragraph-deliveryChallan">
            Make & share delivery challan with your customers & convert it to
            sale whenever you want.
          </p>
          <button className="add-your-first-estimate-deliveryChallan">
            Add Your First Delivery Challan
          </button>
        </div>
      </div>
    </div>
  );
};
