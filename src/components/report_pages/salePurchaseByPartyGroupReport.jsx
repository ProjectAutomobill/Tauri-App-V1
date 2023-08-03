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

          {/* this month+ dates filter start */}

          <div className="choose-dates-salePurchaseByPartyGroupReport">
            <div className="between-label-salePurchaseByPartyGroupReport">
              Between
            </div>

            <div className="date1-salePurchaseByPartyGroupReport">
              <input
                type="date"
                className="from-salePurchaseByPartyGroupReport"
                name="from-salePurchaseByPartyGroupReport"
              />
            </div>
            <div className="to-choose-dates-salePurchaseByPartyGroupReport">
              To
            </div>
            <div className="date1-salePurchaseByPartyGroupReport">
              <input
                type="date"
                className="from-salePurchaseByPartyGroupReport"
                name="from-salePurchaseByPartyGroupReport"
              />
            </div>
          </div>

          {/*  options buttons start */}

          <div className="options-middlepart1-salePurchaseByPartyGroupReport">
            <div className="option1-salePurchaseByPartyGroupReport">
              <div className="image-option1-salePurchaseByPartyGroupReport">
                <HiDocumentReport className="report-middlepart1-salePurchaseByPartyGroupReport" />
              </div>
              <div className="text1-option1-salePurchaseByPartyGroupReport">
                Excel Report
              </div>
            </div>

            <div className="option2-salePurchaseByPartyGroupReport">
              <div className="image-option2-salePurchaseByPartyGroupReport">
                <AiFillPrinter className="print-middlepart1-salePurchaseByPartyGroupReport" />
              </div>
              <div className="text1-option2-salePurchaseByPartyGroupReport">
                Print
              </div>
            </div>
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
