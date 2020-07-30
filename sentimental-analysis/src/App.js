import React from 'react';
import Analysis from './Analysis'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sarcasm from './Sarcasm'
import Header from './Header'
import {Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Header />
    <div className="container">
    <div className="row">
    <div className="col-md-6">
      
 
</div>
  <div className="col-md-6">
    
   
    </div>
    </div>
    <Switch>
<Route path="/" exact component={Analysis} />

<Route path="/sarcasm" exact component={Sarcasm} />
    </Switch>
    
    </div>
    </div>
    
  );
}

export default App;
