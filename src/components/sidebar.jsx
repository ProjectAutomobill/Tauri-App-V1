import { render } from "@testing-library/react";
import "./sidebar.css";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { RiVipCrownFill } from "react-icons/ri";
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
import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Rotate90DegreesCcw, RotateLeft } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { CompanyModal } from "./modals/companyModal";
import { Link, useLocation, Navigate, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";

export function SideBar(props) {
  const [companyName, setCompanyName] = useState("Your Company");
  const [modalShowCompanyModal, setModalShowCompanyModal] = useState(false);
  const [selectedSidebarOption, setSelectedSidebarOption] =
    useState("dashboard");
  // const location = document.getElementById("useLocation()");
  const navigate = useNavigate();
  const location = useLocation();
  // const location2 = location.value;
  // const [cName, setCName] = useState(location.state.company);
  function CompanyModalToggle() {
    setModalShowCompanyModal(true);
  }
  function print(val) {
    props.val2(val);
    setSelectedSidebarOption(val);
  }

  function navigateToSetting() {
    navigate("/setting");
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
    // console.log("In sales option Functions...");

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
    // console.log("In sales option Functions...");

    // var arrow = document.getElementById("sale-arrow");

    // var arrow = document.querySelector('downArrow');
    // arrow.style.transform = 'rotate(90)';
  }

  async function getCompanyName() {
    await fetch("/getCompanyName?number=" + props.userNumber)
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
    // getCompanyName();
    invoke("get_company_name", {
      number: props.userNumber,
      // company: cName.toString(),
      company: props.userCompany,
      // party_name: partyTransaction,
    }).then((response) => setCompanyName(JSON.parse(response)["name"]));
  }, []);
  // console.log(props.val1);
  return (
    <div className="sidebarDiv">
      <div
        className="company-tag"
        onClick={() => setModalShowCompanyModal(true)}
      >
        <CgProfile className="profile-icon" />
        <h5 style={{ color: "#e6e6e6" }} className="companyName-sidebar">
          {companyName}
        </h5>
      </div>
      <div id="lineU"></div>
      <div id="lineD"></div>
      <div
        className={
          selectedSidebarOption == "dashboard"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        {/* {selectedSidebarOption == "dashboard" && (
          <div className="selected-redBox"></div>
        )} */}
        <AiFillHome className="icons" />
        <h3
          className={
            selectedSidebarOption == "dashboard"
              ? "selected-sideBarText"
              : "sideBarText"
          }
          onClick={() => print("dashboard")}
        >
          Home
        </h3>
      </div>
      <div
        className={
          selectedSidebarOption == "parties"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <BsPeopleFill className="icons" />
        <h3
          className={
            selectedSidebarOption == "parties"
              ? "selected-sideBarText"
              : "sideBarText"
          }
          onClick={() => print("parties")}
        >
          Parties
        </h3>
        <AiOutlinePlus className="plus" />
      </div>
      <div
        className={
          selectedSidebarOption == "items"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <HiTemplate className="icons" />
        <h3
          className={
            selectedSidebarOption == "items"
              ? "selected-sideBarText"
              : "sideBarText"
          }
          onClick={() => print("items")}
        >
          Items
        </h3>
        <AiOutlinePlus className="plus" />
      </div>

      <div
        className={
          selectedSidebarOption == "sales"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <GiPaperBagOpen className="icons" />
        <h3
          className={
            selectedSidebarOption == "sales"
              ? "selected-sideBarText"
              : "sideBarText"
          }
          id="sale-btn"
          onClick={() => dropdown_option("sales")}
        >
          Sales
        </h3>
        <FaAngleDown className="downArrow" id="sale-arrow" />
      </div>

      <div class="dropdown-container" id="sale-dropdown">
        <div id="options-container">
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
      </div>

      <div
        className={
          selectedSidebarOption == "purchases"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <BsFillCartDashFill className="icons" />
        <h3
          className={
            selectedSidebarOption == "purchases"
              ? "selected-sideBarText"
              : "sideBarText"
          }
          onClick={() => dropdown_option_purchase("purchases")}
        >
          Purchase
        </h3>
        <FaAngleDown className="downArrow" id="sale-arrow" />
      </div>
      <div class="dropdown-container" id="purchase-dropdown">
        <div id="options-container">
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
      </div>
      <div
        className={
          selectedSidebarOption == "expenses"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <AiFillWallet className="icons" />
        <h3
          className={
            selectedSidebarOption == "expenses"
              ? "selected-sideBarText"
              : "sideBarText"
          }
          onClick={() => print("expenses")}
        >
          Expenses
        </h3>
      </div>

      <div
        className={
          selectedSidebarOption == "cashAndBanks"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
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
        <div id="options-container">
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
      </div>

      <div
        className={
          selectedSidebarOption == "report"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <BsFillBarChartFill className="icons" />
        <h3
          className={
            selectedSidebarOption == "report"
              ? "selected-sideBarText"
              : "sideBarText"
          }
          onClick={() => print("report")}
        >
          Reports
        </h3>
      </div>
      <div id="lineU"></div>
      <div id="lineD"></div>
      <div
        className={
          selectedSidebarOption == "otherProducts"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <TbFileReport className="icons" />
        <h3
          className={
            selectedSidebarOption == "otherProducts"
              ? "selected-sideBarText"
              : "sideBarText"
          }
          onClick={() => print("otherProducts")}
        >
          Other Products
        </h3>
      </div>
      <div
        className={
          selectedSidebarOption == "sync"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <GoSync className="icons" />
        <h3 className="sideBarText" onClick={() => print("sync")}>
          Sync
        </h3>
      </div>
      <div
        className={
          selectedSidebarOption == "backup"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <MdSettingsBackupRestore className="icons" />
        <h3 className="sideBarText" onClick={() => print("backup")}>
          Backup & Restore
        </h3>
      </div>
      <div
        className={
          selectedSidebarOption == "utilities"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <RiListSettingsFill className="icons" />
        <h3 className="sideBarText" onClick={() => print("utilities")}>
          Utilities
        </h3>
      </div>
      <div
        className={
          selectedSidebarOption == "setting"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <IoIosSettings className="icons" />
        <h3 className="sideBarText" onClick={navigateToSetting}>
          Settings
        </h3>
      </div>
      <div
        className={
          selectedSidebarOption == "trial"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <SlBadge className="icons" />
        <h3 className="sideBarText" onClick={() => print("trial")}>
          Trial Info
        </h3>
      </div>
      <div
        className={
          selectedSidebarOption == "demo"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <MdOutlineOndemandVideo className="icons" />
        <h3 className="sideBarText" onClick={() => print("demo")}>
          Request A Demo
        </h3>
      </div>
      <div
        className={
          selectedSidebarOption == "ShareFeedback"
            ? "selected-sidebar-Component"
            : "sidebar-Component"
        }
      >
        <AiFillStar className="icons" />
        <h3 className="sideBarText" onClick={() => print("ShareFeedback")}>
          Share FeedBack
        </h3>
      </div>
      <div className="plan-renew-Sidebar" onClick={() => print("plans")}>
        <div className="upper-plan-Sidebar">
          <RiVipCrownFill className="crown" />
          <div className="text-plan">Your Free Trial has Ended.</div>
        </div>
        <div className="see-plan-div">
          See Plan <FaArrowRight />
        </div>
      </div>
      <CompanyModal
        show={modalShowCompanyModal}
        onHide={() => setModalShowCompanyModal(false)}
      />
    </div>
  );
}
