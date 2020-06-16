import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homescreen from './scenes/Home'
import Horoskop from './scenes/Horoskop'
import './App.css';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homescreen />
        </Route>
        <Route path="/horoskop/:zodiac" strict exact component={Horoskop}>
        </Route>
      </Switch>
    </Router>
  )

}

export default App;

