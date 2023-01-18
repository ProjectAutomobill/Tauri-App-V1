import React from 'react'
import './saleReturn.css';
import {AiOutlinePlus} from 'react-icons/ai';
import { SaleReturnTable } from '../tables/saleReturnTable';
import { Navigate,Link } from 'react-router-dom';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {  AiFillSetting } from 'react-icons/ai';
import { HiDocumentReport } from 'react-icons/hi';
import {  AiFillPrinter } from 'react-icons/ai';
export const SaleReturn = () => {
  return (
    <div className='main-saleReturn'>

      <div className='upperDiv-saleReturn'>

        <div className='upperDivPart1-saleReturn'>

          <div className='input-business-saleReturn'>
          <input type="text" placeholder='•Enter Business Name' id='business-entry-saleReturn'></input>
          </div>

           

          <div className='marginDiv-saleReturn'>
                
              <div className='saleBtnDiv-saleReturn'>
                  <BsFillPlusCircleFill className="plusSale-saleReturn" />
                  <button className='addBtnSale-saleReturn'>Add Sale</button>
              </div>
              <div className='purchaseBtnDiv-saleReturn'>
                  <BsFillPlusCircleFill className="plusSale-purchase-saleReturn" />
                  <button className='addBtnPurchase-saleReturn'>Add Purchase</button>
              </div>
              <div className='moreBtnDiv-saleReturn'>
                  <BsFillPlusCircleFill className="plusSaleMore-saleReturn" />
                  <button className='addBtnMore-saleReturn'>Add More</button>
              </div>
              <div className='settingBtnDiv-saleReturn'>
              <AiFillSetting className='setting-saleReturn'/>
              </div>
          </div>
            

        </div>
        
      </div>
      
      <div className='middleDiv-saleReturn'>

          <div className='middleDiv-part1-saleReturn'>

            <div className='choose-months-saleReturn'>
              <select id="months-saleReturn">
                <option value="allsaleReturn-saleReturn">All Sale Invoices</option>
                <option value="thisMonth-saleReturn">This Month</option>
                <option value="lastMonth-saleReturn">Last Month</option>
                <option value="thisQuater-saleReturn">This Quater</option>
                <option value="thisYear-saleReturn">This Year</option>
                <option value="custom-saleReturn">Custom</option>
                
              </select>
  
            </div>

            <div className='choose-dates-saleReturn'>
              <label for="from-saleReturn">Betweeen :</label>
              <input type="date" id="from-saleReturn" name="from-saleReturn"/>

              <label for="to-saleReturn">To :</label>
              <input type="date" id="to-saleReturn" name="to-saleReturn"/>
              
              

            </div>

            <div className='options-middlepart1-saleReturn'>

              
              <HiDocumentReport className='report-middlepart1-saleReturn'/>
              <AiFillPrinter className='print-middlepart1-saleReturn'/>

            </div>
        </div>
          <div className='middleDiv-part2-saleReturn'>
            <div className='content-middleDiv-part2-saleReturn'> 
              
              <div className='choose-sale_return-saleReturn'>
                <select id="sale_return-saleReturn">
                  <option value="allTransactions-saleReturn">All Transactions</option>
                  <option value="sale-saleReturn">Sale</option>
                  <option value="purchase-saleReturn">Purchase</option>
                  <option value="saleReturn-saleReturn">Payment-In</option>
                  <option value="paymentOut-saleReturn">Payment-Out</option>
                  <option value="creditNote-saleReturn">Credit Note</option>
                  <option value="debittNote-saleReturn">Debit Note</option>
                  <option value="saleOrder-saleReturn">Sale Order</option>
                  <option value="purchaseOrder-saleReturn">Purchase Order</option>
                  <option value="estimate-saleReturn">Estimate</option>
                  <option value="deliveryChallan-saleReturn">Delivery Challan</option>
                  <option value="expense-saleReturn">Expense</option>
                  <option value="partyToPartyReceived-saleReturn">Party-To-Party[Received]</option>
                  <option value="partyToPartyPaid-saleReturn">Party-To-Party[Paid]</option>
                  <option value="manufacture-saleReturn">Manufacture</option>
                  <option value="saleFA-saleReturn">Sale-FA</option>
                  <option value="purchaseFA-saleReturn">Purchase-FA</option>
                  
                </select>
    
              </div>

            </div>
            
          </div>

      
      </div>
      <div className='lowerDivSale-saleReturn'>
            <div className='top-part-A-saleReturn'>
                <input type="search" name="" id="" className='search-input-saleReturn' placeholder='Search ...'/>
                <Link to="/purchase">
                  <button className='addBtnSale-sale2-saleReturn' onClick={<Navigate to='/purchase' />}><AiOutlinePlus className="plus-saleReturn" />Add Credit Note</button>
                </Link>
            </div>
        <SaleReturnTable/>
      </div>
    </div>
  )
}

