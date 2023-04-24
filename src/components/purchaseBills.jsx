import React from "react";
import "./purchaseBills.css";
import { AiOutlinePlus } from "react-icons/ai";
import { PurchaseBillsTable } from "./tables/purchaseBillsTable";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const PurchaseBills = () => {
  const navigate = useNavigate();

  function navigateToPurchase() {
    navigate("/purchase");
  }

  return (
    <div>
      <div className="upperDiv"></div>
      <div className="lowerDivSale">
        <h3>TRANSACTIONS</h3>
        <div className="top-part-A">
          {/* <h3>TRANSACTIONS</h3> */}
          <input
            type="search"
            name=""
            id=""
            className="search-input-sales"
            placeholder="Search ..."
          />
          <button
            className="addBtnPurchase-purchase"
            onClick={navigateToPurchase}
          >
            <AiOutlinePlus className="plus" />
            ass
          </button>
        </div>
        <PurchaseBillsTable />
      </div>
    </div>
  );
};
