import React from 'react'
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {  AiFillSetting } from 'react-icons/ai';
// import {FiSearch} from 'react-icons/fi';
// import {AiOutlinePlus} from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import './deliveryChallan.css';
export const DeliveryChallan = () => {
  return (
    <div className='main-deliveryChallan'>    
      
     
        <div className='upperDiv-deliveryChallan'>
            <div className='upperDivPart1-deliveryChallan'>
                <div className='input-business-deliveryChallan'>
                <input type="text" placeholder='•Enter Business Name' id='business-entry-deliveryChallan'></input>
                </div>

                <div className='marginDiv-deliveryChallan'>
                    
                    <div className='saleBtnDiv-deliveryChallan'>
                        <BsFillPlusCircleFill className="plusSale-deliveryChallan" />
                        <button className='addBtnSale-deliveryChallan'>Add Sale</button>
                    </div>
                    <div className='purchaseBtnDiv-deliveryChallan'>
                        <BsFillPlusCircleFill className="plusSale-purchase-deliveryChallan" />
                        <button className='addBtnPurchase-deliveryChallan'>Add Purchase</button>
                    </div>
                    <div className='moreBtnDiv-deliveryChallan'>
                        <BsFillPlusCircleFill className="plusSaleMore-deliveryChallan" />
                        <button className='addBtnMore-deliveryChallan'>Add More</button>
                    </div>
                    <div className='settingBtnDiv-deliveryChallan'>
                    <AiFillSetting className='setting-deliveryChallan'/>
                    </div>
                </div>

            </div>
            <div className='horizontal-line-deliveryChallan'></div>
            <h3 className='heading-deliveryChallan'>DELIVERY CHALLAN</h3>
        </div>
            
       
        <div className='lowerBody-deliveryChallan'>

            <div className='lowerBody-part1-deliveryChallan'>

                <FaTruck className='image-deliveryChallan'/>
                <p className='paragraph-deliveryChallan'>Make & share delivery 
                challan with your customers & convert it to sale 
                whenever you want.

                </p>
                <button className='add-your-first-estimate-deliveryChallan'>Add Your First Delivery Challan</button>
            </div>
        </div>






    </div>
  )
}
