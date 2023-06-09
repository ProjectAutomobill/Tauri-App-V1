import React, { useState } from "react";
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
import { getPartyDetails } from "../../api-firebase/firebase";
import { getValue } from "@mui/system";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
import LoadingSpinner from "../../loading";
import "./partiesTable.css";

export const PartiesTable = (props) => {
  // console.log(dataTable);
  // console.log(dataTable1);
  const [data, setData] = useState();
  const [partyName, setPartyName] = useState();
  // const [url, SetUrl] = useState("https://04df-103-199-226-253.in.ngrok.io/");
  const location = useLocation();
  //  const [cName, setCName] = useState(location.state.company);
  const [cName, setCName] = useState();

  async function componentDidMount1() {
    await fetch("/getPartyNames?number=" + props.userNumber)
      .then((val) => val.json())
      .then((value) => {
        setData(value);
        console.log("Data : " + data);
      });
  }

  // getData();
  useEffect(() => {
    // componentDidMount1();
    invoke("get_party_names", {
      number: props.userNumber,
      company: props.userCompany,
    })
      // `invoke` returns a Promise
      .then((response) => {
        setData(JSON.parse(response));
      });
    props.setStateChange(!props.stateChange);
  }, []);

  return (
    <TableContainer component={Paper}>
      {data == null && <LoadingSpinner className="loading_spinner" />}

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: 550, fontSize: 11, color: "gray" }}
              className="table-header-parties"
            >
              PARTY
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 550,
                fontSize: 11,
                float: "right",
                color: "gray",
              }}
              className="table-header-parties"
            >
              AMOUNT
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data?.map((row) => (
              // dataTable1.array.forEach(element => {

              <TableRow className="table-row">
                <TableCell
                  sx={{ fontSize: 12 }}
                  onClick={() => {
                    props.setTrans(row.Name);
                    props.getPartyDetails();
                  }}
                  className="table-cell-data-names"
                >
                  {row.Name}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 12,
                    color: "green",
                    fontWeight: 600,
                  }}
                  onClick={() => console.log(props.partyName)}
                  className="table-cell-data-amount"
                >
                  {row.Amount}
                </TableCell>
              </TableRow>
            ))
            // })
          }
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
// console.log(dataTable);
