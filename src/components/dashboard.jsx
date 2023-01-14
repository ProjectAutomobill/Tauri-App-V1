import React from 'react'
import './dashboard.css';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { AiFillSetting} from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

export const DashBoard = () => {
  return (
    <div className='dashboard'>

        <div className='upperDiv-dashboard'>

            <div className='upperDivPart1-dashboard'>

                <div className='input-business-dashboard'>
                <input type="text" placeholder='•Enter Business Name' id='business-entry-dashboard'></input>
                </div>

                {/* <div className='middle-portion'>
                    PRODUCTS
                </div> */}

                <div className='marginDiv-dashboard'>
                    
                    <div className='saleBtnDiv-dashboard'>
                        <BsFillPlusCircleFill className="plusSale-dashboard" />
                        <button className='addBtnSale-dashboard'>Add Sale</button>
                    </div>
                    <div className='purchaseBtnDiv-dashboard'>
                        {/* <AiOutlinePlus className="plusSale" /> */}
                        <BsFillPlusCircleFill className="plusSale-purchase-dashboard" />
                        <button className='addBtnPurchase-dashboard'>Add Purchase</button>
                    </div>
                    <div className='moreBtnDiv-dashboard'>
                        <BsFillPlusCircleFill className="plusSaleMore-dashboard" />
                        <button className='addBtnMore-dashboard'>Add More</button>
                    </div>
                    <div className='settingBtnDiv-dashboard'>
                    <AiFillSetting className='setting-dashboard'/>
                    </div>
                </div>
                {/* <div className='horizontal-line'>fgyrfhj</div> */}

            </div>
            <div className='horizontal-line-dashboard'></div>
            <h3 className='heading-dashboard'>YOUR PROFILE</h3>
        </div>


        <div className='lowerBody-dashboard'>

            <div className='leftDiv1'>
                <div className='leftDiv-dashboardA'>
                    This is left section | part(a)
                </div>
                <div className='leftDiv-dashboardB'>
                    This is left section  | part(b)
                </div>
            </div>

            <div className='leftDiv2'>

                <div className='leftDiv2A'>
                    PartA
                </div>
                <div className='leftDiv2B'>
                    PartB
                </div>
                <div className='leftDiv2C'>
                    PartC
                </div>

            </div>
            

            <div className='rightDiv-dashboard'>
                This is right section
            </div>

        </div>



        

           
        




    </div>
  )
}
