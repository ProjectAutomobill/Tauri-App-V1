import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import "./transactionTableItemsUnits.css";
import { invoke } from "@tauri-apps/api";
import { BsFillCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";

export const TransactionTableItemsUnits = (props) => {
  const [dataT, setDataT] = useState();
  const [prev, setPrev] = useState();
  //   var itemName = props.itemName;

  //   if (props.itemName != prev) {
  //     console.log("In Item Transaction Table " + itemName);
  //     invoke("get_item_transactions", {
  //       number: props.userNumber,
  //       company: props.userCompany,
  //       selected_name: props.itemName,
  //     }).then((response) => {
  //       setDataT(JSON.parse(response));
  //     });
  //     setPrev(props.itemName);
  //     console.log(itemName);
  //   }
  //   useEffect(() => {
  //     invoke("get_item_transactions", {
  //       number: props.userNumber,
  //       company: props.userCompany,
  //       selected_name: props.itemName,
  //     })
  //       .then((response) => {
  //         setDataT(JSON.parse(response));
  //       });
  //   }, []);
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
              className="first-row-transactionTableItemsUnits"
            >
              <div className="table-header-box-sale"></div>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                borderRight: "1px solid rgb(230, 230, 230)",
              }}
              className="second-row-transactionTableItemsUnits"
            >
              <div className="table-header-box-sale">CONVERSION</div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row, index) => (
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
                {row.CONVERSION}
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
    S_NO: "1",
    CONVERSION: "1 BAGS = 1 BOTTLES",
  },
];
