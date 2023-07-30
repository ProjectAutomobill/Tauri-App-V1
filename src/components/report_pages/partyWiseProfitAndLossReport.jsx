import React, { useState } from "react";
import "./partyWiseProfitAndLossReport.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { PartyWiseProfitAndLossTable } from "../tables/partyWiseProfitAndLossTable";
// import { partyWiseProfitAndLossReportTable } from "../tables/partyWiseProfitAndLossReportTable";

export const PartyWiseProfitAndLossReport = (props) => {
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
    <div className="main-partyWiseProfitAndLossReport">
      <div className="middleDiv-partyWiseProfitAndLossReport">
        <div className="middleDiv-part1-partyWiseProfitAndLossReport">
          <div className="choose-months-partyWiseProfitAndLossReport">
            <select id="months-partyWiseProfitAndLossReport">
              <option value="thisMonth-partyWiseProfitAndLossReport">
                This Month
              </option>
              <option value="lastMonth-partyWiseProfitAndLossReport">
                Last Month
              </option>
              <option value="thisQuater-partyWiseProfitAndLossReport">
                This Quater
              </option>
              <option value="thisYear-partyWiseProfitAndLossReport">
                This Year
              </option>
              <option value="custom-partyWiseProfitAndLossReport">
                Custom
              </option>
            </select>
          </div>

          <div className="choose-dates-partyWiseProfitAndLossReport">
            <div className="between-label">
              <label for="from-partyWiseProfitAndLossReport">Between </label>
            </div>
            <input
              type="date"
              id="from-partyWiseProfitAndLossReport"
              name="from-partyWiseProfitAndLossReport"
            />

            <label for="to-partyWiseProfitAndLossReport" id="to-label">
              To
            </label>
            <input
              type="date"
              id="to-partyWiseProfitAndLossReport"
              name="to-partyWiseProfitAndLossReport"
            />
          </div>
          <div className="options-middlepart1-partyWiseProfitAndLossReport">
            <HiDocumentReport className="report-middlepart1-partyWiseProfitAndLossReport" />
            <AiFillPrinter className="print-middlepart1-partyWiseProfitAndLossReport" />
          </div>
        </div>
        <div className="middleDiv-part2-partyWiseProfitAndLossReport">
          <div className="content-middleDiv-part2-partyWiseProfitAndLossReport">
            <div className="choose-payment_in-partyWiseProfitAndLossReport">
              <select id="payment_in-partyWiseProfitAndLossReport">
                <option value="partyWiseProfitAndLossReports-partyWiseProfitAndLossReport">
                  All Parties
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-partyWiseProfitAndLossReport">
        <div className="top-part-A-partyWiseProfitAndLossReport">
          <input
            type="search"
            name=""
            id=""
            className="search-input-partyWiseProfitAndLossReport"
            placeholder="Search "
          />
        </div>
        <PartyWiseProfitAndLossTable />
      </div>
      <div className="atTheEndDiv-partyWiseProfitAndLossReport">
        <div className="text1-partyWiseProfitAndLossReport">
          Total Sale Amount: $ 0.00
        </div>
        <div className="text3-partyWiseProfitAndLossReport">
          Total Profit(+) / Loss (-):$ 0.00
        </div>
      </div>
    </div>
  );
};
