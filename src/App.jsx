import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Projects from './Components/Projects';
import Studio from './Components/Studio';
import NotFound from './Components/404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/about" element={<Studio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
