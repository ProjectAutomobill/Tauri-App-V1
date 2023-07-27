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

export const DayBookTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>NAME</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              REF NO.
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>TYPE</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>TOTAL</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              MONEY IN
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              MONEY OUT
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              PRINT/SHARE
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.NAME}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.REF_NUMBER}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.TYPE}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.TOTAL}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.MONEY_IN}</TableCell>
              <TableCell sx={{ fontSize: 12, color: "black", fontWeight: 100 }}>
                {row.MONEY_OUT}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const dataTable = [
  {
    NAME: "JATIN",
    REF_NUMBER: 2,
    TYPE: "Fiveclub",
    TOTAL: "$5356",
    MONEY_IN: "$84568.66",
    MONEY_OUT: "$11332.06",
  },
];
