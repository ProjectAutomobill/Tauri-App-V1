import React, { useState } from "react";
import "./cashFlowReport.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { CashFlowReportTable } from "../tables/cashFlowReportTable";

export const CashFlowReport = (props) => {
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
    <div className="main-cashFlowReport">
      {/* <div className="middleDiv-cashFlowReport">
        <div className="middleDiv-part1-cashFlowReport">
          <div className="choose-months-cashFlowReport">
            <select id="months-cashFlowReport">
              <option value="thisMonth-cashFlowReport">This Month</option>
              <option value="lastMonth-cashFlowReport">Last Month</option>
              <option value="thisQuater-cashFlowReport">This Quater</option>
              <option value="thisYear-cashFlowReport">This Year</option>
              <option value="custom-cashFlowReport">Custom</option>
            </select>
          </div>

          <div className="choose-dates-cashFlowReport">
            <div className="between-label">
              <label for="from-cashFlowReport">Between </label>
            </div>
            <input
              type="date"
              id="from-cashFlowReport"
              name="from-cashFlowReport"
            />

            <label for="to-cashFlowReport" id="to-label">
              To
            </label>
            <input
              type="date"
              id="to-cashFlowReport"
              name="to-cashFlowReport"
            />
          </div>
          <div className="content-with-checkBox-cashFlowReport">
            <input
              type="checkbox"
              name=""
              className="checkbox-input-cashFlowReport"
            />
            <div className="para-inBetween-cashFlowReport">
              Show zero amount transaction
            </div>
          </div>
          <div className="options-middlepart1-cashFlowReport">
            <HiDocumentReport className="report-middlepart1-cashFlowReport" />
            <AiFillPrinter className="print-middlepart1-cashFlowReport" />
          </div>
        </div>
        <div className="middleDiv-part2-cashFlowReport">
          <div className="content-middleDiv-part2-cashFlowReport">
            Opening Cash-in Hand: ₹ 0.00
          </div>
        </div>
      </div> */}
      <div className="middleDiv-cashFlowReport">
        <div className="middleDiv-part1-cashFlowReport">
          <div className="choose-months-cashFlowReport">
            <select id="months-cashFlowReport">
              <option value="thisMonth-cashFlowReport">This Month</option>
              <option value="lastMonth-cashFlowReport">Last Month</option>
              <option value="thisQuater-cashFlowReport">This Quater</option>
              <option value="thisYear-cashFlowReport">This Year</option>
              <option value="custom-cashFlowReport">Custom</option>
            </select>
          </div>

          <div className="choose-dates-cashFlowReport">
            <div className="between-label-cashFlowReport">Between</div>

            <div className="date1-cashFlowReport">
              <input
                type="date"
                className="from-cashFlowReport"
                name="from-cashFlowReport"
              />
            </div>
            <div className="to-choose-dates-cashFlowReport">To</div>
            <div className="date1-cashFlowReport">
              <input
                type="date"
                className="from-cashFlowReport"
                name="from-cashFlowReport"
              />
            </div>
          </div>
          <div className="content-with-checkBox-cashFlowReport">
            <input
              type="checkbox"
              name=""
              className="checkbox-input-cashFlowReport"
            />
            <div className="para-inBetween-cashFlowReport">
              Show zero amount transaction
            </div>
          </div>
          {/*  options buttons start */}
          <div className="options-middlepart1-cashFlowReport">
            <div className="option1-cashFlowReport">
              <div className="image-option1-cashFlowReport">
                <HiDocumentReport className="report-middlepart1-cashFlowReport" />
              </div>
              <div className="text1-option1-cashFlowReport">Excel Report</div>
            </div>

            <div className="option2-cashFlowReport">
              <div className="image-option2-cashFlowReport">
                <AiFillPrinter className="print-middlepart1-cashFlowReport" />
              </div>
              <div className="text1-option2-cashFlowReport">Print</div>
            </div>
          </div>
        </div>
        <div className="middleDiv-part2-cashFlowReport">
          <div className="content-middleDiv-part2-cashFlowReport">
            Opening Cash-in Hand: ₹ 0.00
          </div>
        </div>
      </div>
      <div className="lowerDivSale-cashFlowReport">
        <div className="top-part-A-cashFlowReport">
          <input
            type="search"
            name=""
            id=""
            className="search-input-cashFlowReport"
            placeholder="Search "
          />
        </div>
        <CashFlowReportTable />
      </div>
      <div className="atTheEndDiv-cashFlowReport">
        <div className="text1-cashFlowReport">Total Cash-In: $ 0.00</div>
        <div className="text2-cashFlowReport">Total Cash-Out: $ 0.00</div>
        <div className="text3-cashFlowReport">Closing Cash-in Hand: $ 0.00</div>
      </div>
      {/* <cashFlowReportModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        userNumber={props.userNumber}
        userCompany={props.userCompany}
      /> */}
    </div>
  );
};
