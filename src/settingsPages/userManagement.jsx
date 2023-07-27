import React from "react";
import "./userManagement.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsFillPeopleFill, BsGraphUp } from "react-icons/bs";
import { IoIosPersonAdd, IoMdLock } from "react-icons/io";
import { SlGraph } from "react-icons/sl";
export const UserManagement = () => {
  return (
    <div className="mainBody-UM">
      <div className="part-UM">
        <div className="heading-UM-setting">
          <div className="heading-text-div-UM">
            Add a salesman and give limited control to them.{" "}
          </div>
        </div>

        <div className="first-div-UM">
          <div className="first-div-icon-UM">
            <BsFillPeopleFill className="peopleFill-UM" />
          </div>
          <div className="first-div-text-UM">
            <div className="checkbox-data-text-UM">
              Users Roles & Permission
            </div>
            <AiFillInfoCircle className="information-icon-UM" />
          </div>
          <div className="first-div-toogle-UM">
            <input type="checkbox" name="" className="checkbox-input-UM" />
          </div>
        </div>

        <div className="second-div-UM">
          <div className="second-div-text-UM">
            User Management allows you to Add a salesman and give limited
            control to them.
          </div>
        </div>

        <div className="third-div-UM">
          <div className="thirdDiv-text-UM">With User Management you can:</div>

          <div className="thirdDiv-block-UM">
            <div className="thirdDiv-icon-UM">
              <IoIosPersonAdd className="addperson-UM" />
            </div>
            <div className="after-text-UM">Create a Salesman</div>
          </div>

          <div className="thirdDiv-block-UM">
            <div className="thirdDiv-icon-UM">
              <IoMdLock className="addperson-UM" />
            </div>
            <div className="after-text-UM">Set passcode for Salesman Login</div>
          </div>

          <div className="thirdDiv-block-UM">
            <div className="thirdDiv-icon-UM">
              <SlGraph className="addperson-UM" />
            </div>
            <div className="after-text-UM">
              Check all activties of a Salesman
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
