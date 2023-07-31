import React, { useState } from "react";
import "./salePurchaseByPartyGroupReport.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { SalePurchaseByPartyGroupTable } from "../tables/salePurchaseByPartyGroupTable";
// import { SalePurchaseByPartyTable } from "../tables/salePurchaseByPartyTable";

export const SalePurchaseByPartyGroupReport = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();

  return (
    <div className="main-salePurchaseByPartyGroupReport">
      <div className="middleDiv-salePurchaseByPartyGroupReport">
        <div className="middleDiv-part1-salePurchaseByPartyGroupReport">
          <div className="choose-months-salePurchaseByPartyGroupReport">
            <select id="months-salePurchaseByPartyGroupReport">
              <option value="thisMonth-salePurchaseByPartyGroupReport">
                This Month
              </option>
              <option value="lastMonth-salePurchaseByPartyGroupReport">
                Last Month
              </option>
              <option value="thisQuater-salePurchaseByPartyGroupReport">
                This Quater
              </option>
              <option value="thisYear-salePurchaseByPartyGroupReport">
                This Year
              </option>
              <option value="custom-salePurchaseByPartyGroupReport">
                Custom
              </option>
            </select>
          </div>

          <div className="choose-dates-salePurchaseByPartyGroupReport">
            <div className="between-label">
              <label for="from-salePurchaseByPartyGroupReport">Between </label>
            </div>
            <input
              type="date"
              id="from-salePurchaseByPartyGroupReport"
              name="from-salePurchaseByPartyGroupReport"
            />

            <label for="to-salePurchaseByPartyGroupReport" id="to-label">
              To
            </label>
            <input
              type="date"
              id="to-salePurchaseByPartyGroupReport"
              name="to-salePurchaseByPartyGroupReport"
            />
          </div>
          <div className="options-middlepart1-salePurchaseByPartyGroupReport">
            <HiDocumentReport className="report-middlepart1-salePurchaseByPartyGroupReport" />
            <AiFillPrinter className="print-middlepart1-salePurchaseByPartyGroupReport" />
          </div>
        </div>
      </div>
      <div className="lowerDivSale-salePurchaseByPartyGroupReport">
        <div className="top-part-A-salePurchaseByPartyGroupReport">
          <div className="lowerDiv-content-salePurchaseByPartyGroupReport">
            SALE PURCHASE BY PARTY GROUP
          </div>
          <input
            type="search"
            name=""
            id=""
            className="search-input-salePurchaseByPartyGroupReport"
            placeholder="Search "
          />
        </div>
        <SalePurchaseByPartyGroupTable />
      </div>
      <div className="atTheEndDiv-salePurchaseByPartyGroupReport">
        <div className="text1-salePurchaseByPartyGroupReport">
          Total Sale Amount: $ 0.00
        </div>
        <div className="text3-salePurchaseByPartyGroupReport">
          Total Purchase Amount:$ 0.00
        </div>
      </div>
    </div>
  );
};
