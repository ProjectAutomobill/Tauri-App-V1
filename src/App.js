import logo from "./logo.svg";
import "./App.css";
import { SideBar } from "./components/sidebar";
import { MainSection } from "./components/mainSection";
import { useRef, useState, useMemo, createContext } from "react";
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
import { useEffect } from "react";
import { AddPurchaseV3 } from "./addPurchaseV3";
import { AddSaleOrder } from "./components/sales_pages/addSaleOrder";
import { EandQV2 } from "./components/sales_pages/EandQV2";
import { Setting } from "./setting";
import { AddEQ } from "./components/sales_pages/addE&Q";
import { Loading } from "./loading";
import { AddCreditNote } from "./components/sales_pages/addCreditNote";
import { AddDeliveryChallan } from "./components/sales_pages/addDeliveryChallan";
import { TopBar } from "./topBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddPurchaseOrder } from "./components/purchases_pages/addPurchaseOrder";
import { AddDebitNote } from "./components/purchases_pages/addPurchaseReturn";
export const AppContext = createContext(null);

function App() {
  // var [content,setContent] = useState("home");
  // if(userNumber!=""){

  // }
  const showToastMessage = () => {
    console.log("Toast Function Called");
    toast.success("Logged In !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showToastMessageInvoice = () => {
    console.log("Toast Function Called");
    toast.success("Invoice Generated !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showToastMessageEQ = () => {
    console.log("Toast Function Called");
    toast.success("E&Q Invoice Generated !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  var [content, setContent] = useState("home");
  const [test, setTest] = useState();
  // var [userNumber, setUserNumber] = useState(0);
  const userNumber1 = useRef();
  const userCompany = useRef();
  const [isLoading, setIsLoading] = useState(false);

  // Function to show the loading animation
  const showLoading = () => {
    setIsLoading(true);
  };

  // Function to hide the loading animation
  const hideLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("In App : " + userNumber1.current);
  }, []);

  return (
    <AppContext.Provider value={{ test, setTest }}>
      <div className="App-App">
        <ToastContainer />
        <TopBar className="Top-bar-App" setContent={setContent} />
        <div className="lower-section-App">
          <Routes>
            <Route
              path="/"
              element={
                <Login
                  // setUserNumber={setUserNumber}
                  // userNumber={userNumber}
                  userNumber1={userNumber1}
                  userCompany={userCompany}
                  showToastMessage={showToastMessage}
                />
              }
            />

            <Route
              path="/loggedIn"
              element={
                <Home
                  userNumber={userNumber1}
                  userCompany={userCompany}
                  content={content}
                  setContent={setContent}
                />
              }
            />
            <Route
              path="/purchase"
              element={
                <AddPurchaseV3
                  userNumber={userNumber1}
                  userCompany={userCompany}
                  showToastMessage={showToastMessageInvoice}
                />
              }
            />
            <Route
              path="/sale"
              element={
                <AddSale
                  userNumber={userNumber1}
                  userCompany={userCompany}
                  showToastMessage={showToastMessageInvoice}
                />
              }
            />
            <Route
              path="/saleOrder"
              element={
                <AddSaleOrder
                  userNumber={userNumber1}
                  userCompany={userCompany}
                  showToastMessage={showToastMessageInvoice}
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
                <YourCompanies
                  userNumber={userNumber1}
                  userCompany={userCompany}
                />
              }
            />
            <Route
              path="/EandQ"
              element={
                <EandQV2 userNumber={userNumber1} userCompany={userCompany} />
              }
            />
            <Route
              path="setting"
              element={
                <Setting userNumber={userNumber1} userCompany={userCompany} />
              }
            />
            <Route
              path="/addE&Q"
              element={
                <AddEQ
                  userNumber={userNumber1}
                  userCompany={userCompany}
                  showToastMessage={showToastMessageEQ}
                />
              }
            />
            <Route
              path="/addSaleOrder"
              element={
                <addSaleOrder
                  userNumber={userNumber1}
                  userCompany={userCompany}
                  showToastMessage={showToastMessageInvoice}
                />
              }
            />
            <Route
              path="/addCreditNote"
              element={
                <AddCreditNote
                  userNumber={userNumber1}
                  userCompany={userCompany}
                />
              }
            />
            <Route
              path="/addDebitNote"
              element={
                <AddDebitNote
                  userNumber={userNumber1}
                  userCompany={userCompany}
                />
              }
            />
            <Route
              path="/addDeliveryChallan"
              element={
                <AddDeliveryChallan
                  userNumber={userNumber1}
                  userCompany={userCompany}
                />
              }
            />
            <Route
              path="/addPurchaseOrder"
              element={
                <AddPurchaseOrder
                  userNumber={userNumber1}
                  userCompany={userCompany}
                />
              }
            />

            {/* <AddPurchase/> */}
            {/* </Route> */}
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
