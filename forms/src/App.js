import './App.css';
import React from 'react';
import { FormikExample } from './Forms/Formik/formik';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/formik">Formik</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/formik">
                    <FormikExample />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
