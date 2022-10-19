import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import ProductScreen from "./screens/ProductScreen";
import {LinkContainer} from 'react-router-bootstrap'


function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg='dark' varient="dark">
             <Container className="mt-5">
                <LinkContainer to='/'>
                   <Navbar.Brand className="text-white">Amazona</Navbar.Brand>
                </LinkContainer>
                
             </Container>
          </Navbar>
        
        </header>
        <main>
        <Container>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />}/>
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
