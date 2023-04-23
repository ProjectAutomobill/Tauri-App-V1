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
import { green } from "@mui/material/colors";
import { useState } from "react";
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api";

export const ItemsTable = (props) => {
  const [itemData, setItemData] = useState();

  async function getItemDetails(props) {
    await fetch("/getItemNames?number=" + props.userNumber)
      .then((val) => val.json())
      .then((value) => {
        setItemData(value);
        console.log("Item Data : " + itemData);
      });
  }

  useEffect(() => {
    // getItemDetails();
    invoke("get_item_details", {
      number: props.userNumber,
      company: props.userCompany.toString(),
    })
      // `invoke` returns a Promise
      .then((response) => {
        setItemData(JSON.parse(response));
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Item</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemData?.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.Name}</TableCell>
              <TableCell sx={{ fontSize: 12, color: "green", fontWeight: 600 }}>
                {row.Units}
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
    Party: "Wordify",
    Amount: "$54098.20",
  },
  {
    Party: "Chatterbridge",
    Amount: "$39894.44",
  },
  {
    Party: "Gigashots",
    Amount: "$70437.93",
  },
  {
    Party: "Einti",
    Amount: "$72378.86",
  },
  {
    Party: "Meevee",
    Amount: "$48433.43",
  },
  {
    Party: "Geba",
    Amount: "$16087.96",
  },
];
