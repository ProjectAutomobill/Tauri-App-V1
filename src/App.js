import logo from "./logo.svg";
import "./App.css";
import { SideBar } from "./components/sidebar";
import { MainSection } from "./components/mainSection";
import { useRef, useState, useMemo } from "react";
import { AddPurchase } from "./components/addPurchase";
import { AddPurchaseV2 } from "./components/addPurchaseV2";
import { Routes, Route, Router } from "react-router-dom";
import { Home } from "./components/home";
import { AddParty } from "./components/addParty";
import { Login } from "./login";
import { InvoicePage } from "./components/invoicePage";
import { InvoicePageV2 } from "./invoicePageV2";
import { AddSale } from "./components/addSale";
import { YourCompanies } from "./yourCompanies";
import { Provider } from "react-redux";
import { store } from "./state_manager";
function App() {
  // var [content,setContent] = useState("home");
  // if(userNumber!=""){

  // }

  // var [userNumber, setUserNumber] = useState(0);
  const userNumber1 = useRef();
  const userCompany = useRef();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Login
              // setUserNumber={setUserNumber}
              // userNumber={userNumber}
              userNumber1={userNumber1}
              userCompany={userCompany}
            />
          }
        />

        <Route
          path="/loggedIn"
          element={
            <Home userNumber={userNumber1} userCompany={userCompany.current} />
          }
        />
        <Route
          path="/purchase"
          element={<AddPurchaseV2 userNumber={userNumber1} />}
        />
        <Route
          path="/sale"
          element={
            <AddSale
              userNumber={userNumber1}
              userCompany={userCompany.current}
            />
          }
        />
        <Route
          path="/addParty"
          element={<AddParty userNumber={userNumber1} />}
        />
        <Route
          path="/yourCompanies"
          element={
            <YourCompanies userNumber={userNumber1} userCompany={userCompany} />
          }
        />

        {/* <AddPurchase/> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
