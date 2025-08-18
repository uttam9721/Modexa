import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './../../admin/src/components/Navbar';
import Sidebar from './../../admin/src/components/Sidebar';
import List from './pages/List';
import Orders from './pages/Orders';
import Login from './components/Login';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token,setToken]=useState('');



  return (
    <div className="bg-gray-50 min-h-screen">
      {token===""?
      <Login/>:
       <>
      <Navbar />
      <hr />
      <Router>
        <div className="flex w-full">
          {/* Sidebar will always be visible */}
          <Sidebar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray text-base'>

          <Routes>
            <Route path="/add" element={<h1 className='p-4'>Add Page</h1>} />
            {/* Add more routes here */}
            <Route path='/list' element={<List/>} />
            <Route path='/orders' element={<Orders/>} />
          </Routes>
          </div>
        </div>
      </Router>
      </>
      
      }
     
    </div>
  );
};

export default App;
