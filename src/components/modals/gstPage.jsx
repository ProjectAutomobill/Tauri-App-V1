import React from "react";
import "./gstPage.css";
export const GstPage = (props) => {
  return (
    <div className="gst-content">
      <input
        type="email"
        name=""
        id=""
        placeholder="Email"
        onChange={(v) => props.setEmail(v.target.value)}
        required
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Address"
        onChange={(v) => props.setAddress(v.target.value)}
        required
      />
    </div>
  );
};
