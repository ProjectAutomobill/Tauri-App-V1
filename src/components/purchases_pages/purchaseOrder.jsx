import React from 'react'
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {  AiFillSetting } from 'react-icons/ai';
// import {FiSearch} from 'react-icons/fi';
// import {AiOutlinePlus} from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import './purchaseOrder.css';
export const PurchaseOrder = () => {
  return (
    <div className='main-purchaseOrder'>    
     
     
        <div className='upperDiv-purchaseOrder'>
            <div className='upperDivPart1-purchaseOrder'>
                <div className='input-business-purchaseOrder'>
                <input type="text" placeholder='•Enter Business Name' id='business-entry-purchaseOrder'></input>
                </div>

                <div className='marginDiv-purchaseOrder'>
                    
                    <div className='saleBtnDiv-purchaseOrder'>
                        <BsFillPlusCircleFill className="plusSale-purchaseOrder" />
                        <button className='addBtnSale-purchaseOrder'>Add Sale</button>
                    </div>
                    <div className='purchaseBtnDiv-purchaseOrder'>
                        <BsFillPlusCircleFill className="plusSale-purchase-purchaseOrder" />
                        <button className='addBtnPurchase-purchaseOrder'>Add Purchase</button>
                    </div>
                    <div className='moreBtnDiv-purchaseOrder'>
                        <BsFillPlusCircleFill className="plusSaleMore-purchaseOrder" />
                        <button className='addBtnMore-purchaseOrder'>Add More</button>
                    </div>
                    <div className='settingBtnDiv-purchaseOrder'>
                    <AiFillSetting className='setting-purchaseOrder'/>
                    </div>
                </div>

            </div>
            <div className='horizontal-line-purchaseOrder'></div>
            <h3 className='heading-purchaseOrder'>ORDERS</h3>
        </div>
            
       
        <div className='lowerBody-purchaseOrder'>

            <div className='lowerBody-part1-purchaseOrder'>

                <FaShoppingCart className='image-purchaseOrder'/>
                <p className='paragraph-purchaseOrder'>
                    Make & share purchase orders & convert them to purchase
                    invoice instantly.
                </p>
                <button className='add-your-first-estimate-purchaseOrder'>Add Your First Purchase Order</button>
            </div>
        </div>









    </div>

  )
}


