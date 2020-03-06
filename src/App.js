import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
     {/* <Switch>
     <Route
                exact
                path="/about"
                render={props => <VideoPage {...props} />}
              />
     </Switch> */}
    </div>
  );
}

export default App;
