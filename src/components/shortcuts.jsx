import { React, useState, useEffect } from "react";
import "./shortcuts.css";
import { AiFillSetting, AiOutlinePlus, AiFillPrinter } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { invoke } from "@tauri-apps/api";
import { Link, useLocation, useNavigate } from "react-router-dom";
export const Shortcuts = (props) => {
  const [stateChange, setStateChange] = useState(true);
  const location = useLocation();
  // const [cName, setCName] = useState(location.state.company);
  const [cName, setCName] = useState();
  const [b_name, setNewBName] = useState();
  const navigate = useNavigate();
  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_shortcuts() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
  }
  return (
    <div className="shortcuts-items-shortcuts">
      <div className="upperDiv-shortcuts">
        <div className="upperDivPart1-shortcuts">
          <div className="input-business-shortcuts">
            {/* <input
            type="text"
            placeholder="•Enter Business Name"
            id="business-entry-shortcuts"
          ></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-shortcuts"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-shortcuts"
              onClick={update_b_name_shortcuts}
            >
              Save
            </button>
          </div>

          {/* <div className='middle-portion'>
                      PRODUCTS
                  </div> */}

          <div className="marginDiv-shortcuts">
            <div className="saleBtnDiv-shortcuts">
              <BsFillPlusCircleFill className="plusSale-shortcuts" />
              {/* <button className="addBtnSale-shortcuts" onClick={navigateToSale}>
              Add Sale
            </button> */}
              <div className="addBtnSale-shortcuts">Add Sale</div>
              {/* <button className="addBtnSale-dashboard" onClick={navigateToSale}>
              Add Sale
            </button> */}
            </div>
            <div className="purchaseBtnDiv-shortcuts">
              {/* <AiOutlinePlus className="plusSale" /> */}
              <BsFillPlusCircleFill className="plusPurchase-shortcuts" />
              {/* <button
              className="addBtnPurchase-shortcuts"
              onClick={navigateToPurchase}
            >
              Add Purchase
            </button> */}
              <div
                className="addBtnPurchase-shortcuts"
                // onClick={navigateToPurchase}
              >
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-shortcuts">
              <BsFillPlusCircleFill className="plusSaleMore-shortcuts" />
              <button className="addBtnMore-shortcuts">Add More</button>
            </div>
            {/* <div className="settingBtnDiv-shortcuts">
            <AiFillSetting className="setting-shortcuts" />
          </div> */}

            <div className="vertical-line-upperPart-shortcuts"></div>

            <div className="settingBtnDiv-upperPart-shortcuts">
              <AiFillSetting className="setting-upperPart-shortcuts" />
            </div>
            <div className="printBtnDiv-upperPart-shortcuts">
              <AiFillPrinter className="print-upperPart-shortcuts" />
            </div>
          </div>
          {/* <div className='horizontal-line'>fgyrfhj</div> */}
        </div>
        <div className="horizontal-line-shortcuts"></div>
        <div className="heading-shortcuts">SHORTCUTS</div>
        <div
          className="horizontal-line-shortcuts"
          id="blue-line-shortcuts"
        ></div>
      </div>

      <div className="lowerBody-shortcuts">
        <div className="part-one-lower-body-shortcuts">
          <div className="heading-lowerbody-shortcuts">
            <div className="action-marker-shortcuts"></div>
            <div className="heading-text-lower-shortcuts">Actions</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Party to Party Transfer</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">J</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Sale</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">S</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Purchase</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">P</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Payment In</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">I</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Payment Out</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">O</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Expense</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">E</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Add Party</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">N</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Add Item</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">A</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Sale Order</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">F</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Purchase Order</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">G</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Delivery Challan</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">D</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Estimate</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">M</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Credit Note./Sale Return</div>
            <div className="box1-data-div-shortcuts">ALT</div>
            <div className="box2-data-div-shortcuts">R</div>
          </div>
        </div>
        <div className="part-two-lower-body-shortcuts">
          <div className="heading-lowerbody-shortcuts">
            <div className="navigation-marker-shortcuts"></div>
            <div className="heading-text-lower-shortcuts">Navigation</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Home</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">H</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Parties</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">P</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Items</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">I</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Report</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">R</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Bank Accounts</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">B</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Cash In Hand</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">C</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Expenses</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">E</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Other Incomes</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">N</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Orders</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">O</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Estimate/Quotations</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">S</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Cheques</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">U</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Settings</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">1</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">View Print Center</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">2</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Calculator</div>
            <div className="box1-data-div-G-shortcuts">SHIFT</div>
            <div className="box2-data-div-G-shortcuts">3</div>
          </div>
        </div>
        <div className="part-three-lower-body-shortcuts">
          <div className="heading-lowerbody-shortcuts">
            <div className="activity-marker-shortcuts"></div>
            <div className="heading-text-lower-shortcuts">Activites</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Save</div>
            <div className="box1-data-div-B-shortcuts">CTRL</div>
            <div className="box2-data-div-B-shortcuts">S</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Save & New</div>
            <div className="box1-data-div-B-shortcuts">CTRL</div>
            <div className="box2-data-div-B-shortcuts">S</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Save & Print</div>
            <div className="box1-data-div-B-shortcuts">CTRL</div>
            <div className="box2-data-div-B-shortcuts">P</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Save & Preview</div>
            <div className="box1-data-div-B-shortcuts">CTRL</div>
            <div className="box2-data-div-B-shortcuts">R</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Generate Eway Bill</div>
            <div className="box1-data-div-B-shortcuts">CTRL</div>
            <div className="box2-data-div-B-shortcuts">E</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Generate e-Invoice</div>
            <div className="box1-data-div-B-shortcuts">CTRL</div>
            <div className="box2-data-div-B-shortcuts">I</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Open New Tab</div>
            <div className="box1-data-div-B-shortcuts">CTRL</div>
            <div className="box2-data-div-B-shortcuts">T</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Close Current Tab</div>
            <div className="box1-data-div-B-shortcuts">CTRL</div>
            <div className="box2-data-div-B-shortcuts">W</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Open Next Tab</div>
            <div className="box1-data-div-B-shortcuts">CTRL</div>
            <div className="box2-data-div-B-shortcuts">Tab</div>
          </div>
          <div className="data-div-shortcuts">
            <div className="data-text-shortcuts">Open Previous Tab</div>
            <div className="box1-data-div-B-shortcuts">CTRL</div>
            <div className="box1-data-div-B-shortcuts">SHIFT</div>
            <div className="box2-data-div-B-shortcuts">Tab</div>
          </div>
        </div>
      </div>
    </div>
  );
};
