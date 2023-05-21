import React from "react";
import "./tableA.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
export const TableA = () => {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: 570,
              fontSize: 12,
              color: "white",
              backgroundColor: "rgb(125, 12, 255)",
            }}
            className="header-transaction-table-PRINT"
          >
            #
          </TableCell>
          <TableCell
            sx={{
              fontWeight: 570,
              fontSize: 12,
              color: "white",
              backgroundColor: "rgb(125, 12, 255)",
            }}
            className="header-transaction-table-PRINT"
          >
            Item name
          </TableCell>
          <TableCell
            sx={{
              fontWeight: 570,
              fontSize: 12,
              color: "white",
              backgroundColor: "rgb(125, 12, 255)",
            }}
            className="header-transaction-table-PRINT"
          >
            HSC/SAC
          </TableCell>
          <TableCell
            sx={{
              fontWeight: 570,
              fontSize: 12,
              color: "white",
              backgroundColor: "rgb(125, 12, 255)",
            }}
            className="header-transaction-table-PRINT"
          >
            Quantity
          </TableCell>
          <TableCell
            sx={{
              fontWeight: 570,
              fontSize: 12,
              color: "white",
              backgroundColor: "rgb(125, 12, 255)",
            }}
            className="header-transaction-table-PRINT"
          >
            Price/unit
          </TableCell>
          <TableCell
            sx={{
              fontWeight: 570,
              fontSize: 12,
              color: "white",
              backgroundColor: "rgb(125, 12, 255)",
            }}
            className="header-transaction-table-PRINT"
          >
            Discount
          </TableCell>
          <TableCell
            sx={{
              fontWeight: 570,
              fontSize: 12,
              color: "white",
              backgroundColor: "rgb(125, 12, 255)",
            }}
            className="header-transaction-table-PRINT"
          >
            GST
          </TableCell>
          <TableCell
            sx={{
              fontWeight: 570,
              fontSize: 12,
              color: "white",
              backgroundColor: "rgb(125, 12, 255)",
            }}
            className="header-transaction-table-PRINT"
          >
            Amount
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            1
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            ITEM 1
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            1234
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            1+1
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            $ 10.00
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            $ 0.00(0%)
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            $ 0.50(5%)
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            $ 10.40
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            2
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            ITEM 2
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            1234
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            1+1
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            $ 10.00
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            $ 0.00(0%)
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            $ 0.50(5%)
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} className="small-text-PRINT">
            $ 10.40
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
