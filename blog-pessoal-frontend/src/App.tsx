import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/statics/navbar/navbar';
import SignUp from './pages/signUp/signUp';
import './App.css';


function App() {
  return (
    <Router>

      {/*<Navbar />*/}

      <Routes>

        <Route path='/' element={ <SignUp /> }></Route>

        <Route path='/login' element={ <SignUp /> }></Route>

      </Routes>

      {/*<Footer />*/}

    </Router>
  );
}

export default App;
