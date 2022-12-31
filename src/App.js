import logo from './logo.svg';
import './App.css';
import {SideBar} from './components/sidebar';
import { mainSection } from './components/mainSection';
import { useState } from 'react';
function App() {

  // var [content,setContent] = useState("home");

  return (
    <div className="App">
      <div className='sideBar'>
        <SideBar/>
      </div>
      <div className='mainSection'>
        <h1>Autotekk</h1>
        <mainSection/>
      </div>

    </div>
  );
}

export default App;
