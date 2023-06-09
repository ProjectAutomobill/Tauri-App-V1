import React from "react";
import "./plan.css";
import { MdErrorOutline } from "react-icons/md";
import { GiQueenCrown } from "react-icons/gi";
import { RiChatSmile3Fill } from "react-icons/ri";
export const Plan = () => {
  return (
    <div className="plan-body">
      <div className="section-1-Plan"></div>
      <div className="section-2-Plan">
        <MdErrorOutline className="error-icon-plan" /> Your Current Plan has
        expired!
      </div>
      <div className="section-3-Plan">
        <div className="heading-Plan">Plans & Pricing</div>
        <div className="heading-small-Plan">
          Choose a Plan that suits your business
        </div>
      </div>
      <div className="section-4-Plan">
        <div className="plan-details">
          <div className="validity-duration-div">
            <div className="heading-validity-Plan">Select Validity:</div>
            <select className="validity-select-btn">
              <option value="">1 Year Plan</option>
              <option value="">3 Years Plan</option>
            </select>
          </div>
        </div>
        <div className="plan-details-lower">
          <div className="silver-plan">
            <GiQueenCrown className="crown-silverplan" />
            <div className="plan-price-silver">
              <div className="text-silver-plan">Silver Plan</div>
              <div className="price-silver-plan">₹ 2799</div>
            </div>
            <div className="buyNow-btn-plan">Buy Now</div>
            <div className="lower-part-plan"></div>
          </div>
          <div className="silver-plan"></div>
        </div>
      </div>
      <RiChatSmile3Fill className="chat-icon-plan" />
    </div>
  );
};
