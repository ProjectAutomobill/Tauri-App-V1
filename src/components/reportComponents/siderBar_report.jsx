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
        <div
          className="heading-inner-text-component-sidebar-report"
          onClick={() => props.setSideBarFlg("PartyStatementReport")}
        >
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
          Sale Purchase By Party
        </div>
      </div>
      <div className="component-sidebar-report">
        <div
          className="heading-inner-text-component-sidebar-report"
          onClick={() => props.setSideBarFlg("SalePurchaseByPartyGroupReport")}
        >
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
        <div
          className="heading-inner-text-component-sidebar-report"
          onClick={() => props.setSideBarFlg("SaleSummaryByHSNReport")}
        >
          Sale Summary By HSN
        </div>
      </div>
      <div className="heading-component-sidebar-report">
        <div className="heading-inner-text-sidebar-report">
          Item/ Stock report
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Stock Summary
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Item Serial Report
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Item Batch Report
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Item Report By Party
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Item Wise Profit And Loss
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Low Stock Summary
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Stock Detail
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Item Detail
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report-special">
          Sale/Purchase Report By Item Category
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report-special">
          Stock Summary Report By Item Category
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Item Wise Discount
        </div>
      </div>
      <div className="heading-component-sidebar-report">
        <div className="heading-inner-text-sidebar-report">Business Status</div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Bank Statement
        </div>
      </div>
      <div className="heading-component-sidebar-report">
        <div className="heading-inner-text-sidebar-report">Taxes</div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          GST Report
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          GST Rate Report
        </div>
      </div>
      <div className="component-sidebar-report">
        <div
          className="heading-inner-text-component-sidebar-report"
          onClick={() => props.setSideBarFlg("FormNo27EQReport")}
        >
          Form No. 27EQ
        </div>
      </div>
      <div className="component-sidebar-report">
        <div
          className="heading-inner-text-component-sidebar-report"
          onClick={() => props.setSideBarFlg("TCSReceivableReport")}
        >
          TCS Receivable
        </div>
      </div>
      <div className="heading-component-sidebar-report">
        <div className="heading-inner-text-sidebar-report">Expense report</div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Expense
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Expense Category Report
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Expense Item Report
        </div>
      </div>
      <div className="heading-component-sidebar-report">
        <div className="heading-inner-text-sidebar-report">
          Sale Order report
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Sale Order
        </div>
      </div>
      <div className="component-sidebar-report">
        <div className="heading-inner-text-component-sidebar-report">
          Sale Order Item
        </div>
      </div>
    </div>
  );
};
