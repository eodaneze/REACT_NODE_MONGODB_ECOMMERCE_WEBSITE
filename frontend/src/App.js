import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ProductScreen from "./screens/ProductScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LinkContainer } from "react-router-bootstrap";
import { Badge, Nav, NavDropdown } from "react-bootstrap";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="top-center" limit={1} />
        <header>
          <Navbar bg="dark" varient="dark">
            <Container className="mt-5">
              <LinkContainer to="/">
                <Navbar.Brand className="text-white h1">DanShop</Navbar.Brand>
              </LinkContainer>
              <Nav className="ms-auto">
                <Link to="/cart" className="nav-link text-white h2">
                  Cart <i className="fa fa-shopping-cart"></i>
                </Link>
                {cart.cartItems.length > 0 && (
                  <span className="cart">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}

                {userInfo ? (
                  <NavDropdown
                    className="text-white"
                    title={userInfo.email.slice(0, 6)}
                    id="basic-nav-dropdown"
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item text-white bg-dark btn"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link text-white" to="/signin">
                    Sign In
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
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
