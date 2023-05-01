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
import { useLocation, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";

export const Items = (props) => {
  const [modalShowItem, setModalShowItem] = useState(false);
  const location = useLocation();
  // const [cName, setCName] = useState(location.state.company);
  const [cName, setCName] = useState();
  const [itemTransaction, setItemTransaction] = useState();
  const [itemDetails, setItemDetails] = useState();
  const [itemNumber, setItemNumber] = useState();
  const [itemEmail, setItemEmail] = useState();
  const [itemAddress, setItemAddress] = useState();
  const [itemGSTIN, setItemGSTIN] = useState();
  const [stateChange, setStateChange] = useState(true);
  const [b_name, setNewBName] = useState();
  const navigate = useNavigate();

  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }

  async function getItemDetails() {
    // console.log("???????????????????????????????????????????????????????");
    // console.log(partyTransaction);
    invoke("get_item_details", {
      number: props.userNumber,
      company: props.userCompany,
      itemName: itemTransaction,
    })
      // `invoke` returns a Promise
      .then((response) => {
        setItemDetails(JSON.parse(response));
        // console.log("Party Data : " + partyDetails["Number"]);
        setItemNumber(itemDetails["Number"]);
        setItemEmail(itemDetails["Email"]);
        setItemAddress(itemDetails["Address"]);
        setItemGSTIN(itemDetails["GSTIN"]);
      });
  }
  function update_b_name_items() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
  }
  return (
    <div className="parties-items-items">
      <div className="upperDiv-items">
        <div className="upperDivPart1-items">
          <div className="input-business-items">
            {/* <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-items"
            ></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-items"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-items"
              onClick={update_b_name_items}
            >
              Save
            </button>
          </div>

          {/* <div className='middle-portion'>
                    PRODUCTS
                </div> */}

          <div className="marginDiv-items">
            <div className="saleBtnDiv-items">
              <BsFillPlusCircleFill className="plusSale-items" />
              <button className="addBtnSale-items" onClick={navigateToSale}>
                Add Sale
              </button>
            </div>
            <div className="purchaseBtnDiv-items">
              {/* <AiOutlinePlus className="plusSale" /> */}
              <BsFillPlusCircleFill className="plusSale-purchase-items" />
              <button
                className="addBtnPurchase-items"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button>
            </div>
            <div className="moreBtnDiv-items">
              <BsFillPlusCircleFill className="plusSaleMore-items" />
              <button className="addBtnMore-items">Add More</button>
            </div>
            <div className="settingBtnDiv-items">
              <AiFillSetting className="setting-items" />
            </div>
          </div>
          {/* <div className='horizontal-line'>fgyrfhj</div> */}
        </div>
        <div className="horizontal-line-items"></div>
        <div className="heading-items">PRODUCTS</div>
        <div className="horizontal-line-items" id="blue-line-items"></div>
      </div>

      <div className="lowerBody-items">
        <div className="leftDiv-items">
          <div className="leftDivbtnSearch-items">
            <FiSearch className="searchIcon-items" />
            <button
              className="partyBtn-items"
              onClick={() => setModalShowItem(true)}
            >
              <AiOutlinePlus className="plus-items" />
              Add Item
            </button>
          </div>
          <ItemsTable
            userNumber={props.userNumber}
            userCompany={props.userCompany}
            setTrans={setItemTransaction}
            itemName={itemTransaction}
            setStateChange={setStateChange}
            stateChange={stateChange}
            getItemDetails={getItemDetails}
          />
        </div>

        <div className="rightDiv-items">
          <div className="innerRightDiv-items">
            <div className="upperDivRight-items">
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
                    <div className="label-upper-partyDetails-items">
                      Purchase Price :{" "}
                    </div>
                  </div>
                  <div className="upperDivRight2-part1-salePrice-items">
                    {" "}
                    <div className="label-upper-partyDetails-items">
                      Sale Price: :{" "}
                    </div>
                  </div>
                </div>

                <div className="upperDivRight2-part2-items">
                  <div className="upperDivRight2-part1-stockQuantity-items">
                    <div className="label-upper-partyDetails-items">
                      Stock Quantity :{" "}
                    </div>
                  </div>
                  <div className="upperDivRight2-part1-stockValue-items">
                    {" "}
                    <div className="label-upper-partyDetails-items">
                      Stock Value :{" "}
                    </div>
                  </div>
                </div>
              </div>
              \{" "}
            </div>

            <div className="lowerDivRight-items">
              <div className="transaction-search-items">
                <h3>Transaction</h3>
                <input
                  type="search"
                  name="search"
                  id=""
                  className="search-input-items"
                  placeholder="Search..."
                />
              </div>
              <div className="Ttable-items">
                <TransactionTableItems
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                  itemName={itemTransaction}
                  // userCompany={cName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ItemsModal
        show={modalShowItem}
        onHide={() => setModalShowItem(false)}
        userNumber={props.userNumber}
        userCompany={props.userCompany}
      />
    </div>
  );
};
