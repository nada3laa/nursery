import React from 'react'
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import About from './pages/About';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Messges from './pages/Messges';
import Due from './pages/Due';
import In from './pages/In';
import Out from './pages/Out';
import Absent from './pages/Absent';
import Invicing from './pages/Invicing';



// import Maseggs from './pages/Maseggs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path='/Due' element={<Due/>}/>
        <Route path='/In' element={<In/>}/>
        <Route path='/Out' element={<Out/>}/>
        <Route path='/Absent' element={<Absent/>}/>
        <Route path="/about" exact element={<About/>}></Route>
        <Route path='/Invicing' exact element={<Invicing/>}></Route>
        {/* <Route path="/Invoicing" exact element={<Invicing/>}></Route> */}
        <Route path="/messges" exact element={<Messges/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
