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
import "./itemsUnitsTable.css";
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api";
import LoadingSpinner from "../../loading";
export const ItemsUnitsTable = (props) => {
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
            <TableCell
              sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}
              className="first-row-itemsUnitsTable"
            >
              FULLNAME
            </TableCell>
            <TableCell
              sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}
              className="second-row-itemsUnitsTable"
            >
              SHORTNAME
            </TableCell>
            <TableCell
              sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}
              className="third-row-itemsUnitsTable"
            >
              {/* <BsThreeDotsVertical /> */}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable?.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.FULLNAME}</TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  //   fontWeight: 600,
                  float: "right",
                }}
              >
                {row.SHORTNAME}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  justifyContent: "left",
                  alignItems: "left",
                  alignContent: "left",
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
    FULLNAME: "BAGS",
    SHORTNAME: "Bag",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "BOTTLES",
    SHORTNAME: "Btl",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "BOX",
    SHORTNAME: "Bag",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "BUNDLES",
    SHORTNAME: "Bdl",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "CANS",
    SHORTNAME: "Can",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "CARTONS",
    SHORTNAME: "Ctn",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "DOZENS",
    SHORTNAME: "Dzn",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "GRAMMES",
    SHORTNAME: "Gm",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "KILOGRAMS",
    SHORTNAME: "Kg",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "LITRE",
    SHORTNAME: "Ltr",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "METERS",
    SHORTNAME: "Mtr",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "MILLITRE",
    SHORTNAME: "Ml",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "NUMBERS",
    SHORTNAME: "Nos",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "PACKS",
    SHORTNAME: "Pac",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "PAIRS",
    SHORTNAME: "Prs",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "PIECES",
    SHORTNAME: "Pcs",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "QUINTAL",
    SHORTNAME: "Qtl",
    DOTS: <BsThreeDotsVertical />,
  },
  {
    FULLNAME: "ROLLS",
    SHORTNAME: "Rol",
    DOTS: <BsThreeDotsVertical />,
  },
];
