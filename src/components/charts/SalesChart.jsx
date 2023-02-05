import React, { Component } from "react";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

export const SalesGraph = () => {
  const [dataS, setDataS] = useState();
  const [dataD, setDataD] = useState();

  const [options, setOptions] = useState({
    colors: ["#00FF00"],
    chart: {
      toolbar: {
        show: false,
      },
      //   fill: {

      //   },
      id: "apexchart-example",
    },
    xaxis: {
      categories: dataS,
    },
  });

  const [series, SetSeries] = useState([
    {
      name: "series-1",
      data: dataD,
    },
  ]);

  async function componentDidMount() {
    await fetch("/getSalesData")
      .then((val) => val.json())
      .then((value) => {
        setDataS(value);
        SetSeries([
          {
            name: "series-1",
            data: value,
          },
        ]);
        // console.log(data);
        // return dataS;
      });
  }
  async function componentDidMountV1() {
    await fetch("/getSalesDate")
      .then((val) => val.json())
      .then((value) => {
        setDataD(value);

        setOptions({
          chart: {
            id: "apexchart-example",
          },
          xaxis: {
            categories: value,
          },
        });
        // console.log(data);
        // return dataD;
      });
  }
  useEffect(() => {
    componentDidMount();
    componentDidMountV1();
  }, []);
  //   console.log("Data Type 1 :" + dataD.type);

  //   render();
  //   {
  return (
    <Chart
      options={options}
      series={series}
      type="area"
      // width={500}
      // height={320}
    />
  );
  //   }
};

// export class SalesGraph extends Component {
//   constructor(props) {
//     super(props);

//     const [dataS, setDataS] = useState();
//     const [dataD, setDataD] = useState();

//     async function componentDidMount() {
//       await fetch("/getSalesData")
//         .then((val) => val.json())
//         .then((value) => {
//           setDataS(value);
//           // console.log(data);
//         });
//     }
//     async function componentDidMountV1() {
//       await fetch("/getSalesDate")
//         .then((val) => val.json())
//         .then((value) => {
//           setDataD(value);
//           // console.log(data);
//         });
//     }
//     useEffect(() => {
//       componentDidMount();
//       componentDidMountV1();
//     }, []);

//     this.state = {
//       options: {
//         chart: {
//           id: "apexchart-example",
//         },
//         xaxis: {
//           categories: dataD,
//         },
//       },
//       series: [
//         {
//           name: "series-1",
//           data: dataS,
//         },
//       ],
//     };
//   }
//   render() {
//     return (
//       <Chart
//         options={this.state.options}
//         series={this.state.series}
//         type="area"
//         // width={500}
//         // height={320}
//       />
//     );
//   }
// }
