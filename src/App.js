import React from 'react';
import {Route} from 'react-router-dom';

//styles
import './App.css';

//components
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Route exact path ='/' component={Login}/>
      <Route exact path ='/register' component={Register}/>
  
    </div>
  );
}

export default App;
