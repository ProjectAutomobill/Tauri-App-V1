import React, { useState } from "react";
import "./yourCompanies.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { blue } from "@mui/material/colors";
import { AiOutlineReload } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useEffect, useLocation } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const YourCompanies = (props) => {
  const [companyNames, setCompanyNames] = useState();
  const navigate = useNavigate();
  //   const { state } = useLocation();
  //   const { number } = state;
  //   const location = useLocation();
  async function getCompaniesNames() {
    await fetch("/getCompanyList?number=" + props.userNumber.current)
      .then((val) => val.json())
      .then((value) => {
        setCompanyNames(value);
        console.log(companyNames);
      });
  }
  function navigateToDashBoard(val) {
    // setCurrCompany(val);
    props.userCompany.current = val;
    console.log("MOVING TO DASHBOARD : " + props.userCompany.current);

    navigate("/loggedIn", { state: { company: val } });
  }
  useEffect(() => {
    getCompaniesNames();
  }, []);
  return (
    <div id="background-yourCompanies">
      <div id="inner-container-yourCompanies">
        <div className="first-div-yourCompanies">
          <div className="first-div-1st-part-yourCompanies">
            <h4 id="heading-yourCompanies">Company List</h4>
            <input
              type="text"
              className="search-option-yourCompanies"
              placeholder="Search Company"
            ></input>
          </div>

          <div className="first-div-2nd-part-yourCompanies">
            <Tabs
              defaultActiveKey="second"
              //   id="uncontrolled-tab-example"
              //   className="mb-3"

              className="head-of-tabs-yourCompanies"
            >
              <Tab
                eventKey="First"
                title="Companies shared with me"
                // style={{ backgroundColor: blue }}
                className="tab-contents-first-settings-yourCompanies "
              >
                Tab 1
              </Tab>
              <Tab
                eventKey="second"
                title="My Companies"
                className="tab-contents-second-settings-yourCompanies "
              >
                <div className="top-layer-inTab-yourCompanies">
                  <div className="info-in-secondTab-yourCompanies">
                    <div className="leftContent-for-secondTab-yourCompanies">
                      Below are the Company that are created by you
                    </div>
                    <div className="rightContent-for-secondTab-yourCompanies">
                      {/* <u>Browse Files(.vyp) </u> */}
                      <div className="verticalLine-for-secondTab-yourCompanies"></div>
                      <div className="reload-for-secondTab-yourCompanies">
                        <AiOutlineReload className="reload-icon-yourCompanies" />
                      </div>
                    </div>
                  </div>
                </div>

                {companyNames?.map((row) => (
                  <div className="companyInfo-inTab-yourCompanies">
                    <div className="companyName-yourCompanies">{row.Name}</div>
                    <div className="current-company-yourCompanies">
                      Current Company
                    </div>
                    <button
                      className="open-btn-yourCompanies"
                      onClick={() => navigateToDashBoard(row.Name)}
                    >
                      Open
                    </button>
                    <Dropdown className="dropdown-yourCompanies">
                      <Dropdown.Toggle id="dropdown-basic-yourCompanies">
                        <BiDotsVerticalRounded className="three-dots-yourCompanies" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                ))}
              </Tab>
            </Tabs>
          </div>
          {/* <div className="first-div-2nd-part-yourCompanies ">My Companies</div> */}
        </div>

        <div className="second-div-yourCompanies">
          <button className="restore-backup-yourCompanies">
            Restore Backup
          </button>
          <button className="new-company-yourCompanies">New Company</button>
        </div>
      </div>
    </div>
  );
};
