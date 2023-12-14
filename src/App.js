import React from 'react';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import { Routes,Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
