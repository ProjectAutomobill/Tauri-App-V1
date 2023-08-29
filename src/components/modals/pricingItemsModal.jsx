import React from "react";
import "./pricingItemsModal.css";
import { BsInfoCircle } from "react-icons/bs";
export const PricingItemsModal = (props) => {
  return (
    <div className="partiesModal-pricingItemModal-content">
      <div className="div1-itemModal">
        <div className="content-common-itemModal">MRP</div>

        <div className="inputTag-common-itemModal">
          <input
            type="email"
            name=""
            id=""
            placeholder="MRP"
            className="partiesModal-itemModal-dropdown"
          />
          <BsInfoCircle className="info-sign-itemModal" />
        </div>
      </div>

      {/* another div means 2nd one */}
      <div className="div2-itemModal">
        <div className="first-div2-itemModal">
          <div className="content-common-itemModal">Sale Price</div>
          <div className="inside-ofInside-div-itemModal">
            <div className="div2-inputTag-common-itemModal">
              <input
                type="email"
                name=""
                id=""
                placeholder="Sale Price"
                className="prices-itemModal-dropdown"
              />
              {/* </div>
            <div className="options-for-tax-itemModal"> */}
              <select
                name=""
                id=""
                className="With-without-tax-itemModal-dropdown"
              >
                <option
                  value=""
                  className="With-without-tax-itemModal-dropdown"
                >
                  Without Tax
                </option>
                <option
                  value=""
                  className="With-without-tax-itemModal-dropdown"
                >
                  With Tax
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="second-div2-itemModal">
          <div className="content-common-itemModal">Wholesale Price</div>
          <div className="inside-ofInside-div-itemModal">
            <div className="div2-wholeSale-inputTag-common-itemModal">
              <input
                type="email"
                name=""
                id=""
                placeholder="Wholesale Price"
                className="pricesWholesale-itemModal-dropdown"
              />
              {/* </div>
            <div className="options-for-tax-itemModal"> */}
              <select
                name=""
                id=""
                className="With-without-tax-itemModal-dropdown"
              >
                <option
                  value=""
                  className="With-without-tax-itemModal-dropdown"
                >
                  Without Tax
                </option>
                <option
                  value=""
                  className="With-without-tax-itemModal-dropdown"
                >
                  With Tax
                </option>
              </select>
              {/* <div className="verticalLine-itemModal"></div> */}
            </div>
            <div className="inputTag-wholesale-itemModal">
              <input
                type="email"
                name=""
                id=""
                placeholder="Minimum WholeSale Price"
                className="partiesModal-itemModal-dropdown"
              />
              <BsInfoCircle className="info-sign-itemModal" />
            </div>
          </div>
        </div>
      </div>
      {/* another div starts means 3rd div */}
      <div className="div3-itemModal">
        <div className="first-div3-itemModal">
          <div className="content-common-itemModal">Purchase Price</div>
          <div className="inside-ofInside-div-itemModal">
            <div className="div3-inputTag-common-itemModal">
              <input
                type="email"
                name=""
                id=""
                placeholder="Purchase Price"
                className="prices-thirdDiv-itemModal-dropdown"
              />
              {/* </div>
            <div className="options-for-tax-itemModal"> */}
              <select
                name=""
                id=""
                className="With-without-tax-itemModal-dropdown"
              >
                <option
                  value=""
                  className="With-without-tax-itemModal-dropdown"
                >
                  Without Tax
                </option>
                <option
                  value=""
                  className="With-without-tax-itemModal-dropdown"
                >
                  With Tax
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="second-div3-itemModal">
          <div className="content-common-itemModal">Taxes</div>
          <div className="inside-ofInside-div-itemModal">
            <div className="div3-inputTag-common-itemModal">
              {/* </div>
            <div className="options-for-tax-itemModal"> */}
              <select
                name=""
                id=""
                className="With-without-tax-itemModal-dropdown"
              >
                <option
                  value=""
                  className="With-without-tax-itemModal-dropdown"
                >
                  None
                </option>
                <option
                  value=""
                  className="With-without-tax-itemModal-dropdown"
                >
                  IGST@0%
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
