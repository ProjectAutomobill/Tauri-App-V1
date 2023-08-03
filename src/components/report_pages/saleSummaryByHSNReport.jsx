import React, { useState } from "react";
import "./saleSummaryByHSNReport.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { SaleSummaryByHSNTable } from "../tables/saleSummaryByHSNTable";
// import { SalePurchaseByPartyTable } from "../tables/salePurchaseByPartyTable";

export const SaleSummaryByHSNReport = (props) => {
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
    <div className="main-saleSummaryByHSNReport">
      <div className="middleDiv-saleSummaryByHSNReport">
        <div className="middleDiv-part1-saleSummaryByHSNReport">
          <div className="choose-months-saleSummaryByHSNReport">
            <select id="months-saleSummaryByHSNReport">
              <option value="thisMonth-saleSummaryByHSNReport">
                This Month
              </option>
              <option value="lastMonth-saleSummaryByHSNReport">
                Last Month
              </option>
              <option value="thisQuater-saleSummaryByHSNReport">
                This Quater
              </option>
              <option value="thisYear-saleSummaryByHSNReport">This Year</option>
              <option value="custom-saleSummaryByHSNReport">Custom</option>
            </select>
          </div>

          <div className="choose-dates-saleSummaryByHSNReport">
            <div className="between-label-saleSummaryByHSNReport">
              {/* <div className="text-between-label-saleSummaryByHSNReport"> */}
              Between
              {/* </div> */}
            </div>

            <div className="date1-saleSummaryByHSNReport">
              <input
                type="date"
                className="from-saleSummaryByHSNReport"
                name="from-saleSummaryByHSNReport"
              />
            </div>
            <div className="to-choose-dates-saleSummaryByHSNReport">To</div>
            <div className="date1-saleSummaryByHSNReport">
              <input
                type="date"
                className="from-saleSummaryByHSNReport"
                name="from-saleSummaryByHSNReport"
              />
            </div>
          </div>

          <div className="allFirms-middleDiv-saleSummaryByHSNReport">
            <select id="firm-saleSummaryByHSNReport">
              <option value="allFirms-saleSummaryByHSNReport">All Firm</option>
              <option value="myCompany-saleSummaryByHSNReport">
                My Company
              </option>
            </select>
          </div>

          <div className="options-middlepart1-saleSummaryByHSNReport">
            <div className="option1-saleSummaryByHSNReport">
              <div className="image-option1-saleSummaryByHSNReport">
                <HiDocumentReport className="report-middlepart1-saleSummaryByHSNReport" />
              </div>
              <div className="text1-option1-saleSummaryByHSNReport">
                Excel Report
              </div>
            </div>

            <div className="option2-saleSummaryByHSNReport">
              <div className="image-option2-saleSummaryByHSNReport">
                <AiFillPrinter className="print-middlepart1-saleSummaryByHSNReport" />
              </div>
              <div className="text1-option2-saleSummaryByHSNReport">Print</div>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-saleSummaryByHSNReport">
        <div className="top-part-A-saleSummaryByHSNReport">
          <input
            type="search"
            name=""
            id=""
            className="search-input-saleSummaryByHSNReport"
            placeholder="Search "
          />
        </div>
        <SaleSummaryByHSNTable />
      </div>
      <div className="atTheEndDiv-saleSummaryByHSNReport">
        <div className="text1-saleSummaryByHSNReport">
          Total Value:
          <div className="value-oftext1-saleSummaryByHSNReport">$ 0.00</div>
        </div>
        <div className="text3-saleSummaryByHSNReport">Total Items:0</div>
      </div>
    </div>
  );
};
