import React, { useEffect } from "react";
import { Table } from "@mui/material";
import "./items.css";
import { ItemsTable } from "./tables/itemsTable";
import { TransactionTableItems } from "./tables/transactionTable-items";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus, AiFillPrinter } from "react-icons/ai";
import { BsFillPlusCircleFill, BsSearch } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiAlarm } from "react-icons/bi";
import { ItemsModal } from "./modals/itemsModal";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Items = (props) => {
  const showToastMessage = () => {
    toast.success("Item Added !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const [modalShowItem, setModalShowItem] = useState(false);
  const location = useLocation();
  // const [cName, setCName] = useState(location.state.company);
  const [cName, setCName] = useState();
  const [itemTransaction, setItemTransaction] = useState("");
  const [itemDetails, setItemDetails] = useState();
  const [itemNumber, setItemNumber] = useState();
  const [itemEmail, setItemEmail] = useState();
  const [itemAddress, setItemAddress] = useState();
  const [itemGSTIN, setItemGSTIN] = useState();

  const [wholesalePrice, setWholesalePrice] = useState(0);
  const [retailPrice, setRetailPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [stockValue, setStockValue] = useState(0);
  const [prevItem, setPrevItem] = useState("");

  const [stateChange, setStateChange] = useState(true);
  const [b_name, setNewBName] = useState();
  const [itemPage, setItemPage] = useState(0);
  const [refresh, setrefresh] = useState(0);
  const navigate = useNavigate();

  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  if (prevItem != itemTransaction) {
    // console.log(partyTransaction + "------------------");
    setPrevItem(itemTransaction);
    invoke("get_item_details", {
      number: props.userNumber,
      company: props.userCompany,
      item_name: itemTransaction,
    })
      // `invoke` returns a Promise
      .then(async (response) => {
        setItemDetails(JSON.parse(response));
        // setPartyDetails(JSON.parse(response));
        // console.log("Party Data : " + partyDetails["Number"]);
        // setPartyNumber(partyDetails["Number"]);
        // setPartyEmail(partyDetails["Email"]);
        // setPartyAddress(partyDetails["Address"]);
        // setPartyGSTIN(partyDetails["GSTIN"]);

        await setWholesalePrice(JSON.parse(response).WholesalePrice);
        await setRetailPrice(JSON.parse(response).SalePrice);
        await setStock(JSON.parse(response).Units);
        await setStockValue(
          parseInt(JSON.parse(response).Units) *
            parseInt(JSON.parse(response).SalePrice)
        );
      });
  }
  async function getItemDetails() {
    // console.log("???????????????????????????????????????????????????????");
    // console.log(partyTransaction);
    invoke("get_item_details", {
      number: props.userNumber,
      company: props.userCompany,
      item_name: itemTransaction,
    })
      // `invoke` returns a Promise
      .then(async (response) => {
        setItemDetails(JSON.parse(response));
        // console.log("Party Data : " + partyDetails["Number"]);
        await setWholesalePrice(JSON.parse(response).WholesalePrice);
        await setRetailPrice(JSON.parse(response).SalePrice);
        await setStock(JSON.parse(response).Units);
        await setStockValue(
          parseInt(JSON.parse(response).Units) *
            parseInt(JSON.parse(response).SalePrice)
        );
      });
  }
  function update_b_name_items() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
  }

  // useEffect((()=>{
  //   getItemDetails();
  // }),[]);
  return (
    <div className="parties-items-items">
      <ToastContainer />
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
              {/* <button className="addBtnSale-items" onClick={navigateToSale}>
                Add Sale
              </button> */}
              <div className="addBtnSale-items">Add Sale</div>
            </div>
            <div className="purchaseBtnDiv-items">
              {/* <AiOutlinePlus className="plusSale" /> */}
              <BsFillPlusCircleFill className="plusPurchase-items" />
              {/* <button
                className="addBtnPurchase-items"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button> */}
              <div
                className="addBtnPurchase-items"
                // onClick={navigateToPurchase}
              >
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-items">
              <BsFillPlusCircleFill className="plusSaleMore-items" />
              <button className="addBtnMore-items">Add More</button>
            </div>
            <div className="vertical-line-upperPart-items"></div>

            <div className="settingBtnDiv-upperPart-items">
              <AiFillSetting className="setting-upperPart-items" />
            </div>
            <div className="printBtnDiv-upperPart-items">
              <AiFillPrinter className="print-upperPart-items" />
            </div>
          </div>
          {/* <div className='horizontal-line'>fgyrfhj</div> */}
        </div>
        <div className="horizontal-line-items"></div>
        <div className="heading-items">
          <div
            className={itemPage == 0 ? "item-page-1-selected" : "item-page-1"}
            onClick={() => setItemPage(0)}
          >
            PRODUCTS
          </div>
          <div
            className={itemPage == 1 ? "item-page-1-selected" : "item-page-1"}
            onClick={() => setItemPage(1)}
          >
            SERVICES
          </div>
          <div
            className={itemPage == 2 ? "item-page-1-selected" : "item-page-1"}
            onClick={() => setItemPage(2)}
          >
            CATEGORY
          </div>
          <div
            className={itemPage == 3 ? "item-page-1-selected" : "item-page-1"}
            onClick={() => setItemPage(3)}
          >
            UNITS
          </div>
        </div>
        {itemPage == 0 && (
          <div className="horizontal-line-items" id="blue-line-items"></div>
        )}
        {itemPage == 1 && (
          <div className="horizontal-line-items" id="blue-line-items-25"></div>
        )}
        {itemPage == 2 && (
          <div className="horizontal-line-items" id="blue-line-items-50"></div>
        )}
        {itemPage == 3 && (
          <div className="horizontal-line-items" id="blue-line-items-75"></div>
        )}
        {/* <div className="horizontal-line-items" id="blue-line-items"></div> */}
      </div>

      {itemPage == 0 && (
        <div className="lowerBody-items">
          <div className="leftDiv-items">
            <div className="leftDivbtnSearch-items">
              <div className="searchIcon-class-items">
                <BsSearch className="searchIcon-items" />
              </div>
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
              refresh={refresh}
              setrefresh={setrefresh}
            />
          </div>

          <div className="rightDiv-items">
            <div className="innerRightDiv-items">
              <div className="upperDivRight-items">
                <div className="upperDivRight1-items">
                  <div className="upperDivRight1-name-items">
                    <b>s{itemTransaction}</b>
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
                        PURCHASE PRICE :
                        <div className="blue-text">{wholesalePrice}</div>
                      </div>
                    </div>
                    <div className="upperDivRight2-part1-salePrice-items">
                      {" "}
                      <div className="label-upper-partyDetails-items">
                        SALE PRICE :
                        <div className="blue-text">{retailPrice}</div>
                      </div>
                    </div>
                  </div>

                  <div className="upperDivRight2-part2-items">
                    <div className="upperDivRight2-part1-stockQuantity-items">
                      <div className="label-upper-partyDetails-items">
                        STOCK QUANTITY :<div className="blue-text">{stock}</div>
                      </div>
                    </div>
                    <div className="upperDivRight2-part1-stockValue-items">
                      {" "}
                      <div className="label-upper-partyDetails-items">
                        STOCK VALUE :
                        <div className="blue-text">{stockValue}</div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>

              <div className="lowerDivRight-items">
                <div className="transaction-search-items">
                  <h6 className="transaction-lowerDiv-items">TRANSACTIONS</h6>
                  <input
                    type="search"
                    name="search"
                    id=""
                    className="search-input-items"
                    placeholder="Search"
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
      )}
      <ItemsModal
        show={modalShowItem}
        onHide={() => setModalShowItem(false)}
        userNumber={props.userNumber}
        userCompany={props.userCompany}
        getItemDetails={getItemDetails}
        setrefresh={setrefresh}
        toastMessage={showToastMessage}
      />
    </div>
  );
};
