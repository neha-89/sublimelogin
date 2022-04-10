import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Login from './components/Login';
import Profile from './components/Profile';
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav />
     <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />}/>
        <Route path="/login" element={<Login />}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;

