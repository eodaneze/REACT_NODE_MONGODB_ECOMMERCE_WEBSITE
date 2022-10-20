import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import ProductScreen from "./screens/ProductScreen";
import {LinkContainer} from 'react-router-bootstrap'
import { Badge, Nav } from "react-bootstrap";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";


function App() {
  const { state } = useContext(Store);
  const {cart} = state;

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg='dark' varient="dark">
             <Container className="mt-5">
                <LinkContainer to='/'>
                   <Navbar.Brand className="text-white">Amazona</Navbar.Brand>
                </LinkContainer>
                <Nav className='ms-auto'>
                    <Link to='/cart' className="nav-link text-white h2">Cart <i className="fa fa-shopping-cart"></i></Link>
                    {cart.cartItems.length > 0 && (
                       
                       <span className="cart">{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>
                    )}
                </Nav>
                
             </Container>
          </Navbar>
        
        </header>
        <main>
        <Container>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />}/>
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/" element={<HomeScreen />} />
          </Routes>
        
        </Container>
        </main>
        <footer className="bg-dark p-5">
            <div className="text-center text-white">All right reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
