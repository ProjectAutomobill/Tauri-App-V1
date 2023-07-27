import React, { useState } from "react";
import "./daybook.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
// import { dayBookTable } from "../tables/purchaseBillsTable";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
// import { PurchaseBillsTable } from "../tables/purchaseBillsTable";
import { DayBookTable } from "../tables/dayBookTable";
export const Daybook = () => {
  return (
    <div className="main-dayBook">
      <div className="middleDiv-dayBook">
        <div className="middleDiv-part1-dayBook">
          <div className="choose-dates-dayBook">
            <div id="between-label">
              <label for="from-dayBook">Date </label>
            </div>
            <input type="date" id="from-dayBook" name="from-dayBook" />
          </div>

          <div className="options-middlepart1-dayBook">
            {/* <GoGraph className='graph-middlepart1-dayBook'/> */}
            <HiDocumentReport className="report-middlepart1-dayBook" />
            <AiFillPrinter className="print-middlepart1-dayBook" />
          </div>
        </div>
      </div>
      <div className="lowerDivSale-dayBook-Report">
        <div className="top-part-A-dayBook">
          <input
            type="search"
            name=""
            className="search-input-dayBook"
            placeholder="Search"
          />
        </div>
        <DayBookTable />
      </div>
      <div className="atTheEndDiv-dayBook">
        <div className="text1-dayBook">Total Money-In: $ 0.00</div>
        <div className="text2-dayBook">Total Money-Out: $ 0.00</div>
        <div className="text3-dayBook">
          Total Money In - Total Money Out: $ 0.00
        </div>
      </div>
    </div>
  );
};
