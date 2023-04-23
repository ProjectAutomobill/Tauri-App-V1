import { React, useState, useEffect } from "react";
import { Table } from "@mui/material";
import "./parties.css";
import { PartiesTable } from "./tables/partiesTable";
import { TransactionTable } from "./tables/transactionTable";
import { FiSearch } from "react-icons/fi";
import { AiFillSetting, AiOutlinePlus } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiAlarm } from "react-icons/bi";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PartiesModal } from "./modals/partiesModal";
import { invoke } from "@tauri-apps/api";

export const Parties = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [partyTransaction, setPartyTransaction] = useState();
  const [partyDetails, setPartyDetails] = useState();
  const [partyNumber, setPartyNumber] = useState();
  const [partyEmail, setPartyEmail] = useState();
  const [partyAddress, setPartyAddress] = useState();
  const [partyGSTIN, setPartyGSTIN] = useState();
  const location = useLocation();
  const [cName, setCName] = useState(location.state.company);
  // const [dataParty, setDataParty] = useState();

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

  async function getPartyDetails() {
    // console.log("Party Name : " + partyTransaction);
    await fetch(
      "/getPartyDetails?number=" +
        "&company=" +
        cName.toString() +
        props.userNumber +
        "partyName=" +
        partyTransaction
    )
      .then((val) => val.json())
      .then((value) => {
        setPartyDetails(value);
        // console.log("Party Data : " + partyDetails["Number"]);
        setPartyNumber(partyDetails["Number"]);
        setPartyEmail(partyDetails["Email"]);
        setPartyAddress(partyDetails["Address"]);
        setPartyGSTIN(partyDetails["GSTIN"]);
      });
  }
  useEffect(() => {
    // getPartyDetails();

    invoke("get_parties_details", {
      number: props.userNumber,
      company: cName.toString(),
      party_name: partyTransaction,
    })
      // `invoke` returns a Promise
      .then((response) => {
        setPartyDetails(JSON.parse(response));
        // console.log("Party Data : " + partyDetails["Number"]);
        setPartyNumber(partyDetails["Number"]);
        setPartyEmail(partyDetails["Email"]);
        setPartyAddress(partyDetails["Address"]);
        setPartyGSTIN(partyDetails["GSTIN"]);
      });
  }, []);
  // function test() {
  //   console.log(modalShow);
  //   setModalShow(true);
  // }
  return (
    <div className="parties-items-parties">
      <div className="upperDiv-parties">
        <div className="upperDivPart1-parties">
          <div className="input-business-parties">
            <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-parties"
            ></input>
          </div>

          {/* <div className='middle-portion'>
                        PRODUCTS
                    </div> */}

          <div className="marginDiv-parties">
            <div className="saleBtnDiv-parties">
              <BsFillPlusCircleFill className="plusSale-parties" />
              <button className="addBtnSale-parties">Add Sale</button>
            </div>
            <div className="purchaseBtnDiv-parties">
              {/* <AiOutlinePlus className="plusSale" /> */}
              <BsFillPlusCircleFill className="plusSale-purchase-parties" />
              <button className="addBtnPurchase-parties">Add Purchase</button>
            </div>
            <div className="moreBtnDiv-parties">
              <BsFillPlusCircleFill className="plusSaleMore-parties" />
              <button className="addBtnMore-parties">Add More</button>
            </div>
            <div className="settingBtnDiv-parties">
              <AiFillSetting className="setting-parties" />
            </div>
          </div>
          {/* <div className='horizontal-line'>fgyrfhj</div> */}
        </div>
        <div className="horizontal-line-parties"></div>
        <div className="heading-parties">NAME</div>
        <div className="horizontal-line-parties" id="blue-line"></div>
      </div>

      <div className="lowerBody-parties">
        <div className="leftDiv-parties">
          {/* <Link style={{ textDecoration: "none" }} to="/addParty"> */}
          <div className="leftDivbtnSearch-parties">
            <FiSearch className="searchIcon-parties" />
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
          />
        </div>

        <div className="rightDiv-parties">
          <div className="innerRightDiv-parties">
            <div className="upperDivRight-parties">
              <div className="upperDivRight1-parties">
                <div className="upperDivRight1-name-parties">
                  <b>{partyTransaction}</b>
                </div>
                <div className="upperDivRight1-options-parties">
                  <div className="upperDivRight1-message-parties">
                    <AiOutlineMessage />
                  </div>
                  <div className="upperDivRight1-whatsapp-parties">
                    <AiOutlineWhatsApp />
                  </div>
                  <div className="upperDivRight1-alarm-parties">
                    <BiAlarm />
                  </div>
                </div>
              </div>

              <div className="upperDivRight2-parties">
                <div className="upperDivRight2-part1-parties">
                  <div className="upperDivRight2-part1-phoneNo-parties">
                    <label className="label-upper-partyDetails">
                      Phone no. :
                    </label>
                    {/* Phone no. :{""} */}
                    <label className="label-upper-partyDetails">
                      {partyNumber}
                    </label>
                    <label className="label-upper-partyDetails">Email : </label>
                    {/* Phone no. :{""} */}
                    <label className="label-upper-partyDetails">
                      {partyEmail}
                    </label>
                    <label className="label-upper-partyDetails">
                      Set Credit Limit :
                    </label>
                    {/* Phone no. :{""} */}
                    <label className="label-upper-partyDetails">
                      {partyNumber}
                    </label>
                  </div>
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
                  <label className="label-upper-partyDetails">Address :</label>
                  {/* Phone no. :{""} */}
                  <label className="label-upper-partyDetails">
                    {partyAddress}
                  </label>

                  <label className="label-upper-partyDetails">GSTIN :</label>
                  {/* Phone no. :{""} */}
                  <label className="label-upper-partyDetails">
                    {partyGSTIN}
                  </label>
                </div>
              </div>
            </div>

            <div className="lowerDivRight-parties">
              <div className="transaction-search-parties">
                <h5>TRANSACTIONS</h5>
                <input
                  type="search"
                  name="search"
                  id=""
                  className="search-input-parties"
                  placeholder="Search..."
                />
              </div>
              <div className="Ttable-parties">
                <TransactionTable
                  partyName={partyTransaction}
                  userNumber={props.userNumber}
                  userCompany={cName}
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
        userCompany={cName.toString()}
      />
    </div>
  );
};
