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

          {/* this month+ dates filter start */}

          <div className="choose-dates-partyWiseProfitAndLossReport">
            <div className="between-label-partyWiseProfitAndLossReport">
              Between
            </div>

            <div className="date1-partyWiseProfitAndLossReport">
              <input
                type="date"
                className="from-partyWiseProfitAndLossReport"
                name="from-partyWiseProfitAndLossReport"
              />
            </div>
            <div className="to-choose-dates-partyWiseProfitAndLossReport">
              To
            </div>
            <div className="date1-partyWiseProfitAndLossReport">
              <input
                type="date"
                className="from-partyWiseProfitAndLossReport"
                name="from-partyWiseProfitAndLossReport"
              />
            </div>
          </div>

          {/*  options buttons start */}
          <div className="options-middlepart1-partyWiseProfitAndLossReport">
            <div className="option1-partyWiseProfitAndLossReport">
              <div className="image-option1-partyWiseProfitAndLossReport">
                <HiDocumentReport className="report-middlepart1-partyWiseProfitAndLossReport" />
              </div>
              <div className="text1-option1-partyWiseProfitAndLossReport">
                Excel Report
              </div>
            </div>

            <div className="option2-partyWiseProfitAndLossReport">
              <div className="image-option2-partyWiseProfitAndLossReport">
                <AiFillPrinter className="print-middlepart1-partyWiseProfitAndLossReport" />
              </div>
              <div className="text1-option2-partyWiseProfitAndLossReport">
                Print
              </div>
            </div>
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
          Total Profit(+) / Loss (-):
          <div className="valueOf-text3-partyWiseProfitAndLossReport">
            $ 0.00
          </div>
        </div>
      </div>
    </div>
  );
};
