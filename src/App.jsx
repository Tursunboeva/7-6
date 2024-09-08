import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import StudentList from './StudentList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/list" element={<StudentList />} />
      </Routes>
    </Router>
  );
};

export default App;
