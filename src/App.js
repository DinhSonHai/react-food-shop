import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import { createStore } from 'redux';

import TopMenu from './components/TopMenu';
import Products from './pages/Products';
import User from './pages/User';
import { CartContext, CartProvider } from './contexts/Cart';

import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';

const { createStore } = require('redux');

const Index = () => <h2>Home</h2>;

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Router>
          <div className="App">
            <TopMenu />
          </div>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/products/" component={ Products }></Route>
          <Route path="/user/" component={ User }></Route>
        </Router>
      </CartProvider>
    );
  }
}

export default App;
