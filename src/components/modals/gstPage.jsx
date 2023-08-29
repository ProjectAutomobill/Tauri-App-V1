import React from "react";
import "./gstPage.css";
export const GstPage = (props) => {
  return (
    <div className="gst-content">
      <div className="leftSide-gstPage">
        <select name="" id="" className="partiesModal-gstInput-dropdown">
          <option value="" className="partiesModal-gstInput-dropdown">
            Unregistered/Consumer
          </option>
          <option value="" className="partiesModal-gstInput-dropdown">
            Registered business - Regular
          </option>
          <option value="" className="partiesModal-gstInput-dropdown">
            Registered business - Composition
          </option>
        </select>
        <select name="" id="" className="partiesModal-gstInput-dropdown">
          <option value="" className="partiesModal-gstInput-dropdown">
            State
          </option>
          <option value="" className="partiesModal-gstInput-dropdown">
            Haryana
          </option>
          <option value="" className="partiesModal-gstInput-dropdown">
            Maharastra
          </option>
          <option value="" className="partiesModal-gstInput-dropdown">
            Rajasthan
          </option>
          <option value="" className="partiesModal-gstInput-dropdown">
            Delhi
          </option>
        </select>
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="partiesModal-gstInput-dropdown"
          onChange={(v) => props.setEmail(v.target.value)}
          required
        />
      </div>
      <div className="vertical-line-modal"></div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Address"
        className="partiesModal-gstInput"
        onChange={(v) => props.setAddress(v.target.value)}
        required
      />
    </div>
  );
};
