import React, { useState } from "react";
import "./allPartiesReport.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
import { AllPartiesTable } from "../tables/allPartiesTable";

export const AllPartiesReport = () => {
  return (
    <div className="main-allPartiesReport">
      <div className="middleDiv-allPartiesReport">
        <div className="middleDiv-part1-allPartiesReport">
          <div className="choose-dates-allPartiesReport">
            <div id="between-label">
              <label for="from-allPartiesReport">Date </label>
            </div>
            <input
              type="date"
              id="from-allPartiesReport"
              name="from-allPartiesReport"
            />
          </div>
          <div className="content-middleDiv-part2-allPartiesReport">
            <div className="choose-payment_in-allPartiesReport">
              <select id="payment_in-allPartiesReport">
                <option value="allParties-allPartiesReport">All Parties</option>
                <option value="Receivable-allPartiesReport">Receivable</option>
                <option value="Payable-allPartiesReport">Payable</option>
              </select>
            </div>
          </div>
          <div className="options-middlepart1-allPartiesReport">
            {/* <GoGraph className='graph-middlepart1-allPartiesReport'/> */}
            <HiDocumentReport className="report-middlepart1-allPartiesReport" />
            <AiFillPrinter className="print-middlepart1-allPartiesReport" />
          </div>
        </div>
      </div>
      <div className="lowerDivSale-allPartiesReport-Report">
        <div className="top-part-A-allPartiesReport">
          <input
            type="search"
            name=""
            className="search-input-allPartiesReport"
            placeholder="Search"
          />
        </div>
        <AllPartiesTable />
      </div>
      <div className="atTheEndDiv-allPartiesReport">
        <div className="text1-allPartiesReport">Total Receivable: $ 0.00</div>
        <div className="text3-allPartiesReport">Total Payable:$ 0.00</div>
      </div>
    </div>
  );
};
