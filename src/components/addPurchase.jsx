import React from 'react';
import './addPurchase.css';
import {AiFillCalculator, AiFillSetting} from 'react-icons/ai';
import {RxCrossCircled} from 'react-icons/rx';
export const AddPurchase = () => {
  return (
    <div>
      <div className='top-bar'>
        <AiFillCalculator className="icn"/>
        <AiFillSetting className='icn'/>
        <RxCrossCircled className='icn'/>
      </div>

      <div className='purchaseTag'>
        <h3>Purchase</h3>
      </div>

      <div className='line'></div>
      
      <div className='party-detail'>
        <select id="dropdown-party">
          <option value="volvo">Party 1</option>
          <option value="saab">Party 2</option>
          <option value="mercedes">Party 3</option>
          <option value="audi">Party 4</option>
        </select>
        <input className='number' placeholder='Phone no.'/>
      </div>

      <div className='item-table'>
        <div className='header-table'>
          {/* <div className='index-no'>#</div>
          <div className='items-table'>ITEM</div>
          <div className='items-qty'>QTY</div>
          <div className='items-units'>UNIT</div>
          <div className='items-price-per-unit'>
            <div>PRICE/UNIT</div>
            <div>
              With/Without Tax
            </div>
          </div> */}
          <div className='header-items'>#</div>
          <div className='header-items'>ITEM</div>
          <div className='header-items'>QTY</div>
          <div className='header-items'>UNIT</div>
          <div className='header-items' id='double-row-cell'>
            <div className='inner-items'>PRICE/UNIT</div>
            <div className='inner-items'>With/Without Tax</div>
          </div>

          <div className='header-items' id='double-row-cell'>
            <div className='inner-items'>DISCOUNT</div>
            <div className='inner-items' id="double-col-cell">
              <div className='inner-items'>%</div>
              <div className='inner-items'>AMOUNT</div>
            </div>
          </div>

          <div className='header-items' id='double-row-cell'>
            <div className='inner-items'>TAX</div>
            <div className='inner-items' id="double-col-cell">
              <div className='inner-items'>%</div>
              <div className='inner-items'>AMOUNT</div>
            </div>
          </div>
          <div className='header-items'>AMOUNT</div>
          
          <div className='header-items-data'>-</div>
          <div className='header-items-data'></div>
          <div className='header-items-data'></div>
          <div className='header-items-data'></div>
          <div className='header-items-data' id='double-row-cell'></div>
          <div className='header-items-data' id='double-row-cell'></div>
          <div className='header-items-data' id='double-col-cell'></div>
          <div className='header-items-data'></div>
          
          <div className='header-items-data'>-</div>
          <div className='header-items-data'></div>
          <div className='header-items-data'></div>
          <div className='header-items-data'></div>
          <div className='header-items-data' id='double-row-cell'></div>
          <div className='header-items-data' id='double-row-cell'></div>
          <div className='header-items-data' id='double-col-cell'></div>
          <div className='header-items-data'></div>

          {/* <div className='header-items-data'>-</div>
          <div className='header-items-data'></div>
          <div className='header-items-data'></div>
          <div className='header-items-data'></div>
          <div className='header-items-data' id='double-row-cell'></div>
          <div className='header-items-data' id='double-row-cell'></div>
          <div className='header-items-data' id='double-col-cell'></div>
          <div className='header-items-data'></div> */}
        </div>

        <div className="header-table">
        {/* <div className='header-items'></div>
        <div className='header-items'></div>
        <div className='header-items'></div>
        <div className='header-items'></div>
        <div className='header-items' id='double-row-cell'></div>
        <div className='header-items' id='double-row-cell'></div>
        <div className='header-items' id='double-col-cell'></div>
        <div className='header-items'></div> */}
        
        </div>
      </div>
    </div>
  )
}
