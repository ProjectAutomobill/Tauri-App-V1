import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import "./transactionTable.css";

export const CashInHandTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>TYPE</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>NAME</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>DATE</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>AMOUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.TYPE}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.NAME}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.DATE}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.AMOUNT}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const dataTable = [
  {
    TYPE: "Sale",
    NAME: "Georgel",
    DATE: "9/10/2010",
    AMOUNT: 95,
  },
  {
    TYPE: "Sale",
    NAME: "cool data",
    DATE: "8/26/2019",
    AMOUNT: 100,
  },
  {
    TYPE: "purchase",
    NAME: "Maximilian Georgel",
    DATE: "4/15/2032",
    AMOUNT: 50,
  },
];
