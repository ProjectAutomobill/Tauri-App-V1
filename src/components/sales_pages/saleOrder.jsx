import { React, useState, useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
// import {FiSearch} from 'react-icons/fi';
import { Navigate, Link, useNavigate } from "react-router-dom";
// import {AiOutlinePlus} from 'react-icons/ai';
import { TbReport } from "react-icons/tb";
// import { Link } from 'react-router-dom';
import "./saleOrder.css";
import { invoke } from "@tauri-apps/api";

export const SaleOrder = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();

  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_saleOrder() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  return (
    <div className="main-saleOrder">
      <div className="upperDiv-saleOrder">
        <div className="upperDivPart1-saleOrder">
          <div className="input-business-saleOrder">
            {/* <input type="text" placeholder='•Enter Business Name' id='business-entry-saleOrder'></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-saleOrder"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-saleOrder"
              onClick={update_b_name_saleOrder}
            >
              Save
            </button>
          </div>

          <div className="marginDiv-saleOrder">
            <div className="saleBtnDiv-saleOrder">
              <BsFillPlusCircleFill className="plusSale-saleOrder" />
              <button className="addBtnSale-saleOrder" onClick={navigateToSale}>
                Add Sale
              </button>
            </div>
            <div className="purchaseBtnDiv-saleOrder">
              <BsFillPlusCircleFill className="plusSale-purchase-saleOrder" />
              <button
                className="addBtnPurchase-saleOrder"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button>
            </div>
            <div className="moreBtnDiv-saleOrder">
              <BsFillPlusCircleFill className="plusSaleMore-saleOrder" />
              <button className="addBtnMore-saleOrder">Add More</button>
            </div>
            <div className="settingBtnDiv-saleOrder">
              <AiFillSetting className="setting-saleOrder" />
            </div>
          </div>
        </div>
        <div className="horizontal-line-saleOrder"></div>
        <h3 className="heading-saleOrder">SALE ORDER</h3>
      </div>

      <div className="lowerBody-saleOrder">
        <div className="lowerBody-part1-saleOrder">
          <TbReport className="image-saleOrder" />
          <p className="paragraph-saleOrder">
            Make & share sale orders & convert them to sale invoice instantly.
          </p>
          <button className="add-your-first-estimate-saleOrder">
            Add Your First Sale Order
          </button>
        </div>
      </div>
    </div>
  );
};
