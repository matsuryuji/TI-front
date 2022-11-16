import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch  } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' element={<SignIn/>} />
        </Switch>
    </Router>
  )
};