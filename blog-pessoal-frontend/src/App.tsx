import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/statics/navbar/navbar';
import SignUp from './pages/SignUp/SignUp';
import './App.css';
import SignIn from './pages/SignIn/SignIn';


function App() {
  return (
    <Router>

      {/*<Navbar />*/}

      <Routes>

        <Route path='/' element={ <SignIn /> }></Route>

        <Route path='/login' element={ <SignIn /> }></Route>

        <Route path='/register' element={ <SignUp /> }></Route>

      </Routes>

      {/*<Footer />*/}

    </Router>
  );
}

export default App;
