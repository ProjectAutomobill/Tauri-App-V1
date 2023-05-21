// import React from 'react'
import { React, useState, useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting, AiFillPrinter } from "react-icons/ai";
// import {FiSearch} from 'react-icons/fi';
// import {AiOutlinePlus} from 'react-icons/ai';
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
// import { Link } from 'react-router-dom';
import "./purchaseOrder.css";
export const PurchaseOrder = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();

  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_purchaseOrder() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  return (
    <div className="main-purchaseOrder">
      <div className="upperDiv-purchaseOrder">
        <div className="upperDivPart1-purchaseOrder">
          <div className="input-business-purchaseOrder">
            {/* <input type="text" placeholder='•Enter Business Name' id='business-entry-purchaseOrder'></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-purchaseOrder"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-purchaseOrder"
              onClick={update_b_name_purchaseOrder}
            >
              Save
            </button>
          </div>

          <div className="marginDiv-purchaseOrder">
            <div className="saleBtnDiv-purchaseOrder">
              <BsFillPlusCircleFill className="plusSale-purchaseOrder" />
              {/* <button
                className="addBtnSale-purchaseOrder"
                onClick={navigateToSale}
              >
                Add Sale
              </button> */}
              <div className="addBtnSale-purchaseOrder">Add Sale</div>
            </div>
            <div className="purchaseBtnDiv-purchaseOrder">
              <BsFillPlusCircleFill className="plusPurchase-purchaseOrder" />
              {/* <button
                className="addBtnPurchase-purchaseOrder"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button> */}
              <div
                className="addBtnPurchase-purchaseOrder"
                // onClick={navigateToPurchase}
              >
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-purchaseOrder">
              <BsFillPlusCircleFill className="plusSaleMore-purchaseOrder" />
              <button className="addBtnMore-purchaseOrder">Add More</button>
            </div>
            <div className="vertical-line-upperPart-purchaseOrder"></div>

            <div className="settingBtnDiv-upperPart-purchaseOrder">
              <AiFillSetting className="setting-upperPart-purchaseOrder" />
            </div>
            <div className="printBtnDiv-upperPart-purchaseOrder">
              <AiFillPrinter className="print-upperPart-purchaseOrder" />
            </div>
          </div>
        </div>
        <div className="horizontal-line-purchaseOrder"></div>
        <div className="heading-purchaseOrder">ORDERS</div>
        <div
          className="horizontal-line-purchaseOrder"
          id="blue-line-purchaseOrder"
        ></div>
      </div>

      <div className="lowerBody-purchaseOrder">
        <div className="lowerBody-part1-purchaseOrder">
          <FaShoppingCart className="image-purchaseOrder" />
          <p className="paragraph-purchaseOrder">
            Make & share purchase orders & convert them to purchase invoice
            instantly.
          </p>
          <button className="add-your-first-estimate-purchaseOrder">
            Add Your First Purchase Order
          </button>
        </div>
      </div>
    </div>
  );
};
