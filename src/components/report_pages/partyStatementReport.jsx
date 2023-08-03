import React, { useState } from "react";
import "./partyStatementReport.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { PartyStatementTable } from "../tables/partyStatementTable";

export const PartyStatementReport = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();

  return (
    <div className="main-partyStatementReport">
      <div className="middleDiv-partyStatementReport">
        <div className="middleDiv-part1-partyStatementReport">
          <div className="choose-months-partyStatementReport">
            <select id="months-partyStatementReport">
              <option value="thisMonth-partyStatementReport">This Month</option>
              <option value="lastMonth-partyStatementReport">Last Month</option>
              <option value="thisQuater-partyStatementReport">
                This Quater
              </option>
              <option value="thisYear-partyStatementReport">This Year</option>
              <option value="custom-partyStatementReport">Custom</option>
            </select>
          </div>

          <div className="choose-dates-partyStatementReport">
            <div className="between-label-partyStatementReport">Between</div>

            <div className="date1-partyStatementReport">
              <input
                type="date"
                className="from-partyStatementReport"
                name="from-partyStatementReport"
              />
            </div>
            <div className="to-choose-dates-partyStatementReport">To</div>
            <div className="date1-partyStatementReport">
              <input
                type="date"
                className="from-partyStatementReport"
                name="from-partyStatementReport"
              />
            </div>
          </div>
          <div className="middleDiv-searchInput-partyStatementReport">
            <input
              type="search"
              name=""
              id=""
              className="first-input-partyStatementReport"
              placeholder="Select Party "
            />
          </div>
          {/*  options buttons start */}
          <div className="options-middlepart1-partyStatementReport">
            <div className="option1-partyStatementReport">
              <div className="image-option1-partyStatementReport">
                <HiDocumentReport className="report-middlepart1-partyStatementReport" />
              </div>
              <div className="text1-option1-partyStatementReport">
                Excel Report
              </div>
            </div>

            <div className="option2-partyStatementReport">
              <div className="image-option2-partyStatementReport">
                <AiFillPrinter className="print-middlepart1-partyStatementReport" />
              </div>
              <div className="text1-option2-partyStatementReport">Print</div>
            </div>
          </div>
          {/* <div className="middleDiv-searchInput-partyStatementReport">
            <input
              type="search"
              name=""
              id=""
              className="first-input-partyStatementReport"
              placeholder="Select Party "
            />
          </div> */}
          {/* <div className="options-middlepart1-partyStatementReport">
            <HiDocumentReport className="report-middlepart1-partyStatementReport" />
            <AiFillPrinter className="print-middlepart1-partyStatementReport" />
          </div> */}
        </div>
        <div className="middleDiv-part2-partyStatementReport">
          <div className="content-middleDiv-part2-partyStatementReport">
            <div className="para-inBetween-partyStatementReport">View:</div>
            <div className="content-with-checkBox-partyStatementReport">
              <input
                type="checkbox"
                name=""
                className="checkbox-input-partyStatementReport"
              />
            </div>
            <div className="para-inBetween-partyStatementReport">Vyapar</div>

            <div className="content-with-checkBox-partyStatementReport">
              <input
                type="checkbox"
                name=""
                className="checkbox-input-partyStatementReport"
              />
            </div>
            <div className="para-inBetween-partyStatementReport">
              Accounting
            </div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-partyStatementReport">
        <PartyStatementTable />
      </div>
      <div className="atTheEndDiv-partyStatementReport">
        <div className="firstDiv-atEnd-partyStatementReport">
          Party Statement Summary
        </div>
        <div className="secondDiv-atEnd-partyStatementReport">
          <div className="secondDiv-firstPart-partyStatementReport">
            <div className="atEnd-text-partyStatementReport">
              Total Sale: $ 0.00
            </div>
            <div className="atEnd-changetext-partyStatementReport">
              (Sale - Sale Return)
            </div>
            <div className="atEnd-Lasttext-partyStatementReport">
              Total Money-In: $ 0.00
            </div>
          </div>

          <div className="secondDiv-secondPart-partyStatementReport">
            <div className="atEnd-text-partyStatementReport">
              Total Purchase: $ 0.00
            </div>
            <div className="atEnd-changetext-partyStatementReport">
              (Purchase - Purchase Return)
            </div>
            <div className="atEnd-Lasttext-partyStatementReport">
              Total Money-Out: $ 0.00
            </div>
          </div>

          <div className="secondDiv-thirdPart-partyStatementReport">
            <div className="atEnd-text-partyStatementReport">
              Total Expense: $ 0.00
            </div>
          </div>

          <div className="secondDiv-verticalLine-partyStatementReport"></div>

          <div className="secondDiv-fourthPart-partyStatementReport">
            <div className="fourthPart-firsttext-partyStatementReport">
              Total Receivable
            </div>
            <div className="fourthPart-secondtext-partyStatementReport">
              $ 0.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
