import React from "react";
import { Table } from "@mui/material";
import "./items.css";
import { ItemsTable } from "./tables/itemsTable";
import { TransactionTableItems } from "./tables/transactionTable-items";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiAlarm } from "react-icons/bi";
import { ItemsModal } from "./modals/itemsModal";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { invoke } from "@tauri-apps/api";

export const Items = (props) => {
  const [modalShowItem, setModalShowItem] = useState(false);
  const location = useLocation();
  const [cName, setCName] = useState(location.state.company);

  return (
    <div className="parties-items">
      <div className="upperDiv">
        <div className="upperDivPart1">
          <div className="input-business">
            <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry"
            ></input>
          </div>

          {/* <div className='middle-portion'>
                    PRODUCTS
                </div> */}

          <div className="marginDiv">
            <div className="saleBtnDiv">
              <BsFillPlusCircleFill className="plusSale" />
              <button className="addBtnSale">Add Sale</button>
            </div>
            <div className="purchaseBtnDiv">
              {/* <AiOutlinePlus className="plusSale" /> */}
              <BsFillPlusCircleFill className="plusSale-purchase" />
              <button className="addBtnPurchase">Add Purchase</button>
            </div>
            <div className="moreBtnDiv">
              <BsFillPlusCircleFill className="plusSaleMore" />
              <button className="addBtnMore">Add More</button>
            </div>
            <div className="settingBtnDiv">
              <AiFillSetting className="setting" />
            </div>
          </div>
          {/* <div className='horizontal-line'>fgyrfhj</div> */}
        </div>
        <div className="horizontal-line"></div>
        <h3 className="heading">PRODUCTS</h3>
      </div>

      <div className="lowerBody">
        <div className="leftDiv">
          <div className="leftDivbtnSearch">
            <FiSearch className="searchIcon" />
            <button className="partyBtn" onClick={() => setModalShowItem(true)}>
              <AiOutlinePlus className="plus" />
              Add Item
            </button>
          </div>
          <ItemsTable userNumber={props.userNumber} userCompany={cName} />
        </div>

        <div className="rightDiv">
          <div className="innerRightDiv">
            <div className="upperDivRight">
              <div className="upperDivRight1-items">
                <div className="upperDivRight1-name-items">
                  <b>P_NAME</b>
                </div>
                <div className="upperDivRight1-button-items">
                  <button className="button-items">Adjust Item</button>
                </div>
              </div>
              <div className="upperDivRight2-items">
                <div className="upperDivRight2-part1-items">
                  <div className="upperDivRight2-part1-purchasePrice-items">
                    {" "}
                    Purchase Price :{" "}
                  </div>
                  <div className="upperDivRight2-part1-salePrice-items">
                    {" "}
                    Sale Price:
                  </div>
                </div>

                <div className="upperDivRight2-part2-items">
                  <div className="upperDivRight2-part1-stockQuantity-items">
                    {" "}
                    Stock Quantity :{" "}
                  </div>
                  <div className="upperDivRight2-part1-stcokValue-items">
                    {" "}
                    Stock Value :
                  </div>
                </div>
              </div>
              \{" "}
            </div>

            <div className="lowerDivRight">
              <div className="transaction-search">
                <h3>Transaction</h3>
                <input
                  type="search"
                  name="search"
                  id=""
                  className="search-input"
                  placeholder="Search..."
                />
              </div>
              <div className="Ttable">
                <TransactionTableItems userNumber={props.userNumber} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ItemsModal
        show={modalShowItem}
        onHide={() => setModalShowItem(false)}
        userNumber={props.userNumber}
        userCompany={cName}
      />
    </div>
  );
};
