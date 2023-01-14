import React from 'react'
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {  AiFillSetting } from 'react-icons/ai';
// import {FiSearch} from 'react-icons/fi';
// import {AiOutlinePlus} from 'react-icons/ai';
import { TbReport } from 'react-icons/tb';
// import { Link } from 'react-router-dom';
import './saleOrder.css';
export const SaleOrder = () => {
  return (
    <div className='main-saleOrder'>    
     
     
        <div className='upperDiv-saleOrder'>
            <div className='upperDivPart1-saleOrder'>
                <div className='input-business-saleOrder'>
                <input type="text" placeholder='•Enter Business Name' id='business-entry-saleOrder'></input>
                </div>

                <div className='marginDiv-saleOrder'>
                    
                    <div className='saleBtnDiv-saleOrder'>
                        <BsFillPlusCircleFill className="plusSale-saleOrder" />
                        <button className='addBtnSale-saleOrder'>Add Sale</button>
                    </div>
                    <div className='purchaseBtnDiv-saleOrder'>
                        <BsFillPlusCircleFill className="plusSale-purchase-saleOrder" />
                        <button className='addBtnPurchase-saleOrder'>Add Purchase</button>
                    </div>
                    <div className='moreBtnDiv-saleOrder'>
                        <BsFillPlusCircleFill className="plusSaleMore-saleOrder" />
                        <button className='addBtnMore-saleOrder'>Add More</button>
                    </div>
                    <div className='settingBtnDiv-saleOrder'>
                    <AiFillSetting className='setting-saleOrder'/>
                    </div>
                </div>

            </div>
            <div className='horizontal-line-saleOrder'></div>
            <h3 className='heading-saleOrder'>SALE ORDER</h3>
        </div>
            
       
        <div className='lowerBody-saleOrder'>

            <div className='lowerBody-part1-saleOrder'>

                <TbReport className='image-saleOrder'/>
                <p className='paragraph-saleOrder'>Make Estimates/Quotations/Proforma Invoices and share with 
                        your parties by WhatsApp, Email or Printed copies.
                    You can convert them to Sale invoices later by just click of a button
                </p>
                <button className='add-your-first-estimate-saleOrder'>Add Your First Sale Order</button>
            </div>
        </div>









    </div>

  )
}


