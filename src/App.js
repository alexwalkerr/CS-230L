import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './index';
import { Card } from './Card';
import { Contact } from './Contact';
import { Home } from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/card" element={<Card />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;