import React, { useState } from "react";
import "./transaction.css";
import { AiFillInfoCircle } from "react-icons/ai";
import {
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
} from "@mui/material";
// import {
//   MenuItem,
//   FormHelperText,
//   FormControl,
//   InputLabel,
// } from "@material-ui/core";

export const Transaction = () => {
  const [selected, setSelected] = useState("");

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div className="mainBody-general">
      <div className="partA-general">
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">Transaction Header</div>
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Invoice/Bill No.</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Add Time on Transaction</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Cash Sale by default</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Billing Name of Parties</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">
            Customer P.O. details on Transactions
          </div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">
            More Transaction Features
          </div>
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">E-way bill no</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Quick Entry</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Do not Show Invoice Preview</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">
            Enable Passcode for transaction edit/delete
          </div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Discount During Payments</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Link Payments to Invoices</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Due Dates and Payment Terms</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">
            Show Profit while making Sale Invoice
          </div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
      </div>
      <div className="partA-general">
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">Items Table</div>
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">
            Inclusive/Exclusive Tax on Rate(Price/Unit)
          </div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">
            Display Purchase Price of Items
          </div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">
            Show last 5 Sale Price of Items
          </div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Free Item Quantity</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Count</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">Transaction Prefixes</div>
        </div>
        <div className="checkbox-data-dropdown">
          <FormControl
            variant="outlined"
            className="formcontrol-settings"
            // style={{ width: 100% }}
          >
            <InputLabel shrink>Firm</InputLabel>
            <Select
              label="Months"
              value={selected}
              style={{ height: 40 }}
              onChange={selectionChangeHandler}
              className="designer-dropdown-setting"
            >
              <MenuItem value={1}>Company</MenuItem>
            </Select>
          </FormControl>
        </div>
        <FormControl variant="outlined" className="prefixes-formcontrol">
          <InputLabel shrink>Prefixes</InputLabel>
          <div className="prefix-box">
            <div className="prefixes-component">
              <FormControl className="designer-dropdown-prefix-setting">
                <InputLabel shrink>Sale</InputLabel>
                <Select
                  label="Months"
                  value={selected}
                  style={{ height: 40 }}
                  onChange={selectionChangeHandler}
                  //   className="designer-dropdown-prefix-setting"
                >
                  <MenuItem value={1}>None</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="designer-dropdown-prefix-setting">
                <InputLabel shrink>Credit Note</InputLabel>
                <Select
                  label="Months"
                  value={selected}
                  style={{ height: 40 }}
                  onChange={selectionChangeHandler}
                  //   className="designer-dropdown-prefix-setting"
                >
                  <MenuItem value={1}>None</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="prefixes-component">
              <FormControl className="designer-dropdown-prefix-setting">
                <InputLabel shrink>Sale Order</InputLabel>
                <Select
                  label="Months"
                  value={selected}
                  style={{ height: 40 }}
                  onChange={selectionChangeHandler}
                  //   className="designer-dropdown-prefix-setting"
                >
                  <MenuItem value={1}>None</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="designer-dropdown-prefix-setting">
                <InputLabel shrink>Purchase Order</InputLabel>
                <Select
                  label="Months"
                  value={selected}
                  style={{ height: 40 }}
                  onChange={selectionChangeHandler}
                  //   className="designer-dropdown-prefix-setting"
                >
                  <MenuItem value={1}>None</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="prefixes-component">
              <FormControl className="designer-dropdown-prefix-setting">
                <InputLabel shrink>Estimate</InputLabel>
                <Select
                  label="Months"
                  value={selected}
                  style={{ height: 40 }}
                  onChange={selectionChangeHandler}
                  //   className="designer-dropdown-prefix-setting"
                >
                  <MenuItem value={1}>None</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="designer-dropdown-prefix-setting">
                <InputLabel shrink>Delivery Challan</InputLabel>
                <Select
                  label="Months"
                  value={selected}
                  style={{ height: 40 }}
                  onChange={selectionChangeHandler}
                  //   className="designer-dropdown-prefix-setting"
                >
                  <MenuItem value={1}>None</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="prefixes-component">
              <FormControl className="designer-dropdown-prefix-setting">
                <InputLabel shrink>Payment In</InputLabel>
                <Select
                  label="Months"
                  value={selected}
                  style={{ height: 40 }}
                  onChange={selectionChangeHandler}
                  //   className="designer-dropdown-prefix-setting"
                >
                  <MenuItem value={1}>None</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="designer-dropdown-prefix-setting">
                <InputLabel shrink>Sale Fixed Asset</InputLabel>
                <Select
                  label="Months"
                  value={selected}
                  style={{ height: 40 }}
                  onChange={selectionChangeHandler}
                  //   className="designer-dropdown-prefix-setting"
                >
                  <MenuItem value={1}>None</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </FormControl>
      </div>
      <div className="partA-general">
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">
            Taxes, Discount & Totals
          </div>
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Transaction wise Tax</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Transaction wise Discount</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Round Off Total</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <select name="" id="" className="transaction-dropdown-setting">
            <option value="" className="option-transaction-setting">
              Nearest
            </option>
          </select>
          <div className="to-transaction-setting">To</div>
          <select name="" id="" className="transaction-dropdown-setting">
            <option value="" className="option-transaction-setting">
              1
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
