import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Schedule from './components/pages/Schedule';
import Services from './components/pages/Services';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/schedule' exact component={Schedule} />
          <Route path='/services' exact component={Services} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
