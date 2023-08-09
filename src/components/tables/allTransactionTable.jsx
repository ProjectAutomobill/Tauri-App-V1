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
import "./allTransactionTable.css";
import { FiFilter } from "react-icons/fi";

export const AllTransactionTable = (props) => {
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
              className="coloumn-restOfAll-allTransactionTable"
            >
              <div className="table-header-box-allTransactionTable">#</div>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                borderRight: "1px solid rgb(230, 230, 230)",
              }}
              className="coloumn-restOfAll-allTransactionTable"
            >
              <div className="table-header-box-allTransactionTable">
                <div className="text-HSN-allTransactionTable">DATE</div>

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
              className="coloumn-restOfAll-allTransactionTable"
            >
              <div className="table-header-box-allTransactionTable">
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
              className="coloumn-restOfAll-allTransactionTable"
            >
              <div className="table-header-box-allTransactionTable">
                PARTY NAME
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
              className="coloumn-restOfAll-allTransactionTable"
            >
              <div className="table-header-box-allTransactionTable">
                CATEGORY NAME
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
              className="coloumn-restOfAll-allTransactionTable"
            >
              <div className="table-header-box-allTransactionTable">
                TYPE
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
              className="coloumn-restOfAll-allTransactionTable"
            >
              <div className="table-header-box-allTransactionTable">
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
              className="coloumn-restOfAll-allTransactionTable"
            >
              <div className="table-header-box-allTransactionTable">
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
              className="coloumn-restOfAll-allTransactionTable"
            >
              <div className="table-header-box-allTransactionTable">
                PAID
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
              className="coloumn-restOfAll-allTransactionTable"
            >
              <div className="table-header-box-allTransactionTable">
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
                {row.S_NO}
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
                {row.PARTY_NAME}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.CATEGORY_NAME}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.TYPE}
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
                {row.BALANCE}
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
