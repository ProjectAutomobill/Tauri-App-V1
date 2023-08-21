import React from "react";
import "./plan.css";
import { MdErrorOutline } from "react-icons/md";
import { GiQueenCrown } from "react-icons/gi";
import { RiChatSmile3Fill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
export const Plan = () => {
  return (
    <div className="plan-body">
      <div className="section-1-Plan">
        <div className="left-part-section-1-Plan ">
          <div className="license-info-top-Plan">
            See License Info
            <BsInfoCircle className="info-sign-section-1-Plan" />
          </div>
          {/* <div className="vertical-line-top-Plan"></div> */}
          <div className="offline-payment-info-top-Plan">
            Offline Payment
            {/* <BsInfoCircle/> */}
          </div>
        </div>
      </div>
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
            <div className="lower-part-Plan">
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Sync data across Devices
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Create Multiple Companies
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Remove advertisement on invoices
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Set multiple pricing for items
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Add Fixed assets
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Update items in Bulk
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">Export To tally</div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Generate barcode for items
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Update items in Bulk
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Generate E-way Bills
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
            </div>
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
            <div className="lower-part-Plan">
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Sync data across Devices
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Create Multiple Companies
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Remove advertisement on invoices
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Set multiple pricing for items
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Restore deleted Transaction
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Update items in Bulk
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">Export To tally</div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Generate barcode for items
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Update items in Bulk
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
              {/* start of feature */}
              <div className="feature-part-Plan">
                <div className="tick-feature-part-Plan">
                  <BiCheck className="tick-sign-Plan" />
                </div>
                <div className="content-feature-tick-Plan">
                  Generate E-way Bills
                </div>
                <div className="info-feature-tick-Plan">
                  <BsInfoCircle className="info-sign-Plan" />
                </div>
              </div>
              {/* end of feature */}
            </div>
          </div>
        </div>
      </div>
      <RiChatSmile3Fill className="chat-icon-Plan" />
    </div>
  );
};
