import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TopMenu from './components/TopMenu';
import Products from './pages/Products';
import { CartContext, CartProvider } from './contexts/Cart';

import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';

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
        </Router>
      </CartProvider>
    );
  }
}

export default App;
