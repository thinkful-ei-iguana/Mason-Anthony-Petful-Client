import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Routes/Home';
import Adoption from './Routes/Adoption';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          render={renderProps => {
            return <Home {...renderProps} />;
          }}
        />
        <Route
          exact
          path='/Adopt'
          render={renderProps => {
            return <Adoption {...renderProps} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
