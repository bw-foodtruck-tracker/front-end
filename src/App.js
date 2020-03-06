import React from 'react';
import {Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'

//styles
import './App.css';

//components
import Register from './components/Register'
import Login from './components/Login'
import SearchPage from './components/SearchPage'

function App() {
  return (
    <div className="App">
      <Route exact path ='/' component={Login}/>
      <Route exact path ='/register' component={Register}/>
      <PrivateRoute component={SearchPage} exact path = '/truck-search'/>
  
    </div>
  );
}

export default App;
