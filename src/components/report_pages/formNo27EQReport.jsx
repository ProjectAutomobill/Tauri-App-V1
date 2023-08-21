import React, { useState } from "react";
import "./formNo27EQReport.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
// import { SaleSummaryByHSNTable } from "../tables/saleSummaryByHSNTable";
import { FormNo27EQTable } from "../tables/formNo27EQTable";

export const FormNo27EQReport = (props) => {
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
    <div className="main-formNo27EQReport">
      <div className="middleDiv-formNo27EQReport">
        <div className="middleDiv-part1-formNo27EQReport">
          <div className="choose-months-formNo27EQReport">
            <select id="months-formNo27EQReport">
              <option value="thisMonth-formNo27EQReport">This Month</option>
              <option value="lastMonth-formNo27EQReport">Last Month</option>
              <option value="thisQuater-formNo27EQReport">This Quater</option>
              <option value="thisYear-formNo27EQReport">This Year</option>
              <option value="custom-formNo27EQReport">Custom</option>
            </select>
          </div>

          <div className="choose-dates-formNo27EQReport">
            <div className="between-label-formNo27EQReport">
              {/* <div className="text-between-label-formNo27EQReport"> */}
              From
              {/* </div> */}
            </div>

            <div className="date1-formNo27EQReport">
              <input
                type="date"
                className="from-formNo27EQReport"
                name="from-formNo27EQReport"
              />
            </div>
            <div className="to-choose-dates-formNo27EQReport">To</div>
            <div className="date1-formNo27EQReport">
              <input
                type="date"
                className="from-formNo27EQReport"
                name="from-formNo27EQReport"
              />
            </div>
          </div>

          <div className="allFirms-middleDiv-formNo27EQReport">
            <select id="firm-formNo27EQReport">
              <option value="allFirms-formNo27EQReport">All Firm</option>
              <option value="myCompany-formNo27EQReport">My Company</option>
            </select>
          </div>

          <div className="options-middlepart1-formNo27EQReport">
            <div className="option1-formNo27EQReport">
              <div className="image-option1-formNo27EQReport">
                <HiDocumentReport className="report-middlepart1-formNo27EQReport" />
              </div>
              <div className="text1-option1-formNo27EQReport">Excel Report</div>
            </div>

            <div className="option2-formNo27EQReport">
              <div className="image-option2-formNo27EQReport">
                <AiFillPrinter className="print-middlepart1-formNo27EQReport" />
              </div>
              <div className="text1-option2-formNo27EQReport">Print</div>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-formNo27EQReport">
        <div className="top-part-A-formNo27EQReport">
          <input
            type="search"
            name=""
            id=""
            className="search-input-formNo27EQReport"
            placeholder="Search "
          />
        </div>
        <FormNo27EQTable />
      </div>
      <div className="atTheEndDiv-formNo27EQReport">
        <div className="text1-formNo27EQReport">
          Total Sale With TCS:
          <div className="value-oftext1-formNo27EQReport">$ 0.00</div>
        </div>
        <div className="text3-formNo27EQReport">Total TCS:0</div>
      </div>
    </div>
  );
};
