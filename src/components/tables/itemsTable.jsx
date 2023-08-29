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
import LoadingSpinner from "../../loading";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";

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

  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  if (props.refresh == 1) {
    // console.log("HHHHEEEEEERRRRRRRREEEEEEE");
    wait(2000);
    console.log("Invoking Function...");
    invoke("get_item_details", {
      number: props.userNumber,
      company: props.userCompany,
      item_name: props.itemName,
    })
      // `invoke` returns a Promise
      .then((response) => {
        setItemData(JSON.parse(response));
      });
    props.setStateChange(!props.stateChange);
    props.setrefresh(0);
  }

  useEffect(() => {
    // getItemDetails();
    invoke("get_item_names", {
      number: props.userNumber,
      company: props.userCompany,
      // itemName: props.itemName,
    })
      // `invoke` returns a Promise
      .then((response) => {
        setItemData(JSON.parse(response));
        props.setTrans(JSON.parse(response)[0].Name);
      });
    props.setStateChange(!props.stateChange);
  }, []);
  return (
    <TableContainer component={Paper}>
      {itemData == null && <LoadingSpinner className="loading_spinner" />}

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              ITEM
              <BiFilterAlt className="filter-icon-parties-table" />
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 570,
                fontSize: 12,
                color: "gray",
                float: "right",
              }}
            >
              QUANTITY
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemData?.map((row) => (
            <TableRow>
              <TableCell
                sx={{ fontSize: 12 }}
                onClick={() => {
                  props.setTrans(row.Name);
                  props.getItemDetails();
                }}
              >
                {row.Name}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 12,
                  color: row.Units > 5 ? "green" : "red",
                  fontWeight: 600,
                  float: "right",
                  // justifyContent: "right",
                  // alignItems: "right",
                  // alignContent: "right",
                  display: "flex",
                  gap: "5%",
                  paddingRight: 3,
                }}
              >
                {row.Units}
                {/* <BsThreeDotsVertical /> */}
                <div className="dropdown-btn-parties">
                  <BsThreeDotsVertical className="three-dots-partyName" />
                  <div className="dropdown-content-parties">
                    <div className="dropdown-option-design-parties">
                      View/Edit
                    </div>
                    <div className="dropdown-option-design-parties">Delete</div>
                  </div>
                </div>
              </TableCell>
              {/* <TableCell sx={{ fontSize: 12, color: "gray", fontWeight: 600 }}>
                <BsThreeDotsVertical />
              </TableCell> */}
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
