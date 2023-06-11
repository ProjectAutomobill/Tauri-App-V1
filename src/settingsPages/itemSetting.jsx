import React from "react";
import "./itemSetting.css";
import { AiFillInfoCircle } from "react-icons/ai";

export const ItemSetting = () => {
  return (
    <div className="mainBody-general">
      <div className="partA-general">
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">Item Settings</div>
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Enable Item</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <div className="checkbox-data-text">What do you sell?</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Barcode Scan</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Stock Maintenance</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Manufacturing</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Show low stock dialog</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Items Unit</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Default Unit</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Item Category</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Party Wise Item Rate</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Description</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Item Wise Tax</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Item Wise Discount</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">
            Update Sale Price From Transaction
          </div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Wholesale Price</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
      </div>
      <div className="partA-general">
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">Additional Item Fields</div>
        </div>
        {/* <div className="checkbox-data"> */}
        <div className="item-setting-heading-tag">MRP/Price</div>
        {/* </div> */}
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">MRP</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="item-setting-heading-tag">Serial No. Tracking</div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">MRP</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="item-setting-heading-tag">Batch Tracking</div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Batch No.</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Exp Date</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Mfg Date</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Model No.</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Size No.</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
      </div>
    </div>
  );
};
