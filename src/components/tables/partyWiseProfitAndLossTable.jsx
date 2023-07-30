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

export const PartyWiseProfitAndLossTable = (props) => {
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
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>S_NO</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              PHONE NO.
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>NAME</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              TOTAL SALE AMOUNT
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              PROFIT(+)/LOSS(-)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.S_NO}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.PHONE_NO}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.NAME}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>
                {row.TOTAL_SALE_AMOUNT}
              </TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.PROFIT_LOSS}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const dataTable = [
  {
    S_NO: "1",
    PHONE_NO: 8295276864,
    NAME: "Terrell Scampion",
    TOTAL_SALE_AMOUNT: 6,
    PROFIT_LOSS: 26,
  },
];
