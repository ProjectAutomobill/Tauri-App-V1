import { render } from "@testing-library/react";
import './sidebar.css';
import {AiFillHome} from "react-icons/ai";
import {BsPeopleFill} from 'react-icons/bs';
import {HiTemplate} from 'react-icons/hi';
import {GiPaperBagOpen} from 'react-icons/gi';
export function SideBar() {
   return (
    <div className="sidebarDiv">

        <h2>Company</h2>
        <div className="sidebar-Component">
            <AiFillHome className="icons"/>
            <h3 className="sideBarText">Home</h3>
        </div>
        <div className="sidebar-Component">
            <BsPeopleFill className="icons"/>   
            <h3 className="sideBarText">Parties</h3>
        </div>
        <div className="sidebar-Component">
            <HiTemplate className="icons"/>
            <h3 className="sideBarText">Items</h3>
        </div>
        <div className="sidebar-Component">
            <GiPaperBagOpen className="icons"/>
            <h3 className="sideBarText">Sales</h3>
        </div>

    </div>

   );
}