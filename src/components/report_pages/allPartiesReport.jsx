import React, { useState } from "react";
import "./allPartiesReport.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { AllPartiesTable } from "../tables/allPartiesTable";
// import { SalePurchaseByPartyTable } from "../tables/salePurchaseByPartyTable";

export const AllPartiesReport = (props) => {
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
    <div className="main-allParties">
      <div className="middleDiv-allParties">
        <div className="middleDiv-part1-allParties">
          {/* <div className="choose-months-allParties">
            <select id="months-allParties">
              <option value="thisMonth-allParties">
                This Month
              </option>
              <option value="lastMonth-allParties">
                Last Month
              </option>
              <option value="thisQuater-allParties">
                This Quater
              </option>
              <option value="thisYear-allParties">This Year</option>
              <option value="custom-allParties">Custom</option>
            </select>
          </div> */}

          <div className="choose-dates-allParties">
            <div className="between-label-allParties">
              {/* <div className="text-between-label-allParties"> */}
              Date
              {/* </div> */}
            </div>

            <div className="date1-allParties">
              <input
                type="date"
                className="from-allParties"
                name="from-allParties"
              />
            </div>
            {/* <div className="to-choose-dates-allParties">To</div>
            <div className="date1-allParties">
              <input
                type="date"
                className="from-allParties"
                name="from-allParties"
              />
            </div> */}
          </div>

          <div className="allFirms-middleDiv-allParties">
            <select id="firm-allParties">
              <option value="allFirms-allParties">All Parties</option>
              <option value="myCompany-allParties">Receivable</option>
              <option value="myCompany-allParties">Payable</option>
            </select>
          </div>

          <div className="options-middlepart1-allParties">
            <div className="option1-allParties">
              <div className="image-option1-allParties">
                <HiDocumentReport className="report-middlepart1-allParties" />
              </div>
              <div className="text1-option1-allParties">Excel Report</div>
            </div>

            <div className="option2-allParties">
              <div className="image-option2-allParties">
                <AiFillPrinter className="print-middlepart1-allParties" />
              </div>
              <div className="text1-option2-allParties">Print</div>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-allParties">
        <div className="top-part-A-allParties">
          <input
            type="search"
            name=""
            id=""
            className="search-input-allParties"
            placeholder="Search "
          />
        </div>
        <AllPartiesTable />
      </div>
      <div className="atTheEndDiv-allParties">
        <div className="text1-allParties">
          Total Receivable:
          <div className="value-oftext1-allParties">$ 0.00</div>
        </div>
        <div className="text3-allParties">
          Total Payable:
          <div className="value-oftext2-allParties">$ 0.00</div>
        </div>
      </div>
    </div>
  );
};
