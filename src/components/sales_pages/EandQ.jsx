import React from 'react'
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {  AiFillSetting } from 'react-icons/ai';
// import {FiSearch} from 'react-icons/fi';
// import {AiOutlinePlus} from 'react-icons/ai';
import { TbReport } from 'react-icons/tb';
import './EandQ.css';
export const EandQ = () => {
  return (
    <div className='main-saleEandQ'>    
     
        <div className='upperDiv-saleEandQ'>
            <div className='upperDivPart1-saleEandQ'>
                <div className='input-business-saleEandQ'>
                <input type="text" placeholder='•Enter Business Name' id='business-entry-saleEandQ'></input>
                </div>

                <div className='marginDiv-saleEandQ'>
                    
                    <div className='saleBtnDiv-saleEandQ'>
                        <BsFillPlusCircleFill className="plusSale-saleEandQ" />
                        <button className='addBtnSale-saleEandQ'>Add Sale</button>
                    </div>
                    <div className='purchaseBtnDiv-saleEandQ'>
                        <BsFillPlusCircleFill className="plusSale-purchase-saleEandQ" />
                        <button className='addBtnPurchase-saleEandQ'>Add Purchase</button>
                    </div>
                    <div className='moreBtnDiv-saleEandQ'>
                        <BsFillPlusCircleFill className="plusSaleMore-saleEandQ" />
                        <button className='addBtnMore-saleEandQ'>Add More</button>
                    </div>
                    <div className='settingBtnDiv-saleEandQ'>
                    <AiFillSetting className='setting-saleEandQ'/>
                    </div>
                </div>

            </div>
            <div className='horizontal-line-saleEandQ'></div>
            <h3 className='heading-saleEandQ'>ESTIMATES/QUOTATIONS</h3>
        </div>
            
       
        <div className='lowerBody-saleEandQ'>

            <div className='lowerBody-part1-saleEandQ'>

                <TbReport className='image-saleEandQ'/>
                <p className='paragraph-saleEandQ'>Make Estimates/Quotations/Proforma Invoices and share with 
                        your parties by WhatsApp, Email or Printed copies.
                    You can convert them to Sale invoices later by just click of a button
                </p>
                <button className='add-your-first-estimate-saleEandQ'>Add Your First Estimate</button>
            </div>
        </div>






    </div>
  )
}
