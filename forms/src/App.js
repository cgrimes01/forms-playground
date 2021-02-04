import './App.css';
import React from 'react';
import { FormikExample } from './Forms/Formik/formik';
import { FormikMultiple } from './Forms/FormikMultiple/formikmultiple';
import { JsonFormsExample } from './Forms/JSONForms/jsonforms';
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
                    <li>
                        <Link to="/jsonforms">JsonForms</Link>
                    </li>
                    <li>
                        <Link to="/formikmultiple">Formik Multi</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/formik">
                    <FormikExample />
                </Route>
                <Route path="/jsonforms">
                    <JsonFormsExample />
                </Route>
                <Route path="/formikmultiple">
                    <FormikMultiple />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
