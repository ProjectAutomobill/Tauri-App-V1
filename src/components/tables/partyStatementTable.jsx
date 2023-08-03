import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
// import "./transactionTable.css";
import { invoke } from "@tauri-apps/api";
import LoadingSpinner from "../../loading";
import "./partyStatementTable.css";
import { FiFilter } from "react-icons/fi";

export const PartyStatementTable = (props) => {
  const [data, setData] = useState();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                borderRight: "1px solid rgb(230, 230, 230)",
              }}
              className="coloumn-1-partyStatementTable"
            >
              <div className="table-header-box-partyStatementTable">
                <div className="text-HSN-partyStatementTable">DATE</div>

                <div className="filter-div">
                  <FiFilter className="filter-icon-sale" />
                </div>
              </div>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                borderRight: "1px solid rgb(230, 230, 230)",
              }}
              className="coloumn-restOfAll-partyStatementTable"
            >
              <div className="table-header-box-partyStatementTable">
                REF NO.
                <div className="filter-div">
                  <FiFilter className="filter-icon-sale" />
                </div>
              </div>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                borderRight: "1px solid rgb(230, 230, 230)",
              }}
              className="coloumn-restOfAll-partyStatementTable"
            >
              <div className="table-header-box-partyStatementTable">
                PAYMENT TYPE
                <div className="filter-div">
                  <FiFilter className="filter-icon-sale" />
                </div>
              </div>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                borderRight: "1px solid rgb(230, 230, 230)",
              }}
              className="coloumn-restOfAll-partyStatementTable"
            >
              <div className="table-header-box-partyStatementTable">
                TOTAL
                <div className="filter-div">
                  <FiFilter className="filter-icon-sale" />
                </div>
              </div>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                borderRight: "1px solid rgb(230, 230, 230)",
              }}
              className="coloumn-restOfAll-partyStatementTable"
            >
              <div className="table-header-box-partyStatementTable">
                RECEIVED/PAID
                <div className="filter-div">
                  <FiFilter className="filter-icon-sale" />
                </div>
              </div>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                borderRight: "1px solid rgb(230, 230, 230)",
              }}
              className="coloumn-restOfAll-partyStatementTable"
            >
              <div className="table-header-box-partyStatementTable">
                TXN BALANCE
                <div className="filter-div">
                  <FiFilter className="filter-icon-sale" />
                </div>
              </div>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                borderRight: "1px solid rgb(230, 230, 230)",
              }}
              className="coloumn-restOfAll-partyStatementTable"
            >
              <div className="table-header-box-partyStatementTable">
                RECEIVABLE BALANCE
                <div className="filter-div">
                  <FiFilter className="filter-icon-sale" />
                </div>
              </div>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                borderRight: "1px solid rgb(230, 230, 230)",
              }}
              className="coloumn-restOfAll-partyStatementTable"
            >
              <div className="table-header-box-partyStatementTable">
                PAYABLE BALANCE
                <div className="filter-div">
                  <FiFilter className="filter-icon-sale" />
                </div>
              </div>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                borderRight: "1px solid rgb(230, 230, 230)",
              }}
              className="coloumn-restOfAll-partyStatementTable"
            >
              <div className="table-header-box-partyStatementTable">
                PRINT
                <div className="filter-div">
                  <FiFilter className="filter-icon-sale" />
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.DATE}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.TEXN_TYPE}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.REF_NO}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.PAYMENT_TYPE}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.TOTAL}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.RECEIVED_PAID}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.TXN_BALANCE}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.RECEIVED_BALANCE}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.PAYABLE_BALANCE}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.PRINT}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const dataTable = [{}];
