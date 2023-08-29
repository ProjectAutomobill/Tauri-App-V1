import React, { useState } from "react";
import "./printSetting.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { TableA } from "./tables/tableA";
export const PrintSetting = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTabUpper, setSelectedTabUpper] = useState(0);
  return (
    <div className="mainBody-Print">
      <div className="upper-part-Print">
        <div
          onClick={() => setSelectedTabUpper(0)}
          className={
            selectedTabUpper == 0
              ? "options-upper-div-Print-Selected"
              : "options-upper-div-Print"
          }
        >
          REGULAR PRINTER
        </div>
        <div
          onClick={() => setSelectedTabUpper(1)}
          className={
            selectedTabUpper == 1
              ? "options-upper-div-Print-Selected"
              : "options-upper-div-Print"
          }
        >
          THERMAL PRINTER
        </div>
        <ImCross className="cross-Print"></ImCross>
      </div>
      <div className="lower-part-Print">
        <div className="left-part-Print">
          <div className="template-color-options-PRINT">
            <div className="tab-layout-options">
              <div
                className="change-layout-color-btn-PRINT"
                onClick={() => setSelectedTab(0)}
              >
                <div
                  className={
                    selectedTab == 0
                      ? "inner-text-change-layout-color-btn-PRINT"
                      : "inner-text-change-layout-color-btn-PRINT-WT"
                  }
                >
                  CHANGE LAYOUT
                </div>
                {selectedTab == 0 && (
                  <div className="horizontal-red-line-PRINT"></div>
                )}
              </div>
              <div
                className="change-layout-color-btn-PRINT"
                onClick={() => setSelectedTab(1)}
              >
                <div
                  className={
                    selectedTab == 1
                      ? "inner-text-change-layout-color-btn-PRINT"
                      : "inner-text-change-layout-color-btn-PRINT-WT"
                  }
                >
                  CHANGE COLOR
                </div>
                {selectedTab == 1 && (
                  <div className="horizontal-red-line-PRINT"></div>
                )}
              </div>
            </div>
            <div className="data-options-PRINT">
              <div className="color-box-PRINT">
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
              </div>
              <div className="color-box-PRINT">
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
                <div className="color-data-box-PRINT"></div>
              </div>
            </div>
          </div>
          <div className="heading-print-setting">
            <div className="heading-text-div-setting">
              Print Company Info / Header
            </div>
          </div>
          <div className="checkbox-data">
            <input type="checkbox" name="" className="checkbox-input" />
            <div className="checkbox-data-text">
              Make Regular Printer Default
            </div>
            <AiFillInfoCircle className="information-icon-general" />
          </div>
          <div className="checkbox-data">
            <input type="checkbox" name="" className="checkbox-input" />
            <div className="checkbox-data-text">
              Print repeat headers in all pages
            </div>
            <AiFillInfoCircle className="information-icon-general" />
          </div>
          <div className="checkbox-data">
            <input type="checkbox" name="" className="checkbox-input" />
            <input
              type="text"
              className="input-text-PRINT"
              placeholder="Company"
            />
            <AiFillInfoCircle className="information-icon-general" />
          </div>
          <div className="checkbox-data">
            <input type="checkbox" name="" className="checkbox-input" />
            <div className="checkbox-data-text">Company Logo</div>
            <AiFillInfoCircle className="information-icon-general" />
          </div>
          <div className="checkbox-data">
            <input type="checkbox" name="" className="checkbox-input" />
            <input
              type="text"
              className="input-text-width100-PRINT"
              placeholder="Address"
            />
            <AiFillInfoCircle className="information-icon-general" />
          </div>
          <div className="checkbox-data">
            <input type="checkbox" name="" className="checkbox-input" />
            <input
              type="text"
              className="input-text-width100-PRINT"
              placeholder="Email"
            />
            <AiFillInfoCircle className="information-icon-general" />
          </div>
          <div className="checkbox-data">
            <input type="checkbox" name="" className="checkbox-input" />
            <input
              type="text"
              className="input-text-width100-PRINT"
              placeholder="Phone Number"
            />
            <AiFillInfoCircle className="information-icon-general" />
          </div>
          <div className="checkbox-data">
            <input type="checkbox" name="" className="checkbox-input" />
            <input
              type="text"
              className="input-text-width100-PRINT"
              placeholder="GSTIN on Sale"
            />
            <AiFillInfoCircle className="information-icon-general" />
          </div>
          <div className="checkbox-data">
            <div className="checkbox-data-text">Paper Size</div>
            <select className="dropdown-left-PRINT">
              <option value="">A4</option>
            </select>
            <AiFillInfoCircle className="information-icon-general" />
          </div>
          <div className="checkbox-data">
            <div className="checkbox-data-text">Company Name Text Size</div>
            <select className="dropdown-left-PRINT">
              <option value="">Large</option>
            </select>
            <AiFillInfoCircle className="information-icon-general" />
          </div>
          <div className="checkbox-data">
            <div className="checkbox-data-text">Invoice Text Size</div>
            <select className="dropdown-left-PRINT">
              <option value="">Large</option>
            </select>
            <AiFillInfoCircle className="information-icon-general" />
          </div>
        </div>
        <div className="right-part-Print">
          <div className="company-logo-img">
            <div className="company-img"></div>
            <div className="company-name-no">
              <div className="company-name">Company</div>
              <div className="phone-no-company">Ph no.:123456879</div>
            </div>
          </div>
          <div className="sale-heading-Print">Sale</div>
          <div className="below-sale-heading">
            <div className="partA-billTo-Print">
              <div className="heading-Print">Bill To:</div>
              <div className="heading-Print">Classic enterprises</div>
              <div className="billing-details-text">
                Plot no. 1, Shop No. 8, Kormangala, Banglore
              </div>
              <div className="billing-details-text">Contact no.:123456879</div>
            </div>
            <div className="partB-shippingTo-Print">
              <div className="heading-Print">Shipping To:</div>
              <div className="heading-Print">Classic enterprises</div>
              <div className="billing-details-text">
                Plot no. 1, Shop No. 8, Kormangala, Banglore
              </div>
            </div>
            <div className="partC-dateTime-Print">
              <div className="margin-top-div-PRINT"></div>
              <div className="dateTime-detail-text">Invoice no.: 101</div>
              <div className="dateTime-detail-text">Date : 02-07-2019</div>
              <div className="dateTime-detail-text">Time : 5:30pm</div>
              <div className="dateTime-detail-text">Due Date : 10-07-2019</div>
              <div className="margin-bottom-div-PRINT"></div>
            </div>
          </div>
          <div className="table-part1-PRINT">
            <TableA />
          </div>
          <div className="below-table-div-PRINT">
            <div className="invoice-detail-box_PRINT">
              <div className="invoice-bold-text-PRINT">Decription</div>
              <div className="invoice-normal-text-PRINT">Sale Decription</div>
              <div className="invoice-bold-text-PRINT">
                INVOICE AMOUNT IN WORDS
              </div>
              <div className="invoice-normal-text-PRINT">
                Forty Rupees and Fifty Paisa only
              </div>
              <div className="invoice-normal-text-PRINT">
                Due Date : 02-07-2019
              </div>
              <div className="invoice-bold-text-PRINT">
                TERMS AND CONDITIONS
              </div>
              <div className="invoice-normal-text-PRINT">
                Thank you for doing business with us !
              </div>
              <div className="barcode-box-PRINT"></div>
            </div>
            <div className="tax-details-PRINT">
              <div className="tax-detail-flex-box-PRINT">
                <div className="label-tax-PRINT">Sub Total</div>
                <div className="tax-data-value-PRINT">$ 40.00</div>
              </div>
              <div className="tax-detail-flex-box-PRINT">
                <div className="label-tax-PRINT">Discount</div>
                <div className="tax-data-value-PRINT">$ 0.100</div>
              </div>
              <div className="tax-detail-flex-box-PRINT">
                <div className="label-tax-PRINT">SGST@2.5%</div>
                <div className="tax-data-value-PRINT">$ 0.25</div>
              </div>
              <div className="tax-detail-flex-box-PRINT">
                <div className="label-tax-PRINT">CGST@2.5%</div>
                <div className="tax-data-value-PRINT">$ 0.25</div>
              </div>
              <div className="tax-detail-flex-box-PRINT">
                <div className="label-tax-PRINT">SGST@9%</div>
                <div className="tax-data-value-PRINT">$ 0.25</div>
              </div>
              <div className="tax-detail-flex-box-PRINT">
                <div className="label-tax-PRINT">Discount(12%)</div>
                <div className="tax-data-value-PRINT">$ 0.25</div>
              </div>
              <div className="tax-detail-flex-box-PRINT">
                <div className="label-tax-PRINT">SGST@2.5%</div>
                <div className="tax-data-value-PRINT">$ 0.25</div>
              </div>
              <div className="tax-detail-flex-box-PRINT">
                <div className="label-tax-PRINT">CGST@2.5%</div>
                <div className="tax-data-value-PRINT">$ 0.25</div>
              </div>
              <div className="tax-detail-flex-box-total-PRINT">
                <div className="label-tax-total-PRINT">Total</div>
                <div className="tax-data-value-total-PRINT">$ 42.32</div>
              </div>
              <div className="tax-detail-flex-box-PRINT">
                <div className="label-tax-PRINT">Recieved</div>
                <div className="tax-data-value-PRINT">$ 0.00</div>
              </div>
              <div className="tax-detail-flex-box-PRINT">
                <div className="label-tax-PRINT">Balance</div>
                <div className="tax-data-value-PRINT">$ 42.32</div>
              </div>
              <br />
              <div className="label-tax-PRINT">For, Company</div>
              <div className="company-signature-PRINT"></div>
              <div className="label-tax-PRINT">Authorizes Signatory</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
