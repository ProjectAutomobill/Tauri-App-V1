import React from "react";
import "./sideBar_report.css";
export const SideBarReport = (props) => {
  return (
    <div className="sidebar-report">
      <div className="heading-component-sidebar-report">
        <div className="heading-inner-text-sidebar-report">
          Transactions Report
        </div>
      </div>
      <div
        className="component-sidebar-report"
        onClick={() => props.setSideBarFlg("SaleInvoice")}
      >
        <div className="heading-inner-text-component-sidebar-report">Sale</div>
      </div>
      <div
        className="component-sidebar-report"
        onClick={() => props.setSideBarFlg("PurchaseBills")}
      >
        <div className="heading-inner-text-component-sidebar-report">
          Purchase
        </div>
      </div>
      <div className="component-sidebar-report">
        <div
          className="heading-inner-text-component-sidebar-report"
          onClick={() => props.setSideBarFlg("DayBook")}
        >
          Day book
        </div>
      </div>
      <div className="component-sidebar-report">
        <div
          className="heading-inner-text-component-sidebar-report"
          onClick={() => props.setSideBarFlg("AllTransaction")}
        >
          All Transaction
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Profit And Loss
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Bill Wise Profit
        </div>
      </div>
      <div className="component-sidebar-report">
        <div
          className="heading-inner-text-component-sidebar-report"
          onClick={() => props.setSideBarFlg("CashFlowReport")}
        >
          Cash flow
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Balance Sheet
        </div>
      </div>
      <div className="heading-component-sidebar-report">
        <div className="heading-inner-text-sidebar-report">Party Report</div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Party Statement
        </div>
      </div>
      <div className="component-sidebar-report">
        <div
          className="heading-inner-text-component-sidebar-report"
          onClick={() => props.setSideBarFlg("PartyWiseProfitAndLossReport")}
        >
          Party wise Profit & Loss
        </div>
      </div>
      <div className="component-sidebar-report">
        <div
          className="heading-inner-text-component-sidebar-report"
          onClick={() => props.setSideBarFlg("AllPartiesReport")}
        >
          All parties
        </div>
      </div>
      <div className="component-sidebar-report">
        <div
          className="heading-inner-text-component-sidebar-report"
          onClick={() => props.setSideBarFlg("PartyReportByItemReport")}
        >
          Party Report By Item
        </div>
      </div>
      <div className="component-sidebar-report">
        <div
          className="heading-inner-text-component-sidebar-report"
          onClick={() => props.setSideBarFlg("SalePurchaseByPartyReport")}
        >
          Sale PurchaseBy Party
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Sale Purchase By Party Group
        </div>
      </div>
      <div className="heading-component-sidebar-report">
        <div className="heading-inner-text-sidebar-report">GST reports</div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          GSTR 1
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          GSTR 2
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          GSTR 3 B
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          GSTR 9
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Sale Summary By HSN
        </div>
      </div>
    </div>
  );
};
