import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
       <Navbar/>
       <News pageSize={6} category='sports'/>
       <Switch>
<Route exact path="/buisness"><News pageSize={6} category='sports'/></Route>
<Route exact path="business"><News pageSize={6} category='business'/></Route>
<Route exact path="entertainment"><News pageSize={6} category='entertainment'/></Route>
<Route exact path="general"><News pageSize={6} category='general'/></Route>
<Route exact path="health"><News pageSize={6} category='health'/></Route>
<Route exact path="science"><News pageSize={6} category='science'/></Route>
<Route exact path="sports"><News pageSize={6} category='sports'/></Route>
<Route exact path="technology"><News pageSize={6} category='technology'/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}


