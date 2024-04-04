import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import ToDoList from './routes/ToDoList';

function App() {

  return (

    <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/ToDoList" element={<ToDoList/>}></Route>
    </Routes>
  </Router>



  );
}

export default App;
