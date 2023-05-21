import { React, useState, useEffect } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { Parties } from "./parties";
import { SaleInvoice } from "./saleInvoice";
import { DashBoard } from "./dashboard";
import "./report.css";
import { Dashboard } from "@mui/icons-material";
import { SideBarReport } from "./reportComponents/siderBar_report";
import { SaleInvoiceReport } from "./report_pages/saleInvoiceReport";
export const Report = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();
  const [sideBarFlg, setSideBarFlg] = useState("SaleInvoice");
  function goToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_report() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
  }
  return (
    <div className="main-report">
      <div className="upperDivPart1-report">
        <div className="input-business-report">
          {/* <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-report"
            ></input> */}
          <input
            type="text"
            placeholder="• Enter Business Name"
            id="business-entry-report"
            onChange={(e) => setNewBName(e.target.value)}
          ></input>
          <button
            id="business-name-save-btn-report"
            onClick={update_b_name_report}
          >
            Save
          </button>
        </div>

        {/* <div className='middle-portion'>
                PRODUCTS
            </div> */}

        <div className="marginDiv-report">
          <div className="saleBtnDiv-report">
            <BsFillPlusCircleFill className="plusSale-report" />
            {/* <button className="addBtnSale-report" onClick={goToSale}>
                Add Sale
              </button> */}
            <div className="addBtnSale-report">Add Sale</div>
          </div>
          <div className="purchaseBtnDiv-report">
            {/* <AiOutlinePlus className="plusSale" /> */}
            <BsFillPlusCircleFill className="plusPurchase-report" />
            {/* <button
                className="addBtnPurchase-report"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button> */}
            <div
              className="addBtnPurchase-report"
              // onClick={navigateToPurchase}
            >
              Add Purchase
            </div>
          </div>
          <div className="moreBtnDiv-report">
            <BsFillPlusCircleFill className="plusSaleMore-report" />
            <button className="addBtnMore-report">Add More</button>
          </div>
          <div className="vertical-line-upperPart-report"></div>

          <div className="settingBtnDiv-upperPart-report">
            <AiFillSetting className="setting-upperPart-report" />
          </div>
          <div className="printBtnDiv-upperPart-report">
            <AiFillPrinter className="print-upperPart-report" />
          </div>
        </div>
        {/* <div className='horizontal-line'>fgyrfhj</div> */}

        {/* <div className='horizontal-line-report'></div>
        <h3 className='heading-report'>SALE INVOICES</h3> */}
      </div>
      <div className="lowerDiv-report">
        <div className="left-part-report">
          <SideBarReport setSideBarFlg={setSideBarFlg} />
        </div>
        <div className="right-part-report">
          {(() => {
            if (sideBarFlg === "SaleInvoice") {
              return (
                <SaleInvoiceReport
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
};
