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
import "./transactionTable.css";
import { getPartyDetails } from "../../api-firebase/firebase";
import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api";
import { Link, useLocation } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";

var data = [];
var dataTable1 = getPartyDetails().then((val) => {
  data = val;
});
// var dataTable1 = getPartyDetails().then((val) => {
//   y = val;
// });
// console.log(data);
export const TransactionTable = (props) => {
  const [dataT, setDataT] = useState();
  const [prev, setPrev] = useState();
  const location = useLocation();
  //const [cName, setCName] = useState(location.state.company);
  const [cName, setCName] = useState();

  // const [dataParty, setDataParty] = useState();
  async function componentDidMount() {
    var partyName = props.partyName;
    await fetch(
      "/getTransactions?number=" + props.userNumber + "&partyName=" + partyName
    )
      .then((val) => val.json())
      .then((value) => {
        setDataT(value);

        // console.log(data);
      });
  }

  if (props.partyName != prev) {
    // componentDidMount();
    console.log("In Transaction Table");
    invoke("get_party_transactions", {
      number: props.userNumber,
      company: props.userCompany,
      selected_name: props.partyName,
    }).then((response) => {
      setDataT(JSON.parse(response));
    });
    setPrev(props.partyName);
  }
  useEffect(() => {
    // componentDidMount();
    console.log("In Transaction Table");
    invoke("get_party_transactions", {
      number: props.userNumber,
      company: props.userCompany,
      selected_name: props.partyName,
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
            <TableCell
              sx={{ fontWeight: 570, fontSize: 12 }}
              className="header-transaction-table"
            ></TableCell>
            <TableCell
              sx={{ fontWeight: 570, fontSize: 12 }}
              className="header-transaction-table"
            >
              TYPE
            </TableCell>
            <TableCell
              sx={{ fontWeight: 570, fontSize: 12 }}
              className="header-transaction-table"
            >
              NUMBER
            </TableCell>
            <TableCell
              sx={{ fontWeight: 570, fontSize: 12 }}
              className="header-transaction-table"
            >
              DATE
            </TableCell>
            <TableCell
              sx={{ fontWeight: 570, fontSize: 12 }}
              className="header-transaction-table"
            >
              TOTAL
            </TableCell>
            <TableCell
              sx={{ fontWeight: 570, fontSize: 12 }}
              className="header-transaction-table"
            >
              BALANCE
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataT?.map((row, index) => (
            <TableRow className={index % 2 == 0 ? "grayColor" : "whiteColor"}>
              <TableCell sx={{ fontSize: 12 }}>
                <BsFillCircleFill
                  className={row.Type == "Sale" ? "greenColor" : "orangeColor"}
                />
              </TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.Type}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.Number}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.Number}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.Total}</TableCell>
              <TableCell sx={{ fontSize: 12, color: "black", fontWeight: 100 }}>
                {row.Balance}
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
    TYPE: "Mazda",
    NUMBER: 36,
    DATE: "8/11/2022",
    TOTAL: "$29622.39",
    BALANCE: "$65483.84",
  },
  {
    TYPE: "Mazda",
    NUMBER: 86,
    DATE: "11/18/2022",
    TOTAL: "$89271.74",
    BALANCE: "$96006.42",
  },
  {
    TYPE: "Mercury",
    NUMBER: 27,
    DATE: "3/24/2022",
    TOTAL: "$10989.29",
    BALANCE: "$80514.08",
  },
  {
    TYPE: "Toyota",
    NUMBER: 100,
    DATE: "2/27/2022",
    TOTAL: "$29903.46",
    BALANCE: "$84910.69",
  },
  {
    TYPE: "Cadillac",
    NUMBER: 1,
    DATE: "12/23/2022",
    TOTAL: "$3132.30",
    BALANCE: "$8151.71",
  },
  {
    TYPE: "Pontiac",
    NUMBER: 60,
    DATE: "7/12/2022",
    TOTAL: "$14773.73",
    BALANCE: "$57527.99",
  },
  {
    TYPE: "Mercury",
    NUMBER: 96,
    DATE: "4/3/2022",
    TOTAL: "$97108.61",
    BALANCE: "$53384.69",
  },
  {
    TYPE: "Pontiac",
    NUMBER: 76,
    DATE: "3/21/2022",
    TOTAL: "$64905.84",
    BALANCE: "$57369.74",
  },
  {
    TYPE: "Volkswagen",
    NUMBER: 57,
    DATE: "9/27/2022",
    TOTAL: "$38754.28",
    BALANCE: "$61895.30",
  },
  {
    TYPE: "Infiniti",
    NUMBER: 6,
    DATE: "11/22/2022",
    TOTAL: "$83358.75",
    BALANCE: "$84932.52",
  },
  {
    TYPE: "Ford",
    NUMBER: 27,
    DATE: "11/9/2022",
    TOTAL: "$64749.85",
    BALANCE: "$3991.87",
  },
  {
    TYPE: "Lotus",
    NUMBER: 48,
    DATE: "11/2/2022",
    TOTAL: "$68427.19",
    BALANCE: "$69101.63",
  },
  {
    TYPE: "Mitsubishi",
    NUMBER: 37,
    DATE: "8/12/2022",
    TOTAL: "$78309.79",
    BALANCE: "$39173.10",
  },
  {
    TYPE: "GMC",
    NUMBER: 28,
    DATE: "1/18/2022",
    TOTAL: "$75678.04",
    BALANCE: "$89703.81",
  },
  {
    TYPE: "Mitsubishi",
    NUMBER: 84,
    DATE: "10/11/2022",
    TOTAL: "$48709.57",
    BALANCE: "$45696.21",
  },
  {
    TYPE: "Chrysler",
    NUMBER: 39,
    DATE: "10/28/2022",
    TOTAL: "$54758.45",
    BALANCE: "$69585.91",
  },
  {
    TYPE: "Toyota",
    NUMBER: 65,
    DATE: "1/27/2022",
    TOTAL: "$87464.64",
    BALANCE: "$36188.23",
  },
  {
    TYPE: "BMW",
    NUMBER: 77,
    DATE: "6/22/2022",
    TOTAL: "$60111.85",
    BALANCE: "$77768.39",
  },
  {
    TYPE: "Jeep",
    NUMBER: 83,
    DATE: "5/29/2022",
    TOTAL: "$41488.34",
    BALANCE: "$4492.40",
  },
  {
    TYPE: "Lexus",
    NUMBER: 33,
    DATE: "7/17/2022",
    TOTAL: "$69757.38",
    BALANCE: "$61121.97",
  },
  {
    TYPE: "Pontiac",
    NUMBER: 1,
    DATE: "8/15/2022",
    TOTAL: "$79858.86",
    BALANCE: "$17491.48",
  },
  {
    TYPE: "Volvo",
    NUMBER: 62,
    DATE: "5/1/2022",
    TOTAL: "$16987.70",
    BALANCE: "$86407.84",
  },
  {
    TYPE: "Mitsubishi",
    NUMBER: 4,
    DATE: "5/31/2022",
    TOTAL: "$43845.24",
    BALANCE: "$94625.35",
  },
  {
    TYPE: "Audi",
    NUMBER: 96,
    DATE: "9/17/2022",
    TOTAL: "$39122.13",
    BALANCE: "$75651.99",
  },
  {
    TYPE: "GMC",
    NUMBER: 79,
    DATE: "1/30/2022",
    TOTAL: "$10492.53",
    BALANCE: "$8365.58",
  },
  {
    TYPE: "Toyota",
    NUMBER: 8,
    DATE: "6/5/2022",
    TOTAL: "$56248.51",
    BALANCE: "$37448.03",
  },
  {
    TYPE: "Bentley",
    NUMBER: 53,
    DATE: "2/7/2022",
    TOTAL: "$57904.54",
    BALANCE: "$15509.78",
  },
  {
    TYPE: "Audi",
    NUMBER: 67,
    DATE: "7/22/2022",
    TOTAL: "$77775.66",
    BALANCE: "$93085.03",
  },
  {
    TYPE: "Mazda",
    NUMBER: 95,
    DATE: "10/13/2022",
    TOTAL: "$67608.08",
    BALANCE: "$41909.39",
  },
  {
    TYPE: "Bentley",
    NUMBER: 40,
    DATE: "1/23/2022",
    TOTAL: "$7690.31",
    BALANCE: "$19441.65",
  },
  {
    TYPE: "Infiniti",
    NUMBER: 43,
    DATE: "1/19/2022",
    TOTAL: "$65243.19",
    BALANCE: "$50714.18",
  },
  {
    TYPE: "Subaru",
    NUMBER: 69,
    DATE: "2/14/2022",
    TOTAL: "$63282.55",
    BALANCE: "$27846.55",
  },
  {
    TYPE: "Pontiac",
    NUMBER: 97,
    DATE: "1/25/2022",
    TOTAL: "$51039.51",
    BALANCE: "$84758.60",
  },
  {
    TYPE: "Chevrolet",
    NUMBER: 74,
    DATE: "10/14/2022",
    TOTAL: "$17418.01",
    BALANCE: "$24879.29",
  },
  {
    TYPE: "Buick",
    NUMBER: 54,
    DATE: "2/13/2022",
    TOTAL: "$17530.10",
    BALANCE: "$44579.14",
  },
  {
    TYPE: "Toyota",
    NUMBER: 41,
    DATE: "3/1/2022",
    TOTAL: "$85987.11",
    BALANCE: "$79226.82",
  },
  {
    TYPE: "Hyundai",
    NUMBER: 33,
    DATE: "9/15/2022",
    TOTAL: "$67466.95",
    BALANCE: "$5374.10",
  },
  {
    TYPE: "Suzuki",
    NUMBER: 1,
    DATE: "12/11/2022",
    TOTAL: "$63389.89",
    BALANCE: "$517.88",
  },
  {
    TYPE: "Toyota",
    NUMBER: 65,
    DATE: "3/15/2022",
    TOTAL: "$48738.17",
    BALANCE: "$42936.19",
  },
  {
    TYPE: "Mazda",
    NUMBER: 2,
    DATE: "5/23/2022",
    TOTAL: "$21245.00",
    BALANCE: "$79771.65",
  },
  {
    TYPE: "Buick",
    NUMBER: 74,
    DATE: "4/25/2022",
    TOTAL: "$81858.01",
    BALANCE: "$80520.16",
  },
  {
    TYPE: "Buick",
    NUMBER: 100,
    DATE: "12/27/2022",
    TOTAL: "$39391.30",
    BALANCE: "$50482.36",
  },
  {
    TYPE: "Land Rover",
    NUMBER: 93,
    DATE: "12/3/2022",
    TOTAL: "$21076.46",
    BALANCE: "$50154.21",
  },
  {
    TYPE: "Buick",
    NUMBER: 2,
    DATE: "1/28/2022",
    TOTAL: "$78646.37",
    BALANCE: "$84680.47",
  },
  {
    TYPE: "Mercedes-Benz",
    NUMBER: 40,
    DATE: "6/23/2022",
    TOTAL: "$21521.25",
    BALANCE: "$70349.89",
  },
  {
    TYPE: "Porsche",
    NUMBER: 92,
    DATE: "8/8/2022",
    TOTAL: "$24866.80",
    BALANCE: "$86484.69",
  },
  {
    TYPE: "Ford",
    NUMBER: 94,
    DATE: "3/15/2022",
    TOTAL: "$18801.63",
    BALANCE: "$5204.61",
  },
  {
    TYPE: "Plymouth",
    NUMBER: 80,
    DATE: "5/23/2022",
    TOTAL: "$23615.98",
    BALANCE: "$76624.87",
  },
  {
    TYPE: "Mercury",
    NUMBER: 59,
    DATE: "8/31/2022",
    TOTAL: "$66326.08",
    BALANCE: "$22173.87",
  },
  {
    TYPE: "Mazda",
    NUMBER: 32,
    DATE: "9/2/2022",
    TOTAL: "$73028.23",
    BALANCE: "$53194.25",
  },
  {
    TYPE: "Lincoln",
    NUMBER: 43,
    DATE: "12/3/2022",
    TOTAL: "$14753.24",
    BALANCE: "$16710.14",
  },
  {
    TYPE: "Mercury",
    NUMBER: 19,
    DATE: "6/14/2022",
    TOTAL: "$82960.08",
    BALANCE: "$55479.68",
  },
  {
    TYPE: "Subaru",
    NUMBER: 4,
    DATE: "3/9/2022",
    TOTAL: "$6412.60",
    BALANCE: "$82967.11",
  },
  {
    TYPE: "Audi",
    NUMBER: 72,
    DATE: "3/22/2022",
    TOTAL: "$18899.81",
    BALANCE: "$48251.74",
  },
  {
    TYPE: "Ram",
    NUMBER: 89,
    DATE: "11/5/2022",
    TOTAL: "$68777.48",
    BALANCE: "$95944.33",
  },
  {
    TYPE: "Mazda",
    NUMBER: 89,
    DATE: "10/16/2022",
    TOTAL: "$73199.19",
    BALANCE: "$49388.32",
  },
  {
    TYPE: "GMC",
    NUMBER: 9,
    DATE: "3/8/2022",
    TOTAL: "$4622.74",
    BALANCE: "$20734.03",
  },
  {
    TYPE: "Ford",
    NUMBER: 21,
    DATE: "5/25/2022",
    TOTAL: "$10617.92",
    BALANCE: "$91501.51",
  },
  {
    TYPE: "Mitsubishi",
    NUMBER: 69,
    DATE: "12/26/2022",
    TOTAL: "$50477.48",
    BALANCE: "$55444.81",
  },
  {
    TYPE: "MINI",
    NUMBER: 62,
    DATE: "9/22/2022",
    TOTAL: "$89406.98",
    BALANCE: "$73510.67",
  },
  {
    TYPE: "Chevrolet",
    NUMBER: 40,
    DATE: "1/14/2022",
    TOTAL: "$16790.68",
    BALANCE: "$45765.41",
  },
  {
    TYPE: "Mercedes-Benz",
    NUMBER: 23,
    DATE: "1/11/2022",
    TOTAL: "$53471.41",
    BALANCE: "$43978.30",
  },
  {
    TYPE: "Subaru",
    NUMBER: 23,
    DATE: "10/21/2022",
    TOTAL: "$94784.61",
    BALANCE: "$43452.90",
  },
  {
    TYPE: "Suzuki",
    NUMBER: 19,
    DATE: "10/22/2022",
    TOTAL: "$15148.05",
    BALANCE: "$98725.10",
  },
  {
    TYPE: "Hyundai",
    NUMBER: 97,
    DATE: "6/13/2022",
    TOTAL: "$50845.44",
    BALANCE: "$45732.10",
  },
  {
    TYPE: "Geo",
    NUMBER: 81,
    DATE: "7/3/2022",
    TOTAL: "$2607.11",
    BALANCE: "$90211.67",
  },
  {
    TYPE: "Suzuki",
    NUMBER: 11,
    DATE: "3/6/2022",
    TOTAL: "$94852.27",
    BALANCE: "$21752.31",
  },
  {
    TYPE: "Audi",
    NUMBER: 78,
    DATE: "6/10/2022",
    TOTAL: "$83635.32",
    BALANCE: "$88798.88",
  },
  {
    TYPE: "Toyota",
    NUMBER: 36,
    DATE: "4/7/2022",
    TOTAL: "$64619.87",
    BALANCE: "$60657.58",
  },
  {
    TYPE: "Oldsmobile",
    NUMBER: 35,
    DATE: "11/16/2022",
    TOTAL: "$4532.63",
    BALANCE: "$26465.04",
  },
  {
    TYPE: "Saab",
    NUMBER: 18,
    DATE: "8/7/2022",
    TOTAL: "$5250.30",
    BALANCE: "$64367.84",
  },
  {
    TYPE: "Bentley",
    NUMBER: 57,
    DATE: "9/3/2022",
    TOTAL: "$79544.48",
    BALANCE: "$71898.70",
  },
  {
    TYPE: "GMC",
    NUMBER: 4,
    DATE: "8/14/2022",
    TOTAL: "$5318.54",
    BALANCE: "$96205.73",
  },
  {
    TYPE: "Ford",
    NUMBER: 77,
    DATE: "12/2/2022",
    TOTAL: "$33141.15",
    BALANCE: "$65228.11",
  },
  {
    TYPE: "Ford",
    NUMBER: 67,
    DATE: "10/28/2022",
    TOTAL: "$63250.25",
    BALANCE: "$40117.54",
  },
  {
    TYPE: "Honda",
    NUMBER: 13,
    DATE: "6/14/2022",
    TOTAL: "$93896.63",
    BALANCE: "$7096.70",
  },
  {
    TYPE: "Buick",
    NUMBER: 71,
    DATE: "1/26/2022",
    TOTAL: "$36972.36",
    BALANCE: "$67939.70",
  },
  {
    TYPE: "Chrysler",
    NUMBER: 52,
    DATE: "5/15/2022",
    TOTAL: "$66220.50",
    BALANCE: "$14836.50",
  },
  {
    TYPE: "Chrysler",
    NUMBER: 49,
    DATE: "1/7/2022",
    TOTAL: "$40168.73",
    BALANCE: "$12367.17",
  },
  {
    TYPE: "Ford",
    NUMBER: 21,
    DATE: "1/28/2022",
    TOTAL: "$55158.02",
    BALANCE: "$39531.51",
  },
  {
    TYPE: "Dodge",
    NUMBER: 64,
    DATE: "12/12/2022",
    TOTAL: "$77735.69",
    BALANCE: "$49597.81",
  },
  {
    TYPE: "Ford",
    NUMBER: 4,
    DATE: "10/17/2022",
    TOTAL: "$20633.38",
    BALANCE: "$83585.01",
  },
  {
    TYPE: "Acura",
    NUMBER: 5,
    DATE: "6/4/2022",
    TOTAL: "$28874.75",
    BALANCE: "$58241.70",
  },
  {
    TYPE: "Infiniti",
    NUMBER: 16,
    DATE: "7/15/2022",
    TOTAL: "$16472.51",
    BALANCE: "$9644.76",
  },
  {
    TYPE: "Ford",
    NUMBER: 59,
    DATE: "9/8/2022",
    TOTAL: "$10932.57",
    BALANCE: "$81402.05",
  },
  {
    TYPE: "Mitsubishi",
    NUMBER: 15,
    DATE: "6/16/2022",
    TOTAL: "$78916.64",
    BALANCE: "$40065.11",
  },
  {
    TYPE: "Honda",
    NUMBER: 53,
    DATE: "5/1/2022",
    TOTAL: "$88154.65",
    BALANCE: "$55681.58",
  },
  {
    TYPE: "Chevrolet",
    NUMBER: 97,
    DATE: "11/13/2022",
    TOTAL: "$28601.41",
    BALANCE: "$80385.55",
  },
  {
    TYPE: "Lexus",
    NUMBER: 100,
    DATE: "3/20/2022",
    TOTAL: "$26217.79",
    BALANCE: "$8624.64",
  },
  {
    TYPE: "Chevrolet",
    NUMBER: 34,
    DATE: "3/17/2022",
    TOTAL: "$42762.73",
    BALANCE: "$24303.40",
  },
  {
    TYPE: "Oldsmobile",
    NUMBER: 1,
    DATE: "9/5/2022",
    TOTAL: "$96827.71",
    BALANCE: "$93594.62",
  },
  {
    TYPE: "Lexus",
    NUMBER: 26,
    DATE: "11/8/2022",
    TOTAL: "$84976.32",
    BALANCE: "$47452.88",
  },
  {
    TYPE: "Mercury",
    NUMBER: 78,
    DATE: "10/24/2022",
    TOTAL: "$31048.58",
    BALANCE: "$52388.82",
  },
  {
    TYPE: "Land Rover",
    NUMBER: 20,
    DATE: "4/13/2022",
    TOTAL: "$59735.02",
    BALANCE: "$31987.82",
  },
  {
    TYPE: "Ford",
    NUMBER: 32,
    DATE: "8/2/2022",
    TOTAL: "$46758.22",
    BALANCE: "$76335.50",
  },
  {
    TYPE: "GMC",
    NUMBER: 28,
    DATE: "10/18/2022",
    TOTAL: "$14449.11",
    BALANCE: "$98652.70",
  },
  {
    TYPE: "Mercedes-Benz",
    NUMBER: 85,
    DATE: "7/22/2022",
    TOTAL: "$98107.16",
    BALANCE: "$70574.99",
  },
  {
    TYPE: "Chevrolet",
    NUMBER: 26,
    DATE: "6/2/2022",
    TOTAL: "$25510.17",
    BALANCE: "$67062.26",
  },
  {
    TYPE: "Dodge",
    NUMBER: 31,
    DATE: "9/29/2022",
    TOTAL: "$87720.97",
    BALANCE: "$17102.00",
  },
  {
    TYPE: "Oldsmobile",
    NUMBER: 98,
    DATE: "6/5/2022",
    TOTAL: "$24195.06",
    BALANCE: "$29991.46",
  },
];
