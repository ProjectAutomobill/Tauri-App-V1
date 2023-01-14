import React from 'react'
import { useState } from 'react';

import { SideBar } from './sidebar';
import { MainSection } from './mainSection';
import './home.css';
export const Home = () => {
    var [content,setContent] = useState("home");

  return (
    <div>
        <div className="App">
            <div className='sideBar'>
              <SideBar val1 = {content} val2 = {setContent}/>
            </div>
            <div className='mainSection'>
              <MainSection val1 = {content}/>
            </div>
        </div>
    </div>
  )
}
