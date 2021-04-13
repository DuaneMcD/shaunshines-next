import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import ScheduleOnline from './Components/pages/ScheduleOnline';
import Services from './Components/pages/Services';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/schedule-online' exact component={ScheduleOnline} />
          <Route path='/services' exact component={Services} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
