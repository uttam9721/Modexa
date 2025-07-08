import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './../../admin/src/components/Navbar';
import Sidebar from './../../admin/src/components/Sidebar';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <hr />
      <Router>
        <div className="flex w-full">
          {/* Sidebar will always be visible */}
          <Sidebar />
          <Routes>
            <Route path="/add" element={<h1 className='p-4'>Add Page</h1>} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
