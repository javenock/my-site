import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cv from './components/Cv';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Default from './components/Default';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cv" component={Cv} />
        <Route path="/contacts" component={Contacts} />
        <Route path='/cv-git' component={() => { 
          window.location.href = 'https://github.com/javenock/'; 
          return null;
        }}/>
        <Route component={Default} />
      </Switch>      
      <Footer />
    </>
  );
}

export default App;
