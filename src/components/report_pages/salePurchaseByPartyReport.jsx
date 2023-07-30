import React, { useState } from "react";
import "./salePurchaseByPartyReport.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { SalePurchaseByPartyTable } from "../tables/salePurchaseByPartyTable";

export const SalePurchaseByPartyReport = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();
  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }

  return (
    <div className="main-salePurchaseByPartyReport">
      <div className="middleDiv-salePurchaseByPartyReport">
        <div className="middleDiv-part1-salePurchaseByPartyReport">
          <div className="choose-months-salePurchaseByPartyReport">
            <select id="months-salePurchaseByPartyReport">
              <option value="thisMonth-salePurchaseByPartyReport">
                This Month
              </option>
              <option value="lastMonth-salePurchaseByPartyReport">
                Last Month
              </option>
              <option value="thisQuater-salePurchaseByPartyReport">
                This Quater
              </option>
              <option value="thisYear-salePurchaseByPartyReport">
                This Year
              </option>
              <option value="custom-salePurchaseByPartyReport">Custom</option>
            </select>
          </div>

          <div className="choose-dates-salePurchaseByPartyReport">
            <div className="between-label">
              <label for="from-salePurchaseByPartyReport">Between </label>
            </div>
            <input
              type="date"
              id="from-salePurchaseByPartyReport"
              name="from-salePurchaseByPartyReport"
            />

            <label for="to-salePurchaseByPartyReport" id="to-label">
              To
            </label>
            <input
              type="date"
              id="to-salePurchaseByPartyReport"
              name="to-salePurchaseByPartyReport"
            />
          </div>
          <div className="options-middlepart1-salePurchaseByPartyReport">
            <HiDocumentReport className="report-middlepart1-salePurchaseByPartyReport" />
            <AiFillPrinter className="print-middlepart1-salePurchaseByPartyReport" />
          </div>
        </div>
        {/* <div className="middleDiv-part2-salePurchaseByPartyReport">
          <div className="content-middleDiv-part2-salePurchaseByPartyReport">
            <div className="choose-payment_in-salePurchaseByPartyReport">
              <select id="payment_in-salePurchaseByPartyReport">
                <option value="salePurchaseByPartyReports-salePurchaseByPartyReport">
                  All Parties
                </option>
              </select>
            </div>
          </div>
        </div> */}
      </div>
      <div className="lowerDivSale-salePurchaseByPartyReport">
        <div className="top-part-A-salePurchaseByPartyReport">
          <input
            type="search"
            name=""
            id=""
            className="search-input-salePurchaseByPartyReport"
            placeholder="Search "
          />
        </div>
        <SalePurchaseByPartyTable />
      </div>
      <div className="atTheEndDiv-salePurchaseByPartyReport">
        <div className="text1-salePurchaseByPartyReport">
          Total Sale Amount: $ 0.00
        </div>
        <div className="text3-salePurchaseByPartyReport">
          Total Purchase Amount:$ 0.00
        </div>
      </div>
    </div>
  );
};
