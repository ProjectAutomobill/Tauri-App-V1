import { render } from "@testing-library/react";
import "./sidebar.css";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { HiTemplate } from "react-icons/hi";
import { GiPaperBagOpen } from "react-icons/gi";
import { AiFillWallet } from "react-icons/ai";
import { BsFillCartDashFill } from "react-icons/bs";
import { AiFillBank } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";
import { RiListSettingsFill } from "react-icons/ri";
import { MdSettingsBackupRestore } from "react-icons/md";
import { GoSync } from "react-icons/go";
import { TbFileReport } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Rotate90DegreesCcw, RotateLeft } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { CompanyModal } from "./modals/companyModal";
export function SideBar(props) {
  const [companyName, setCompanyName] = useState("Your Company");
  const [modalShowCompanyModal, setModalShowCompanyModal] = useState(false);

  function CompanyModalToggle() {
    setModalShowCompanyModal(true);
  }
  function print(val) {
    props.val2(val);
  }
  function dropdown_option(val) {
    print(val);
    var dropdown = document.getElementById("sale-dropdown");
    var arrow = document.getElementById("downArrow");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
      // arrow.style.transform = 'rotate(90)';
    } else {
      dropdown.style.display = "block";
      // arrow.style.transform = 'rotate(90)';
    }
    // console.log("In sales option Functions...");

    // var arrow = document.getElementById("sale-arrow");

    // var arrow = document.querySelector('downArrow');
    // arrow.style.transform = 'rotate(90)';
  }
  function dropdown_option_purchase(val) {
    print(val);
    var dropdown = document.getElementById("purchase-dropdown");
    var arrow = document.getElementById("downArrow");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
      // arrow.style.transform = 'rotate(90)';
    } else {
      dropdown.style.display = "block";
      // arrow.style.transform = 'rotate(90)';
    }
    console.log("In sales option Functions...");

    // var arrow = document.getElementById("sale-arrow");

    // var arrow = document.querySelector('downArrow');
    // arrow.style.transform = 'rotate(90)';
  }
  function dropdown_option_cashAndBank(val) {
    print(val);
    var dropdown = document.getElementById("cashAndBanks-dropdown");
    var arrow = document.getElementById("downArrow");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
      // arrow.style.transform = 'rotate(90)';
    } else {
      dropdown.style.display = "block";
      // arrow.style.transform = 'rotate(90)';
    }
    console.log("In sales option Functions...");

    // var arrow = document.getElementById("sale-arrow");

    // var arrow = document.querySelector('downArrow');
    // arrow.style.transform = 'rotate(90)';
  }

  async function getCompanyName() {
    await fetch("/getCompanyName")
      .then(
        (val) =>
          //   setCompanyName(val);
          //   console.log(val.json());
          val.json()
        //   val.json())
        //   .then((value) => {
        //     setCompanyName(value);
        //     console.log("Value :" + value.toString());
        // console.log("In siderbar :" + companyName.toString());
      )
      .then((value) => {
        // console.log(value["name"]);
        setCompanyName(value["name"]);
      });
  }

  useEffect(() => {
    getCompanyName();
  }, []);
  // console.log(props.val1);
  return (
    <div className="sidebarDiv">
      <div
        className="company-tag"
        onClick={() => setModalShowCompanyModal(true)}
      >
        <CgProfile className="profile-icon" />
        <h5 style={{ color: "#e6e6e6" }}>{companyName}</h5>
      </div>
      <div id="lineU"></div>
      <div id="lineD"></div>
      <div className="sidebar-Component">
        <AiFillHome className="icons" />
        <h3 className="sideBarText" onClick={() => print("dashboard")}>
          Home
        </h3>
      </div>
      <div className="sidebar-Component">
        <BsPeopleFill className="icons" />
        <h3 className="sideBarText" onClick={() => print("parties")}>
          Parties
        </h3>
        <AiOutlinePlus className="plus" />
      </div>
      <div className="sidebar-Component">
        <HiTemplate className="icons" />
        <h3 className="sideBarText" onClick={() => print("items")}>
          Items
        </h3>
        <AiOutlinePlus className="plus" />
      </div>

      <div className="sidebar-Component">
        <GiPaperBagOpen className="icons" />
        <h3
          className="sideBarText"
          id="sale-btn"
          onClick={() => dropdown_option("sales")}
        >
          Sales
        </h3>
        <FaAngleDown className="downArrow" id="sale-arrow" />
      </div>

      <div class="dropdown-container" id="sale-dropdown">
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("sales")}
        >
          Sale Invoices
        </a>
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("estimateAndquotation")}
        >
          Estimate/Quotation
        </a>
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("paymentIn")}
        >
          Payment In
        </a>
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("saleOrder")}
        >
          Sale Order
        </a>
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("deliveryChallan")}
        >
          Delivery Challan
        </a>
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("saleReturn")}
        >
          Sale return/ Cr. Note
        </a>
      </div>

      <div className="sidebar-Component">
        <BsFillCartDashFill className="icons" />
        <h3
          className="sideBarText"
          onClick={() => dropdown_option_purchase("purchases")}
        >
          Purchase
        </h3>
        <FaAngleDown className="downArrow" id="sale-arrow" />
      </div>
      <div class="dropdown-container" id="purchase-dropdown">
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("purchases")}
        >
          Purchase Bills
        </a>
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("paymentOut")}
        >
          Payment Out
        </a>
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("purchaseOrder")}
        >
          Purchase Order
        </a>
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("purchaseReturn")}
        >
          Purchase return/ Dr. note
        </a>
      </div>
      <div className="sidebar-Component">
        <AiFillWallet className="icons" />
        <h3 className="sideBarText" onClick={() => print("expenses")}>
          Expenses
        </h3>
      </div>

      <div className="sidebar-Component">
        <BsFillCartDashFill className="icons" />
        <h3
          className="sideBarText"
          onClick={() => dropdown_option_cashAndBank("cashAndBanks")}
        >
          Cash & Banks
        </h3>
        <FaAngleDown className="downArrow" id="sale-arrow" />
      </div>
      <div class="dropdown-container" id="cashAndBanks-dropdown">
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("cashAndBanks")}
        >
          Bank Accounts
        </a>
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("cashInHand")}
        >
          Cash In Hand
        </a>
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("cheques")}
        >
          Cheques
        </a>
        <a
          href="#"
          className="sideBarText-dropdown"
          onClick={() => print("loanAccounts")}
        >
          Loan Accounts
        </a>
      </div>

      <div className="sidebar-Component">
        <BsFillBarChartFill className="icons" />
        <h3 className="sideBarText" onClick={() => print("purchases")}>
          Reports
        </h3>
      </div>
      <div id="lineU"></div>
      <div id="lineD"></div>
      <div className="sidebar-Component">
        <TbFileReport className="icons" />
        <h3 className="sideBarText" onClick={() => print("purchases")}>
          Other Products
        </h3>
      </div>
      <div className="sidebar-Component">
        <GoSync className="icons" />
        <h3 className="sideBarText" onClick={() => print("purchases")}>
          Sync
        </h3>
      </div>
      <div className="sidebar-Component">
        <MdSettingsBackupRestore className="icons" />
        <h3 className="sideBarText" onClick={() => print("purchases")}>
          Backup & Restore
        </h3>
      </div>
      <div className="sidebar-Component">
        <RiListSettingsFill className="icons" />
        <h3 className="sideBarText" onClick={() => print("purchases")}>
          Utilities
        </h3>
      </div>
      <div className="sidebar-Component">
        <IoIosSettings className="icons" />
        <h3 className="sideBarText" onClick={() => print("purchases")}>
          Settings
        </h3>
      </div>
      <div className="sidebar-Component">
        <SlBadge className="icons" />
        <h3 className="sideBarText" onClick={() => print("purchases")}>
          Trial Info
        </h3>
      </div>
      <div className="sidebar-Component">
        <MdOutlineOndemandVideo className="icons" />
        <h3 className="sideBarText" onClick={() => print("purchases")}>
          Request A Demo
        </h3>
      </div>
      <div className="sidebar-Component">
        <AiFillStar className="icons" />
        <h3 className="sideBarText" onClick={() => print("purchases")}>
          Share FeedBack
        </h3>
      </div>
      <CompanyModal
        show={modalShowCompanyModal}
        onHide={() => setModalShowCompanyModal(false)}
      />
    </div>
  );
}
