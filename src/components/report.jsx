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
import { PurchaseBillsReport } from "./report_pages/purchaseBillReport";
import { Daybook } from "./report_pages/daybook";
import { AllTransaction } from "./report_pages/allTransaction";
import { CashFlowReport } from "./report_pages/cashFlowReport";
import { PartyWiseProfitAndLossReport } from "./report_pages/partyWiseProfitAndLossReport";
import { AllPartiesReport } from "./report_pages/allPartiesReport";
import { PartyReportByItemReport } from "./report_pages/partyReportbyItemReport";
import { SalePurchaseByPartyReport } from "./report_pages/salePurchaseByPartyReport";
import { SalePurchaseByPartyGroupReport } from "./report_pages/salePurchaseByPartyGroupReport";
import { PartyStatementReport } from "./report_pages/partyStatementReport";
import { SaleSummaryByHSNReport } from "./report_pages/saleSummaryByHSNReport";
import { FormNo27EQReport } from "./report_pages/formNo27EQReport";
import { TCSReceivableReport } from "./report_pages/tcsReceivableReport";
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
            } else if (sideBarFlg === "PurchaseBills") {
              return (
                <PurchaseBillsReport
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            } else if (sideBarFlg === "DayBook") {
              return (
                <Daybook
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            } else if (sideBarFlg === "AllTransaction") {
              return (
                <AllTransaction
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            } else if (sideBarFlg === "CashFlowReport") {
              return (
                <CashFlowReport
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            } else if (sideBarFlg === "PartyStatementReport") {
              return (
                <PartyStatementReport
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            } else if (sideBarFlg === "PartyWiseProfitAndLossReport") {
              return (
                <PartyWiseProfitAndLossReport
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            } else if (sideBarFlg === "AllPartiesReport") {
              return (
                <AllPartiesReport
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            } else if (sideBarFlg === "PartyReportByItemReport") {
              return (
                <PartyReportByItemReport
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            } else if (sideBarFlg === "SalePurchaseByPartyReport") {
              return (
                <SalePurchaseByPartyReport
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            } else if (sideBarFlg === "SalePurchaseByPartyGroupReport") {
              return (
                <SalePurchaseByPartyGroupReport
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            } else if (sideBarFlg === "SaleSummaryByHSNReport") {
              return (
                <SaleSummaryByHSNReport
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            } else if (sideBarFlg === "FormNo27EQReport") {
              return (
                <FormNo27EQReport
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
              );
            } else if (sideBarFlg === "TCSReceivableReport") {
              return (
                <TCSReceivableReport
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
