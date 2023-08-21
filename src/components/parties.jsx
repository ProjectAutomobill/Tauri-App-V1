import { React, useState, useEffect } from "react";
import { Table } from "@mui/material";
import "./parties.css";
import { PartiesTable } from "./tables/partiesTable";
import { TransactionTable } from "./tables/transactionTable";
import { FiSearch } from "react-icons/fi";
import {
  AiOutlineWhatsApp,
  AiFillSetting,
  AiOutlinePlus,
  AiFillPrinter,
} from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { BiAlarmAdd } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { BiAlarm } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const [b_name, setNewBName] = useState();

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PartiesModal } from "./modals/partiesModal";
import { event, invoke } from "@tauri-apps/api";
import LoadingSpinner from "../loading";
export const Parties = (props) => {
  const showToastMessage = () => {
    toast.success("Party Added !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const [modalShow, setModalShow] = useState(false);
  const [partyTransaction, setPartyTransaction] = useState();
  const [prevParty, setPrevParty] = useState("");
  const [partyDetails, setPartyDetails] = useState();
  const [partyNumber, setPartyNumber] = useState();
  const [partyEmail, setPartyEmail] = useState();
  const [partyAddress, setPartyAddress] = useState();
  const [partyGSTIN, setPartyGSTIN] = useState();
  const [stateChange, setStateChange] = useState(true);
  const [refresh, setrefresh] = useState(0);

  const location = useLocation();
  // const [cName, setCName] = useState(location.state.company);
  const [cName, setCName] = useState();
  const [b_name, setNewBName] = useState();
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  // const [dataParty, setDataParty] = useState();

  if (prevParty != partyTransaction) {
    // console.log(partyTransaction + "------------------");
    setPrevParty(partyTransaction);
    invoke("get_parties_details", {
      number: props.userNumber,
      company: props.userCompany,
      partyName: partyTransaction,
    })
      // `invoke` returns a Promise
      .then(async (response) => {
        setPartyDetails(JSON.parse(response));
        await setPartyNumber(JSON.parse(response).Number);
        await setPartyEmail(JSON.parse(response).Email);
        await setPartyAddress(JSON.parse(response).Address);
        await setPartyGSTIN(JSON.parse(response).GSTIN);
      });
  }
  // async function getPartyDetailsUpper() {
  //   await fetch("/getTransactions?partyName=" + partyTransaction)
  //     .then((val) => val.json())
  //     .then((value) => {
  //       setDataParty(value);

  //       // console.log(data);
  //     });
  // }

  // useEffect(() => {
  //   getPartyDetailsUpper();
  // }, []);
  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }

  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  async function getPartyDetails() {
    // console.log("???????????????????????????????????????????????????????");
    // console.log(partyTransaction);
    invoke("get_parties_details", {
      number: props.userNumber,
      company: props.userCompany,
      partyName: partyTransaction,
    })
      // `invoke` returns a Promise
      .then(async (response) => {
        setPartyDetails(JSON.parse(response));
        // console.log("Party Data : " + partyDetails["Number"]);
        // setPartyNumber(partyDetails["Number"]);
        // setPartyEmail(partyDetails["Email"]);
        // setPartyAddress(partyDetails["Address"]);
        // setPartyGSTIN(partyDetails["GSTIN"]);

        await setPartyNumber(JSON.parse(response).Number);
        await setPartyEmail(JSON.parse(response).Email);
        await setPartyAddress(JSON.parse(response).Address);
        await setPartyGSTIN(JSON.parse(response).GSTIN);
      });
    // await fetch(
    //   "/getPartyDetails?number=" +
    //     "&company=" +
    //     cName.toString() +
    //     props.userNumber +
    //     "partyName=" +
    //     partyTransaction
    // )
    //   .then((val) => val.json())
    //   .then((value) => {
    //     setPartyDetails(value);
    //     // console.log("Party Data : " + partyDetails["Number"]);
    //     setPartyNumber(partyDetails["Number"]);
    //     setPartyEmail(partyDetails["Email"]);
    //     setPartyAddress(partyDetails["Address"]);
    //     setPartyGSTIN(partyDetails["GSTIN"]);

    //     invoke("get_parties_details", {
    //       number: props.userNumber,
    //       company: cName.toString(),
    //       party_name: partyTransaction,
    //     })
    //       // `invoke` returns a Promise
    //       .then((response) => {
    //         setPartyDetails(JSON.parse(response));
    //         // console.log("Party Data : " + partyDetails["Number"]);
    //         setPartyNumber(partyDetails["Number"]);
    //         setPartyEmail(partyDetails["Email"]);
    //         setPartyAddress(partyDetails["Address"]);
    //         setPartyGSTIN(partyDetails["GSTIN"]);
    //       });
    //   });
  }
  function update_b_name_parties() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  useEffect(() => {
    // getPartyDetails();
    console.log("IN PARTY : " + props.userCompany);
    invoke("get_parties_details", {
      number: props.userNumber,
      company: props.userCompany,
      partyName: partyTransaction,
    })
      // `invoke` returns a Promise
      .then((response) => {
        setPartyDetails(JSON.parse(response));
        // console.log("Party Data : " + partyDetails["Number"]);
        // setPartyNumber(partyDetails["Number"]);
        // setPartyEmail(partyDetails["Email"]);
        // setPartyAddress(partyDetails["Address"]);
        // setPartyGSTIN(partyDetails["GSTIN"]);
        setPartyNumber(JSON.parse(response).Number);
        setPartyEmail(JSON.parse(response).Email);
        setPartyAddress(JSON.parse(response).Address);
        setPartyGSTIN(JSON.parse(response).GSTIN);
      });
  }, []);
  // function test() {
  //   console.log(modalShow);
  //   setModalShow(true);
  // }
  return (
    <div className="parties-items-parties">
      <ToastContainer />
      <div className="upperDiv-parties">
        <div className="upperDivPart1-parties">
          <div className="input-business-parties">
            {/* <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-parties"
            ></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-parties"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-parties"
              onClick={update_b_name_parties}
            >
              Save
            </button>
          </div>

          {/* <div className='middle-portion'>
                        PRODUCTS
                    </div> */}

          <div className="marginDiv-parties">
            <div className="saleBtnDiv-parties">
              <BsFillPlusCircleFill className="plusSale-parties" />
              {/* <button className="addBtnSale-parties" onClick={navigateToSale}>
                Add Sale
              </button> */}
              <div className="addBtnSale-parties">Add Sale</div>
              {/* <button className="addBtnSale-dashboard" onClick={navigateToSale}>
                Add Sale
              </button> */}
            </div>
            <div className="purchaseBtnDiv-parties">
              {/* <AiOutlinePlus className="plusSale" /> */}
              <BsFillPlusCircleFill className="plusPurchase-parties" />
              {/* <button
                className="addBtnPurchase-parties"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button> */}
              <div
                className="addBtnPurchase-parties"
                // onClick={navigateToPurchase}
              >
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-parties">
              <BsFillPlusCircleFill className="plusSaleMore-parties" />
              <button className="addBtnMore-parties">Add More</button>
            </div>
            {/* <div className="settingBtnDiv-parties">
              <AiFillSetting className="setting-parties" />
            </div> */}

            <div className="vertical-line-upperPart-parties"></div>

            <div className="settingBtnDiv-upperPart-parties">
              <AiFillSetting className="setting-upperPart-parties" />
            </div>
            <div className="printBtnDiv-upperPart-parties">
              <AiFillPrinter className="print-upperPart-parties" />
            </div>
          </div>
          {/* <div className='horizontal-line'>fgyrfhj</div> */}
        </div>
        <div className="horizontal-line-parties"></div>
        <div className="heading-parties">NAME</div>
        <div className="horizontal-line-parties" id="blue-line-parties"></div>
      </div>

      <div className="lowerBody-parties">
        <div className="leftDiv-parties">
          {/* <Link style={{ textDecoration: "none" }} to="/addParty"> */}
          <div className="leftDivbtnSearch-parties">
            <div className="searchIcon-class-parties">
              <BsSearch className="searchIcon-parties" />
            </div>
            <button
              className="partyBtn-parties"
              onClick={() => setModalShow(true)}
              // onClick={getPartyDetails}
            >
              {" "}
              <AiOutlinePlus className="plus-parties" />
              Add Party
            </button>
          </div>

          {/* </Link> */}
          <PartiesTable
            setTrans={setPartyTransaction}
            partyName={partyTransaction}
            userNumber={props.userNumber}
            setStateChange={setStateChange}
            stateChange={stateChange}
            getPartyDetails={getPartyDetails}
            userCompany={props.userCompany}
            refresh={refresh}
            setrefresh={setrefresh}
          />
        </div>

        <div className="rightDiv-parties">
          <div className="innerRightDiv-parties">
            <div className="upperDivRight-parties">
              <div className="upperDivRight1-parties">
                <div className="upperDivRight1-name-parties">
                  <b>{partyTransaction}</b>
                </div>
                <div className="left-content-right1-div-parties">
                  <div className="icon1-RightDiv-parties">
                    <RiMessage2Fill />{" "}
                  </div>
                  <div className="icon2-RightDiv-parties">
                    <AiOutlineWhatsApp />
                  </div>
                  <div className="icon3-RightDiv-parties">
                    <BiAlarmAdd />
                  </div>
                </div>
              </div>

              <div className="upperDivRight2-parties">
                <div className="upperDivRight2-part1-parties">
                  {/* <div className="upperDivRight2-part1-phoneNo-parties"> */}
                  <div className="label-upper-partyDetails-phoneNo-parties">
                    <div className="label-upper-partyDetails-parties">
                      Phone no. : <div className="blue-text">{partyNumber}</div>
                    </div>
                  </div>
                  {/* Phone no. :{""} */}
                  {/* <div className="label-upper-partyDetails-parties">
                    {partyNumber}
                  </div> */}
                  {/* </div> */}
                  <div className="label-upper-partyDetails-Email-parties">
                    <div className="label-upper-partyDetails-parties">
                      Email : <div className="blue-text">{partyEmail}</div>
                    </div>
                  </div>
                  {/* Phone no. :{""} */}
                  {/* <div className="label-upper-partyDetails-parties">
                    {partyEmail}
                  </div> */}
                  <div className="label-upper-partyDetails-setCreditLimit-parties">
                    <div className="label-upper-partyDetails-parties">
                      No Credit Limit Set :
                      <div className="blue-text">{partyNumber}</div>
                    </div>
                  </div>
                  {/* Phone no. :{""} */}
                  {/* <div className="label-upper-partyDetails-parties">
                    {partyNumber}
                  </div> */}

                  {/* <div className="upperDivRight2-part1-email-parties">
                    {" "}
                    Email :
                  </div> */}
                  {/* <div className="upperDivRight2-part1-NoCredit-parties">
                    {" "}
                    No Credit Limit set :
                  </div> */}
                </div>

                <div className="upperDivRight2-part2-parties">
                  {/* <div className="upperDivRight2-part2-ADiv-parties"> */}
                  {/* <div className="label-upper-partyDetails-setCreditLimit-parties">
                    <div className="label-upper-partyDetails-parties">
                      Set Credit Limit :{partyNumber}
                    </div>
                  </div> */}
                  <div className="label-upper-partyDetails-address-parties">
                    <div className="label-upper-partyDetails-parties">
                      Address : <div className="blue-text">{partyAddress}</div>
                    </div>
                  </div>
                  <div className="label-upper-partyDetails-GSTIN-parties">
                    <div className="label-upper-partyDetails-parties">
                      Gstin : <div className="blue-text">{partyGSTIN}</div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>

            <div className="lowerDivRight-parties">
              <div className="transaction-search-parties">
                <h6 className="transaction-lowerDiv-parties">TRANSACTIONS</h6>
                <input
                  type="search"
                  name="search"
                  id=""
                  className="search-input-parties"
                  placeholder=""
                  onChange={(e) => setSearchText(e.target.value)}
                ></input>
              </div>
              <div className="Ttable-parties">
                <TransactionTable
                  partyName={partyTransaction}
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                  searchText={searchText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PartiesModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        userNumber={props.userNumber}
        userCompany={props.userCompany}
        setrefresh={setrefresh}
        toastMessage={showToastMessage}
      />
    </div>
  );
};
