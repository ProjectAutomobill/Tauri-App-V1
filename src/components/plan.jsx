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
        <div className="plan-details-Plan">
          <div className="validity-duration-div">
            <div className="heading-validity-Plan">Select Validity:</div>
            <select className="validity-select-btn-Plan">
              <option value="">1 Year Plan</option>
              <option value="">3 Years Plan</option>
            </select>
          </div>
          <div className="horizontal-line-Plan"></div>
          <div className="validity-duration-div">
            <div className="heading-validity-Plan">Select Device:</div>
            <div className="which-plan-Plan ">Desktop</div>
          </div>
        </div>
        <div className="plan-details-lower-Plan">
          <div className="silver-Plan">
            <GiQueenCrown className="crown-silverplan-Plan" />
            <div className="plan-common-price-Plan">
              <div className="text-common-Plan">Silver Plan</div>
              <div className="price-common-Plan">₹ 2799</div>
            </div>
            <div className="buyNow-btn-Plan">Buy Now</div>
            <div className="lower-part-Plan"></div>
          </div>
          <div className="gold-Plan">
            <GiQueenCrown className="crown-goldplan-Plan" />
            <div className="plan-common-price-Plan">
              <div className="text-common-Plan">Gold Plan</div>
              <div className="price-common-Plan">₹ 3599</div>
              {/* <div className="more-info-Plan">
                <div className="more-info-div-Plan ">1 Year</div>
                <div className="more-info-div-Plan ">Desktop + Mobile</div>
              </div> */}
            </div>
            <div className="buyNow-btn-gold-Plan">Renew</div>
            <div className="lower-part-Plan"></div>
          </div>
        </div>
      </div>
      <RiChatSmile3Fill className="chat-icon-Plan" />
    </div>
  );
};
