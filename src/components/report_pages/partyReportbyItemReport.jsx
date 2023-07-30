import React, { useState } from "react";
import "./partyReportByItemReport.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { PartyReportByItemTable } from "../tables/partyReportByItemTable";

export const PartyReportByItemReport = (props) => {
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
    <div className="main-partyReportByItemReport">
      <div className="middleDiv-partyReportByItemReport">
        <div className="middleDiv-part1-partyReportByItemReport">
          <div className="choose-months-partyReportByItemReport">
            <select id="months-partyReportByItemReport">
              <option value="thisMonth-partyReportByItemReport">
                This Month
              </option>
              <option value="lastMonth-partyReportByItemReport">
                Last Month
              </option>
              <option value="thisQuater-partyReportByItemReport">
                This Quater
              </option>
              <option value="thisYear-partyReportByItemReport">
                This Year
              </option>
              <option value="custom-partyReportByItemReport">Custom</option>
            </select>
          </div>

          <div className="choose-dates-partyReportByItemReport">
            <div className="between-label">
              <label for="from-partyReportByItemReport">Between </label>
            </div>
            <input
              type="date"
              id="from-partyReportByItemReport"
              name="from-partyReportByItemReport"
            />

            <label for="to-partyReportByItemReport" id="to-label">
              To
            </label>
            <input
              type="date"
              id="to-partyReportByItemReport"
              name="to-partyReportByItemReport"
            />
          </div>
          <div className="options-middlepart1-partyReportByItemReport">
            <HiDocumentReport className="report-middlepart1-partyReportByItemReport" />
            <AiFillPrinter className="print-middlepart1-partyReportByItemReport" />
          </div>
        </div>
        <div className="middleDiv-part2-partyReportByItemReport">
          <div className="content-middleDiv-part2-partyReportByItemReport">
            <div className="choose-payment_in-partyReportByItemReport">
              <select id="payment_in-partyReportByItemReport">
                <option value="partyReportByItemReports-partyReportByItemReport">
                  All Categories
                </option>
              </select>
            </div>
            <div className="choose-2nd-dropDown-partyReportByItemReport">
              <select id="second-dropDown-partyReportByItemReport">
                <option value="partyReportByItemReports-partyReportByItemReport">
                  All Items
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-partyReportByItemReport">
        <div className="top-part-A-partyReportByItemReport">
          <input
            type="search"
            name=""
            id=""
            className="search-input-partyReportByItemReport"
            placeholder="Search "
          />
        </div>
        <PartyReportByItemTable />
      </div>
      <div className="atTheEndDiv-partyReportByItemReport">
        <div className="text1-partyReportByItemReport">Total:</div>
        <div className="text2-partyReportByItemReport">1</div>
        <div className="text3-partyReportByItemReport">$ 0.00</div>
        <div className="text4-partyReportByItemReport">0</div>
        <div className="text5-partyReportByItemReport">$ 0.00</div>
      </div>
    </div>
  );
};
