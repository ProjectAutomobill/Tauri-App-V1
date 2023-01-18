import React from 'react';
import './purchaseBills.css';
import {AiOutlinePlus} from 'react-icons/ai';
import { Navigate,Link } from 'react-router-dom';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {  AiFillSetting } from 'react-icons/ai';
import { HiDocumentReport } from 'react-icons/hi';
import {  AiFillPrinter } from 'react-icons/ai';
import {PurchaseBillsTable} from '../tables/purchaseBillsTable';
export const PurchaseBills = () => {
  return (
    <div className='main-purchaseBills'>

    <div className='upperDiv-purchaseBills'>

      <div className='upperDivPart1-purchaseBills'>

        <div className='input-business-purchaseBills'>
        <input type="text" placeholder='•Enter Business Name' id='business-entry-purchaseBills'></input>
        </div>

          {/* <div className='middle-portion'>
              PRODUCTS
          </div> */}

        <div className='marginDiv-purchaseBills'>
              
            <div className='saleBtnDiv-purchaseBills'>
                <BsFillPlusCircleFill className="plusSale-purchaseBills" />
                <button className='addBtnSale-purchaseBills'>Add Sale</button>
            </div>
            <div className='purchaseBtnDiv-purchaseBills'>
                  {/* <AiOutlinePlus className="plusSale" /> */}
                <BsFillPlusCircleFill className="plusSale-purchase-purchaseBills" />
                <button className='addBtnPurchase-purchaseBills'>Add Purchase</button>
            </div>
            <div className='moreBtnDiv-purchaseBills'>
                <BsFillPlusCircleFill className="plusSaleMore-purchaseBills" />
                <button className='addBtnMore-purchaseBills'>Add More</button>
            </div>
            <div className='settingBtnDiv-purchaseBills'>
            <AiFillSetting className='setting-purchaseBills'/>
            </div>
        </div>
          {/* <div className='horizontal-line'>fgyrfhj</div> */}

      </div>
      {/* <div className='horizontal-line-purchaseBills'></div>
      <h3 className='heading-purchaseBills'>SALE INVOICES</h3> */}
    </div>
    
    <div className='middleDiv-purchaseBills'>

        <div className='middleDiv-part1-purchaseBills'>

          <div className='choose-months-purchaseBills'>
            <select id="months-purchaseBills">
              <option value="allpurchaseBills-purchaseBills">All Sale Invoices</option>
              <option value="thisMonth-purchaseBills">This Month</option>
              <option value="lastMonth-purchaseBills">Last Month</option>
              <option value="thisQuater-purchaseBills">This Quater</option>
              <option value="thisYear-purchaseBills">This Year</option>
              <option value="custom-purchaseBills">Custom</option>
              
            </select>

          </div>

          <div className='choose-dates-purchaseBills'>
            <label for="from-purchaseBills">Betweeen :</label>
            <input type="date" id="from-purchaseBills" name="from-purchaseBills"/>

            <label for="to-purchaseBills">To :</label>
            <input type="date" id="to-purchaseBills" name="to-purchaseBills"/>
            
            <select id="firm-purchaseBills">
              <option value="allFirms-purchaseBills">All Firm</option>
              <option value="myCompany-purchaseBills">My Company</option>
            </select>

          </div>

          <div className='options-middlepart1-purchaseBills'>

            {/* <GoGraph className='graph-middlepart1-purchaseBills'/> */}
            <HiDocumentReport className='report-middlepart1-purchaseBills'/>
            <AiFillPrinter className='print-middlepart1-purchaseBills'/>

          </div>
      </div>
        <div className='middleDiv-part2-purchaseBills'>
          <div className='content-middleDiv-part2-purchaseBills'> 
            Paid+Unpaid=Total
          </div>
          
        </div>

    
    </div>
    <div className='lowerDivSale-purchaseBills'>
      <h3 className='transaction-purchaseBills'>TRANSACTIONS</h3>
          <div className='top-part-A-purchaseBills'>
              {/* <h3>TRANSACTIONS</h3> */}
              <input type="search" name="" id="" className='search-input-purchaseBills' placeholder='Search ...'/>
              <Link to="/purchase">
                <button className='addBtnSale-sale2-purchaseBills' onClick={<Navigate to='/purchase' />}><AiOutlinePlus className="plus-purchaseBills" />Add Purchase</button>
              </Link>
          </div>
      <PurchaseBillsTable/>
    </div>
  </div>
  
  )
}
