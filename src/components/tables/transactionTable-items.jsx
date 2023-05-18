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
import "./transactionTable.css";
import { invoke } from "@tauri-apps/api";
import { BsFillCircleFill } from "react-icons/bs";

export const TransactionTableItems = (props) => {
  const [dataT, setDataT] = useState();
  const [prev, setPrev] = useState();
  var itemName = props.itemName;

  if (props.itemName != prev) {
    // componentDidMount();
    console.log("In Item Transaction Table " + itemName);
    invoke("get_item_transactions", {
      number: props.userNumber,
      company: props.userCompany,
      selected_name: props.itemName,
    }).then((response) => {
      setDataT(JSON.parse(response));
    });
    setPrev(props.itemName);
    console.log(itemName);
  }
  useEffect(() => {
    // componentDidMount();
    // console.log("In Transaction Table");
    invoke("get_item_transactions", {
      number: props.userNumber,
      company: props.userCompany,
      selected_name: props.itemName,
    })
      // `invoke` returns a Promise
      .then((response) => {
        setDataT(JSON.parse(response));
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}></TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>TYPE</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>NAME</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>DATE</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              OUANTITY
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>PRICE</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataT?.map((row, index) => (
            <TableRow className={index % 2 == 0 ? "grayColor" : "whiteColor"}>
              <TableCell sx={{ fontSize: 12 }}>
                <BsFillCircleFill
                  className={
                    row.Transaction_Type == "Sale"
                      ? "greenColor"
                      : "orangeColor"
                  }
                />
              </TableCell>
              <TableCell sx={{ fontSize: 12 }}>
                {row.Transaction_Type}
              </TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.PartyName}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.Date}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.Number}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.Total}</TableCell>
              <TableCell sx={{ fontSize: 12, color: "black", fontWeight: 100 }}>
                Paid
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
    TYPE: "Room 1057",
    NAME: "Shanon",
    DATE: "7/16/2022",
    QUANTITY: 83,
    PRICE: 19,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 1606",
    NAME: "Aimil",
    DATE: "4/26/2022",
    QUANTITY: 1,
    PRICE: 63,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 25772",
    NAME: "Tabbie",
    DATE: "11/28/2022",
    QUANTITY: 13,
    PRICE: 13,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 50",
    NAME: "Wilbert",
    DATE: "11/1/2022",
    QUANTITY: 50,
    PRICE: 22,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 54",
    NAME: "Brook",
    DATE: "8/12/2022",
    QUANTITY: 82,
    PRICE: 94,
    STATUS: "Purchase",
  },
  {
    TYPE: "3rd Floor",
    NAME: "Rivalee",
    DATE: "11/22/2022",
    QUANTITY: 79,
    PRICE: 39,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 1735",
    NAME: "Nerty",
    DATE: "11/3/2022",
    QUANTITY: 18,
    PRICE: 27,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 1338",
    NAME: "Lela",
    DATE: "10/22/2022",
    QUANTITY: 90,
    PRICE: 58,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 18775",
    NAME: "Teodoor",
    DATE: "6/28/2022",
    QUANTITY: 87,
    PRICE: 53,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 5",
    NAME: "Abbi",
    DATE: "1/22/2022",
    QUANTITY: 39,
    PRICE: 52,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 1011",
    NAME: "Sharity",
    DATE: "10/7/2022",
    QUANTITY: 95,
    PRICE: 99,
    STATUS: "Purchase",
  },
  {
    TYPE: "7th Floor",
    NAME: "Nicolina",
    DATE: "12/6/2022",
    QUANTITY: 49,
    PRICE: 62,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 120",
    NAME: "Saunderson",
    DATE: "5/26/2022",
    QUANTITY: 17,
    PRICE: 88,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 11",
    NAME: "Christophorus",
    DATE: "9/23/2022",
    QUANTITY: 59,
    PRICE: 5,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 88154",
    NAME: "Alexandrina",
    DATE: "7/30/2022",
    QUANTITY: 22,
    PRICE: 85,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 1608",
    NAME: "Tiffany",
    DATE: "9/4/2022",
    QUANTITY: 81,
    PRICE: 13,
    STATUS: "Purchase",
  },
  {
    TYPE: "1st Floor",
    NAME: "Joela",
    DATE: "12/6/2022",
    QUANTITY: 2,
    PRICE: 22,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 1840",
    NAME: "Radcliffe",
    DATE: "3/3/2022",
    QUANTITY: 27,
    PRICE: 13,
    STATUS: "Purchase",
  },
  {
    TYPE: "14th Floor",
    NAME: "Isidora",
    DATE: "4/9/2022",
    QUANTITY: 75,
    PRICE: 1,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 1202",
    NAME: "Cal",
    DATE: "7/24/2022",
    QUANTITY: 93,
    PRICE: 90,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 67",
    NAME: "Cass",
    DATE: "2/8/2022",
    QUANTITY: 94,
    PRICE: 10,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 1617",
    NAME: "Katie",
    DATE: "3/25/2022",
    QUANTITY: 20,
    PRICE: 57,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 1368",
    NAME: "Kris",
    DATE: "9/24/2022",
    QUANTITY: 28,
    PRICE: 42,
    STATUS: "Purchase",
  },
  {
    TYPE: "19th Floor",
    NAME: "Ilsa",
    DATE: "9/9/2022",
    QUANTITY: 46,
    PRICE: 16,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 14075",
    NAME: "Xena",
    DATE: "4/5/2022",
    QUANTITY: 13,
    PRICE: 44,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 313",
    NAME: "Dwight",
    DATE: "12/6/2022",
    QUANTITY: 42,
    PRICE: 75,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 1942",
    NAME: "Bastian",
    DATE: "7/25/2022",
    QUANTITY: 34,
    PRICE: 60,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 87694",
    NAME: "Ritchie",
    DATE: "8/20/2022",
    QUANTITY: 22,
    PRICE: 87,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 905",
    NAME: "Gannon",
    DATE: "6/12/2022",
    QUANTITY: 67,
    PRICE: 32,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 95654",
    NAME: "Doroteya",
    DATE: "8/13/2022",
    QUANTITY: 42,
    PRICE: 81,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 65326",
    NAME: "Lisha",
    DATE: "5/10/2022",
    QUANTITY: 84,
    PRICE: 11,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 48",
    NAME: "Dorene",
    DATE: "7/20/2022",
    QUANTITY: 97,
    PRICE: 23,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 1957",
    NAME: "Gav",
    DATE: "5/14/2022",
    QUANTITY: 15,
    PRICE: 48,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 1455",
    NAME: "Bryn",
    DATE: "10/14/2022",
    QUANTITY: 16,
    PRICE: 74,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 35876",
    NAME: "Fanechka",
    DATE: "12/25/2022",
    QUANTITY: 91,
    PRICE: 54,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 63",
    NAME: "Daron",
    DATE: "11/5/2022",
    QUANTITY: 67,
    PRICE: 53,
    STATUS: "Purchase",
  },
  {
    TYPE: "6th Floor",
    NAME: "Enrique",
    DATE: "6/7/2022",
    QUANTITY: 35,
    PRICE: 44,
    STATUS: "Purchase",
  },
  {
    TYPE: "19th Floor",
    NAME: "Dietrich",
    DATE: "9/7/2022",
    QUANTITY: 53,
    PRICE: 72,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 41",
    NAME: "Gerek",
    DATE: "3/31/2022",
    QUANTITY: 14,
    PRICE: 60,
    STATUS: "Purchase",
  },
  {
    TYPE: "20th Floor",
    NAME: "Austin",
    DATE: "2/12/2022",
    QUANTITY: 81,
    PRICE: 76,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 40",
    NAME: "Sybille",
    DATE: "3/26/2022",
    QUANTITY: 2,
    PRICE: 93,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 91597",
    NAME: "Julienne",
    DATE: "7/23/2022",
    QUANTITY: 62,
    PRICE: 19,
    STATUS: "Purchase",
  },
  {
    TYPE: "11th Floor",
    NAME: "Cherise",
    DATE: "11/14/2022",
    QUANTITY: 32,
    PRICE: 95,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 3",
    NAME: "Issiah",
    DATE: "7/19/2022",
    QUANTITY: 97,
    PRICE: 28,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 98728",
    NAME: "Elyssa",
    DATE: "3/16/2022",
    QUANTITY: 7,
    PRICE: 98,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 85",
    NAME: "Ninnetta",
    DATE: "10/9/2022",
    QUANTITY: 10,
    PRICE: 74,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 63699",
    NAME: "Terrence",
    DATE: "1/22/2022",
    QUANTITY: 32,
    PRICE: 42,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 11",
    NAME: "Johnnie",
    DATE: "6/6/2022",
    QUANTITY: 62,
    PRICE: 31,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 4",
    NAME: "Fayette",
    DATE: "9/23/2022",
    QUANTITY: 84,
    PRICE: 85,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 90",
    NAME: "Jill",
    DATE: "11/8/2022",
    QUANTITY: 62,
    PRICE: 56,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 454",
    NAME: "Marie-ann",
    DATE: "11/1/2022",
    QUANTITY: 26,
    PRICE: 67,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 94840",
    NAME: "Dennie",
    DATE: "1/12/2022",
    QUANTITY: 39,
    PRICE: 86,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 367",
    NAME: "Hoyt",
    DATE: "1/10/2023",
    QUANTITY: 22,
    PRICE: 54,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 41028",
    NAME: "Jessamyn",
    DATE: "3/16/2022",
    QUANTITY: 18,
    PRICE: 60,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 60",
    NAME: "Thaine",
    DATE: "2/20/2022",
    QUANTITY: 94,
    PRICE: 15,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 93",
    NAME: "Aileen",
    DATE: "10/21/2022",
    QUANTITY: 74,
    PRICE: 54,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 5",
    NAME: "Petey",
    DATE: "5/19/2022",
    QUANTITY: 66,
    PRICE: 44,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 1957",
    NAME: "Rianon",
    DATE: "6/14/2022",
    QUANTITY: 99,
    PRICE: 1,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 1439",
    NAME: "Inga",
    DATE: "11/25/2022",
    QUANTITY: 36,
    PRICE: 53,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 201",
    NAME: "Magdalen",
    DATE: "2/14/2022",
    QUANTITY: 8,
    PRICE: 28,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 514",
    NAME: "Nola",
    DATE: "10/23/2022",
    QUANTITY: 72,
    PRICE: 78,
    STATUS: "Purchase",
  },
  {
    TYPE: "9th Floor",
    NAME: "Cirilo",
    DATE: "11/12/2022",
    QUANTITY: 19,
    PRICE: 74,
    STATUS: "Purchase",
  },
  {
    TYPE: "20th Floor",
    NAME: "Veriee",
    DATE: "1/4/2023",
    QUANTITY: 16,
    PRICE: 5,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 9",
    NAME: "Elysha",
    DATE: "11/25/2022",
    QUANTITY: 49,
    PRICE: 45,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 42205",
    NAME: "Brandise",
    DATE: "12/3/2022",
    QUANTITY: 45,
    PRICE: 100,
    STATUS: "Purchase",
  },
  {
    TYPE: "4th Floor",
    NAME: "Elvira",
    DATE: "9/28/2022",
    QUANTITY: 11,
    PRICE: 84,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 55107",
    NAME: "Ellene",
    DATE: "11/14/2022",
    QUANTITY: 47,
    PRICE: 4,
    STATUS: "Purchase",
  },
  {
    TYPE: "10th Floor",
    NAME: "Lonnie",
    DATE: "8/28/2022",
    QUANTITY: 47,
    PRICE: 71,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 35",
    NAME: "Reena",
    DATE: "8/6/2022",
    QUANTITY: 99,
    PRICE: 63,
    STATUS: "Purchase",
  },
  {
    TYPE: "19th Floor",
    NAME: "Brigitte",
    DATE: "6/13/2022",
    QUANTITY: 88,
    PRICE: 8,
    STATUS: "Purchase",
  },
  {
    TYPE: "13th Floor",
    NAME: "Naomi",
    DATE: "9/17/2022",
    QUANTITY: 16,
    PRICE: 22,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 13575",
    NAME: "Sherm",
    DATE: "8/24/2022",
    QUANTITY: 39,
    PRICE: 3,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 1972",
    NAME: "Donny",
    DATE: "1/29/2022",
    QUANTITY: 45,
    PRICE: 6,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 1212",
    NAME: "Elka",
    DATE: "9/26/2022",
    QUANTITY: 19,
    PRICE: 64,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 1691",
    NAME: "Patrice",
    DATE: "2/14/2022",
    QUANTITY: 29,
    PRICE: 35,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 1326",
    NAME: "Allison",
    DATE: "9/27/2022",
    QUANTITY: 71,
    PRICE: 25,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 19122",
    NAME: "Helene",
    DATE: "3/31/2022",
    QUANTITY: 96,
    PRICE: 80,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 320",
    NAME: "Kirsti",
    DATE: "3/10/2022",
    QUANTITY: 88,
    PRICE: 43,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 335",
    NAME: "Modestine",
    DATE: "8/11/2022",
    QUANTITY: 50,
    PRICE: 56,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 997",
    NAME: "Yuri",
    DATE: "9/7/2022",
    QUANTITY: 14,
    PRICE: 30,
    STATUS: "Purchase",
  },
  {
    TYPE: "11th Floor",
    NAME: "Jocelyne",
    DATE: "12/3/2022",
    QUANTITY: 91,
    PRICE: 92,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 88716",
    NAME: "Darbie",
    DATE: "9/12/2022",
    QUANTITY: 99,
    PRICE: 47,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 465",
    NAME: "Theodor",
    DATE: "4/2/2022",
    QUANTITY: 27,
    PRICE: 38,
    STATUS: "Purchase",
  },
  {
    TYPE: "11th Floor",
    NAME: "Myrtice",
    DATE: "10/3/2022",
    QUANTITY: 60,
    PRICE: 46,
    STATUS: "Purchase",
  },
  {
    TYPE: "2nd Floor",
    NAME: "Trev",
    DATE: "1/13/2022",
    QUANTITY: 34,
    PRICE: 85,
    STATUS: "Purchase",
  },
  {
    TYPE: "20th Floor",
    NAME: "Mattheus",
    DATE: "10/15/2022",
    QUANTITY: 91,
    PRICE: 43,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 580",
    NAME: "Alejandra",
    DATE: "7/2/2022",
    QUANTITY: 55,
    PRICE: 13,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 105",
    NAME: "Charlotte",
    DATE: "9/4/2022",
    QUANTITY: 57,
    PRICE: 25,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 1862",
    NAME: "Genevra",
    DATE: "3/4/2022",
    QUANTITY: 75,
    PRICE: 26,
    STATUS: "Purchase",
  },
  {
    TYPE: "8th Floor",
    NAME: "Carlynne",
    DATE: "10/30/2022",
    QUANTITY: 25,
    PRICE: 23,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 52",
    NAME: "Mitch",
    DATE: "5/2/2022",
    QUANTITY: 86,
    PRICE: 73,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 1648",
    NAME: "Susann",
    DATE: "3/1/2022",
    QUANTITY: 24,
    PRICE: 32,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 263",
    NAME: "Cathie",
    DATE: "1/6/2023",
    QUANTITY: 96,
    PRICE: 28,
    STATUS: "Purchase",
  },
  {
    TYPE: "Room 526",
    NAME: "Ulrick",
    DATE: "10/23/2022",
    QUANTITY: 89,
    PRICE: 30,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 59",
    NAME: "Thorpe",
    DATE: "1/18/2022",
    QUANTITY: 27,
    PRICE: 77,
    STATUS: "Purchase",
  },
  {
    TYPE: "Suite 17",
    NAME: "Demetrius",
    DATE: "8/2/2022",
    QUANTITY: 81,
    PRICE: 45,
    STATUS: "Purchase",
  },
  {
    TYPE: "Apt 845",
    NAME: "Bernardina",
    DATE: "6/22/2022",
    QUANTITY: 5,
    PRICE: 15,
    STATUS: "Purchase",
  },
  {
    TYPE: "9th Floor",
    NAME: "Denis",
    DATE: "12/17/2022",
    QUANTITY: 24,
    PRICE: 14,
    STATUS: "Purchase",
  },
  {
    TYPE: "12th Floor",
    NAME: "Angelique",
    DATE: "2/25/2022",
    QUANTITY: 42,
    PRICE: 96,
    STATUS: "Purchase",
  },
  {
    TYPE: "PO Box 44122",
    NAME: "Ilario",
    DATE: "1/17/2022",
    QUANTITY: 47,
    PRICE: 88,
    STATUS: "Purchase",
  },
];
