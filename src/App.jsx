import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './context/loginSlice';
import Table from './pages/Table/Table';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Loginpage/LoginPage';



function App() {

  return (
    <div className="App">
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
          <Route path="/table" element={<Table/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
