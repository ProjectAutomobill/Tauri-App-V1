import { Router, Routes, Route } from "react-router-dom";

import React,{Component} from 'react'
import { AddPurchase } from "./components/addPurchase";
import App from "./App";

class API extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" exact component={App} />
                    <Route path="/addPurchase" component={AddPurchase} />
                
                </Routes>
            </Router>
        )
    }
}

export default API;