import React from 'react'
import './mainSection.css'
import { Parties } from './parties';
import {Items} from './items';
import { SaleInvoice } from './saleInvoice';
import { PurchaseBills } from './purchaseBills';
import { DashBoard } from './dashboard';
import { EandQ } from './sales_pages/EandQ';
import { PaymentIn } from './sales_pages/paymentIn';
import { SaleOrder } from './sales_pages/saleOrder';
import { DeliveryChallan } from './sales_pages/deliveryChallan';
export function MainSection(props) {
    
  return (
    <div className='main-section'>
        
    {(() => {
        if(props.val1==="parties"){
            return (<Parties/>)
        }
        else if(props.val1==="items"){
            return (<Items/>)
        }
        else if(props.val1==="sales"){
            return (<SaleInvoice/>)
        }
        else if(props.val1==="purchases"){
            return (<PurchaseBills/>)
        }
        else if(props.val1==="dashboard"){
            return (<DashBoard/>)
        }
        else if(props.val1==="estimateAndquotation"){
            return (<EandQ/>)
        }
        else if(props.val1==="paymentIn"){
            return (<PaymentIn/>)
        }
        else if(props.val1==="saleOrder"){
            return (<SaleOrder/>)
        }
        else if(props.val1==="deliveryChallan"){
            return (<DeliveryChallan/>)
        }
        
    })()}
             
    </div>
  );
}
