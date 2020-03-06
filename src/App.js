import React from 'react';
import {Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'

//styles
import './App.css';

//components
import Register from './components/Register'
import Login from './components/Login'
import SearchPage from './components/SearchPage'
import VendorPage from './components/VendorPage';
import Favorites from './components/Favorites';


function App() {
  return (
    <div className="App">
      <Route exact path ='/' component={Login}/>
      <Route exact path ='/register' component={Register}/>
      <PrivateRoute component={SearchPage} exact path = '/truck-search'/>
      <PrivateRoute component={Favorites} exact path = '/favorites'/>
      <PrivateRoute component={VendorPage} exact path = '/trucks' />
  
    </div>
  );
}

export default App;
