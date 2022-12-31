import logo from './logo.svg';
import './App.css';
import {SideBar} from './components/sidebar';
import { MainSection } from './components/mainSection';
import { useState } from 'react';
function App() {

  // var [content,setContent] = useState("home");

  return (
    <div className="App">
      <div className='sideBar'>
        <SideBar/>
      </div>
      <div className='mainSection'>
        <MainSection />
      </div>

    </div>
  );
}

export default App;
