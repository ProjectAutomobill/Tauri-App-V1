import React from 'react';
import { Table } from '@mui/material';
import './parties.css';
import { PartiesTable } from './tables/partiesTable';
import {TransactionTable} from './tables/transactionTable';
import {FiSearch} from 'react-icons/fi';
import {AiFillSetting, AiOutlinePlus} from 'react-icons/ai';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiAlarm } from 'react-icons/bi';
export const Parties = () => {
  return (
    <div className='parties-items-parties'>
        <div className='upperDiv-parties'>

            <div className='upperDivPart1-parties'>

                <div className='input-business-parties'>
                <input type="text" placeholder='•Enter Business Name' id='business-entry-parties'></input>
                </div>

                    {/* <div className='middle-portion'>
                        PRODUCTS
                    </div> */}

                <div className='marginDiv-parties'>
                        
                    <div className='saleBtnDiv-parties'>
                        <BsFillPlusCircleFill className="plusSale-parties" />
                        <button className='addBtnSale-parties'>Add Sale</button>
                    </div>
                    <div className='purchaseBtnDiv-parties'>
                            {/* <AiOutlinePlus className="plusSale" /> */}
                        <BsFillPlusCircleFill className="plusSale-purchase-parties" />
                        <button className='addBtnPurchase-parties'>Add Purchase</button>
                    </div>
                    <div className='moreBtnDiv-parties'>
                        <BsFillPlusCircleFill className="plusSaleMore-parties" />
                        <button className='addBtnMore-parties'>Add More</button>
                    </div>
                    <div className='settingBtnDiv-parties'>
                    <AiFillSetting className='setting-parties'/>
                    </div>
                </div>
                    {/* <div className='horizontal-line'>fgyrfhj</div> */}

            </div>
            <div className='horizontal-line-parties'></div>
            <h3 className='heading-parties'>NAME</h3>
        </div>

        <div className='lowerBody-parties'>
            <div className='leftDiv-parties'>
                <Link  style= { {textDecoration: 'none'}} to="/addParty">
                    <div className='leftDivbtnSearch-parties'>
                        <FiSearch className='searchIcon-parties'/>
                        <button className='partyBtn-parties'> <AiOutlinePlus className="plus-parties" />Add Party</button>
                    </div>
                </Link>
                <PartiesTable/>
            </div>

            <div className='rightDiv-parties'>
                <div className='innerRightDiv-parties'>
                    <div className='upperDivRight-parties'>
                            
                            {/* <h3> Data to be taken from DataBase</h3> */}
                            <div className='upperDivRight1-parties'>
                                <div className='upperDivRight1-name-parties'>
                                   <b>P_NAME</b>
                                </div>
                                <div className='upperDivRight1-options-parties'>
                                    <div className='upperDivRight1-message-parties'>
                                        <AiOutlineMessage/>
                                    </div>
                                    <div className='upperDivRight1-whatsapp-parties'>
                                        <AiOutlineWhatsApp/>
                                    </div>
                                    <div className='upperDivRight1-alarm-parties'>
                                        <BiAlarm/>
                                    </div>
                                
                                </div>
                                

                            </div>

                            <div className='upperDivRight2-parties'>

                                <div className='upperDivRight2-part1-parties'>
                                    <div className='upperDivRight2-part1-phoneNo-parties'> Phone no. : </div>
                                    <div className='upperDivRight2-part1-email-parties'> Email :</div>
                                    <div className='upperDivRight2-part1-NoCredit-parties'> No Credit Limit set :</div>

                                </div>

                                <div className='upperDivRight2-part2-parties'>
                                    <div> Address : </div>
                                    <div> GSTIN :</div>
                                </div>
                            </div>
                    </div>

                    <div className='lowerDivRight-parties'>
                        <div className='transaction-search-parties'>
                            <h3>TRANSACTIONS</h3>
                            <input type="search" name="search" id="" className='search-input-parties' placeholder='Search...'/>
                        </div>
                        <div className='Ttable-parties'>
                            <TransactionTable/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
