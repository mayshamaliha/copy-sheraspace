import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Header from "./Header";
import OpnePositions from './OpenPositions';
import CareerDetails from './CareerDetails';

function App() {
  return (
     <div>
       <Router>
         <Switch>
         <Route path="/career" component ={CareerDetails}/>
          <Route path="/" component ={OpnePositions}/>
          
         </Switch>
         
       
       {/*<OpnePositions/>
       <CareerDetails/>*/}
       </Router>
       
     </div>
  );
}

export default App;
