import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch  } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Home';

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/sign-in' element={<SignIn/>} />
        </Switch>
    </Router>
  )
};