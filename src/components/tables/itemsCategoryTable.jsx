import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
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
import LoadingSpinner from "../../loading";
export const ItemsCategoryTable = (props) => {
  const [itemData, setItemData] = useState();

  //   async function getItemDetails(props) {
  //     await fetch("/getItemNames?number=" + props.userNumber)
  //       .then((val) => val.json())
  //       .then((value) => {
  //         setItemData(value);
  //         console.log("Item Data : " + itemData);
  //       });
  //   }

  //   function wait(ms) {
  //     var start = new Date().getTime();
  //     var end = start;
  //     while (end < start + ms) {
  //       end = new Date().getTime();
  //     }
  //   }

  //   if (props.refresh == 1) {
  //     wait(2000);
  //     console.log("Invoking Function...");
  //     invoke("get_item_details", {
  //       number: props.userNumber,
  //       company: props.userCompany,
  //       item_name: props.itemName,
  //     })
  //       .then((response) => {
  //         setItemData(JSON.parse(response));
  //       });
  //     props.setStateChange(!props.stateChange);
  //     props.setrefresh(0);
  //   }

  //   useEffect(() => {
  //     invoke("get_item_names", {
  //       number: props.userNumber,
  //       company: props.userCompany,
  //     })
  //       .then((response) => {
  //         setItemData(JSON.parse(response));
  //         props.setTrans(JSON.parse(response)[0].Name);
  //       });
  //     props.setStateChange(!props.stateChange);
  //   }, []);
  return (
    <TableContainer component={Paper}>
      {/* {itemData == null && <LoadingSpinner className="loading_spinner" />} */}

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              CATEGORY
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              ITEM
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              {/* <BsThreeDotsVertical /> */}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable?.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.CATEGORY}</TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  //   fontWeight: 600,
                  justifyContent: "right",
                  alignItems: "right",
                  alignContent: "right",
                }}
              >
                {row.ITEM}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  justifyContent: "right",
                  alignItems: "right",
                  alignContent: "right",
                }}
              >
                {row.DOTS}
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
    CATEGORY: "Itrems not in any category",
    ITEM: "6",
    DOTS: <BsThreeDotsVertical />,
  },
];
