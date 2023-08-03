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
import "./salePurchaseByPartyGroupTable.css";
import { FiFilter } from "react-icons/fi";

export const SalePurchaseByPartyGroupTable = (props) => {
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
              className="coloumn-1-salePurchaseByPartyGroupTable"
            >
              <div className="table-header-box-salePurchaseByPartyGroupTable">
                <div className="text-GroupName-salePurchaseByPartyGroupTable">
                  GROUP NAME
                </div>

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
              className="coloumn-restOfAll-salePurchaseByPartyGroupTable"
            >
              <div className="table-header-box-salePurchaseByPartyGroupTable">
                SALE AMOUNT
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
              className="coloumn-restOfAll-salePurchaseByPartyGroupTable"
            >
              <div className="table-header-box-salePurchaseByPartyGroupTable">
                PURCHASE AMOUNT
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
              >
                {row.GROUP_NAME}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.SALE_AMOUNT}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
              >
                {row.PURCHASE_AMOUNT}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const dataTable = [{}];
