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
import "./transactionTable.css";
import { invoke } from "@tauri-apps/api";

export const CashFlowReportTable = (props) => {
  const [data, setData] = useState();

  //   useEffect(() => {
  //     // componentDidMount1();
  //     invoke("get_paymentIn_data", {
  //       number: props.userNumber,
  //       company: props.userCompany,
  //     })
  //       // `invoke` returns a Promise
  //       .then((response) => {
  //         setData(JSON.parse(response));
  //       });
  //   }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>DATE</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              REF NO.
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>NAME</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              CATEGORY
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>TYPE</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              CASH IN
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              CASH OUT
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              RUNNING CASH IN HAND
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>PRINT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.DATE}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.REF_NO}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.NAME}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.CATEGORY}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.TYPE}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.CASH_IN}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.CASH_OUT}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>
                {row.RUNNING_CASH_IN_HAND}
              </TableCell>
              <TableCell sx={{ fontSize: 12, color: "black", fontWeight: 100 }}>
                {row.PRINT}
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
    DATE: "1/10/2023",
    REF_NO: 1,
    NAME: "Terrell Scampion",
    CATEGORY: "Construction Clean and Final Clean",
    TYPE: "Sale",
    CASH_IN: 6,
    CASH_OUT: 26,
    RUNNING_CASH_IN_HAND: 44,
    PRINT: "",
  },
];
