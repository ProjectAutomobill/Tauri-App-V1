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
import "./salePurchaseByPartyTable.css";
import { FiFilter } from "react-icons/fi";

export const SalePurchaseByPartyTable = (props) => {
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
              className="coloumn-1-salePurchaseByPartyTable"
            >
              <div className="table-header-box-salePurchaseByPartyTable">
                <div className="text-GroupName-salePurchaseByPartyTable">#</div>
              </div>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                borderRight: "1px solid rgb(230, 230, 230)",
              }}
              className="coloumn-2-salePurchaseByPartyTable"
            >
              <div className="table-header-box-salePurchaseByPartyTable">
                <div className="text-GroupName-salePurchaseByPartyTable">
                  PARTY NAME
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
              className="coloumn-restOfAll-salePurchaseByPartyTable"
            >
              <div className="table-header-box-salePurchaseByPartyTable">
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
              className="coloumn-restOfAll-salePurchaseByPartyTable"
            >
              <div className="table-header-box-salePurchaseByPartyTable">
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
                {row.S_NO}
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
