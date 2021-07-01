import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ScheduleOnline from './pages/ScheduleOnline';
import Services from './pages/Services';

// CHATRA
(function (d, w, c) {
  w.ChatraID = '39oMWcbRD5SfacNen';
  var s = d.createElement('script');
  w[c] =
    w[c] ||
    function () {
      (w[c].q = w[c].q || []).push(arguments);
    };
  s.async = true;
  s.src = 'https://call.chatra.io/chatra.js';
  if (d.head) d.head.appendChild(s);
})(document, window, 'Chatra');

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
