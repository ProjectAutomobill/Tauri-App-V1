import logo from "./logo.svg";
import "./App.css";
import { SideBar } from "./components/sidebar";
import { MainSection } from "./components/mainSection";
import { useState } from "react";
import { AddPurchase } from "./components/addPurchase";
import { Routes, Route, Router } from "react-router-dom";
import { Home } from "./components/home";
import { AddParty } from "./components/addParty";
import { Login } from "./login";
import { InvoicePage } from "./components/invoicePage";
import { InvoicePageV2 } from "./invoicePageV2";
function App() {
  // var [content,setContent] = useState("home");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <div className="App">
            <div className='sideBar'>
              <SideBar val1 = {content} val2 = {setContent}/>
            </div>
            <div className='mainSection'>
              <MainSection val1 = {content}/>
            </div>
            
          </div> */}
        {/* <h1>First Page</h1>
        </Route> */}
        <Route path="/loggedIn" element={<Home />} />
        <Route path="/purchase" element={<InvoicePageV2 />} />
        <Route path="/addParty" element={<AddParty />} />

        {/* <AddPurchase/> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
