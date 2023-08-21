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
import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api";

export const TableA = (props) => {
  // const [transactionDetails, setTransactionDetails] = useState();
  const [temp, setTemp] = useState(false);

  if (props.rerender != temp) {
    console.log("Rerendering...");
    // setTemp(props.rerender);
    // props.setFlg(!props.flg);
    // props.Print();
  }
  // componentDidUpdate() {
  //   props.Print();
  // }

  useEffect(() => {
    // invoke("get_sale_transaction_for_print", {
    //   number: props.userNumber,
    //   company: props.userCompany,
    //   invoice_no: props.invoice_no,
    // }).then(async (response) => {
    //   await setTransactionDetails(JSON.parse(response).data);
    //   console.log(JSON.parse(response).data);
    // });
    if (temp != props.flg) {
      console.log("In UseEffect -> TableA");
      setTemp(props.flg);
      props.Print();
    }
  });
  return (
    <TableContainer component={Paper}>
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
          {props.transactionDetails?.map((row, index) => (
            <TableRow>
              {/* className="small-text-PRINT" */}
              <TableCell sx={{ fontSize: 13, color: "gray" }}>
                {index + 1}
              </TableCell>
              <TableCell sx={{ fontSize: 13, color: "gray" }}>
                {row.Item}
              </TableCell>
              <TableCell sx={{ fontSize: 13, color: "gray" }}>1234</TableCell>
              <TableCell sx={{ fontSize: 13, color: "gray" }}>
                {row.Number}
              </TableCell>
              <TableCell sx={{ fontSize: 13, color: "gray" }}>$</TableCell>
              <TableCell sx={{ fontSize: 13, color: "gray" }}>
                $ 0.00(0%)
              </TableCell>
              <TableCell sx={{ fontSize: 13, color: "gray" }}>
                $ {row.Tax_Amount}({row.Tax}%)
              </TableCell>
              <TableCell sx={{ fontSize: 13, color: "gray" }}>
                $ {row.Total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
