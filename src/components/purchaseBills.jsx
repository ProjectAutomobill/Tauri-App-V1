import React from 'react'
import './purchaseBills.css'
import {AiOutlinePlus} from 'react-icons/ai';
import { PurchaseBillsTable } from './tables/purchaseBillsTable';
import {Link} from 'react-router-dom';

export const PurchaseBills = () => {
  return (
    <div>
        <div className='upperDiv'>

        </div>
        <div className='lowerDivSale'>
        <h3>TRANSACTIONS</h3>
            <div className='top-part-A'>
                {/* <h3>TRANSACTIONS</h3> */}
                <input type="search" name="" id="" className='search-input-sales' placeholder='Search ...'/>
                <Link to="/purchase">
                  <button className='addBtnPurchase-purchase'><AiOutlinePlus className="plus" />Add Purchase</button>
                </Link>
            </div>
        <PurchaseBillsTable/>
        </div>
    </div>
  )
}
