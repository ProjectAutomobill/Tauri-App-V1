import React from 'react'
import './saleInvoice.css'
import {AiOutlinePlus} from 'react-icons/ai';
import { SaleInvoiceTable } from './tables/salesInvoiceTable';
import { Navigate,Link } from 'react-router-dom';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {  AiFillSetting } from 'react-icons/ai';
import { GoGraph } from 'react-icons/go';
import { HiDocumentReport } from 'react-icons/hi';
import {  AiFillPrinter } from 'react-icons/ai';

export const SaleInvoice = () => {
  return (
    <div className='main-saleInvoice'>

      <div className='upperDiv-saleInvoice'>

        <div className='upperDivPart1-saleInvoice'>

          <div className='input-business-saleInvoice'>
          <input type="text" placeholder='•Enter Business Name' id='business-entry-saleInvoice'></input>
          </div>

            {/* <div className='middle-portion'>
                PRODUCTS
            </div> */}

          <div className='marginDiv-saleInvoice'>
                
              <div className='saleBtnDiv-saleInvoice'>
                  <BsFillPlusCircleFill className="plusSale-saleInvoice" />
                  <button className='addBtnSale-saleInvoice'>Add Sale</button>
              </div>
              <div className='purchaseBtnDiv-saleInvoice'>
                    {/* <AiOutlinePlus className="plusSale" /> */}
                  <BsFillPlusCircleFill className="plusSale-purchase-saleInvoice" />
                  <button className='addBtnPurchase-saleInvoice'>Add Purchase</button>
              </div>
              <div className='moreBtnDiv-saleInvoice'>
                  <BsFillPlusCircleFill className="plusSaleMore-saleInvoice" />
                  <button className='addBtnMore-saleInvoice'>Add More</button>
              </div>
              <div className='settingBtnDiv-saleInvoice'>
              <AiFillSetting className='setting-saleInvoice'/>
              </div>
          </div>
            {/* <div className='horizontal-line'>fgyrfhj</div> */}

        </div>
        {/* <div className='horizontal-line-saleInvoice'></div>
        <h3 className='heading-saleInvoice'>SALE INVOICES</h3> */}
      </div>
      
      <div className='middleDiv-saleInvoice'>

          <div className='middleDiv-part1-saleInvoice'>

            <div className='choose-months-saleInvoice'>
              <select id="months-saleInvoice">
                <option value="allSaleInvoice-saleInvoice">All Sale Invoices</option>
                <option value="thisMonth-saleInvoice">This Month</option>
                <option value="lastMonth-saleInvoice">Last Month</option>
                <option value="thisQuater-saleInvoice">This Quater</option>
                <option value="thisYear-saleInvoice">This Year</option>
                <option value="custom-saleInvoice">Custom</option>
                
              </select>
  
            </div>

            <div className='choose-dates-saleInvoice'>
              <label for="from-saleInvoice">Betweeen :</label>
              <input type="date" id="from-saleInvoice" name="from-saleInvoice"/>

              <label for="to-saleInvoice">To :</label>
              <input type="date" id="to-saleInvoice" name="to-saleInvoice"/>
              
              <select id="firm-saleinovice">
                <option value="allFirms-saleInovice">All Firm</option>
                <option value="myCompany-saleInovice">My Company</option>
              </select>

            </div>

            <div className='options-middlepart1-saleInvoice'>

              <GoGraph className='graph-middlepart1-saleInvoice'/>
              <HiDocumentReport className='report-middlepart1-saleInvoice'/>
              <AiFillPrinter className='print-middlepart1-saleInvoice'/>

            </div>
        </div>
          <div className='middleDiv-part2-saleInvoice'>
            <div className='content-middleDiv-part2-saleInvoice'> 
              Paid+Unpaid=Total
            </div>
            
          </div>

      
      </div>
      <div className='lowerDivSale-saleInvoice'>
        <h3 className='transaction-saleInvoice'>TRANSACTIONS</h3>
            <div className='top-part-A-saleInvoice'>
                {/* <h3>TRANSACTIONS</h3> */}
                <input type="search" name="" id="" className='search-input-saleInvoice' placeholder='Search ...'/>
                <Link to="/purchase">
                  <button className='addBtnSale-sale2-saleInvoice' onClick={<Navigate to='/purchase' />}><AiOutlinePlus className="plus-saleInvoice" />Add Sale</button>
                </Link>
            </div>
        <SaleInvoiceTable/>
      </div>
    </div>
    
  )
}
