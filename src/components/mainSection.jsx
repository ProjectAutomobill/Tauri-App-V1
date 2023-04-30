import React from "react";
import "./mainSection.css";
import { Parties } from "./parties";
import { Items } from "./items";
import { SaleInvoice } from "./saleInvoice";
import { PurchaseBills } from "./purchases_pages/purchaseBills";
import { DashBoard } from "./dashboard";
import { EandQ } from "./sales_pages/EandQ";
import { PaymentIn } from "./sales_pages/paymentIn";
import { SaleOrder } from "./sales_pages/saleOrder";
import { DeliveryChallan } from "./sales_pages/deliveryChallan";
import { SaleReturn } from "./sales_pages/saleReturn";
import { PaymentOut } from "./purchases_pages/paymentOut";
import { PurchaseOrder } from "./purchases_pages/purchaseOrder";
import { PurchaseReturn } from "./purchases_pages/purchaseReturn";
import { Expenses } from "./expenses";
import { BankAccounts } from "./bankAccounts";
import { LoanAccounts } from "./cashAndBanks_pages/loanAccounts";
import { CashInHand } from "./cashAndBanks_pages/cashInHand";
import { Cheques } from "./cashAndBanks_pages/cheques";

export function MainSection(props) {
  return (
    <div className="main-section">
      {(() => {
        if (props.val1 === "dashboard" || props.val1 === "home") {
          return (
            <DashBoard
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "parties") {
          return (
            <Parties
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "items") {
          return (
            <Items
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "sales") {
          return (
            <SaleInvoice
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "estimateAndquotation") {
          return (
            <EandQ
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "paymentIn") {
          return (
            <PaymentIn
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "saleOrder") {
          return (
            <SaleOrder
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "deliveryChallan") {
          return (
            <DeliveryChallan
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "saleReturn") {
          return (
            <SaleReturn
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "purchases") {
          return (
            <PurchaseBills
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "paymentOut") {
          return (
            <PaymentOut
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "purchaseOrder") {
          return (
            <PurchaseOrder
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "purchaseReturn") {
          return (
            <PurchaseReturn
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "expenses") {
          return (
            <Expenses
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "cashAndBanks") {
          return (
            <BankAccounts
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "cashInHand") {
          return (
            <CashInHand
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "loanAccounts") {
          return (
            <LoanAccounts
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        } else if (props.val1 === "cheques") {
          return (
            <Cheques
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
          );
        }
      })()}
    </div>
  );
}
