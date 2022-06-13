import React, { useState } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Home from './Home/Home';
import Contact from './Contact';
import About from './About/About'
import LoginForm from './Form';
import Basket from './Basket';


export default function NavbarComp(props) {

    const {products} = props;
    const [cartItems, setCartItems] = useState([]);
    console.log("cartItems set : ", cartItems);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
        return (
            <Router>
                <div>

                    <Navbar bg="light"  expand="lg">
                    <Container fluid>
                            <Navbar.Brand href="/home">SOUL MATE</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="mr-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    
                                    <NavDropdown title="Products" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/Products/Dog">Dog</NavDropdown.Item>
                                    <NavDropdown.Item href="/Products/Cat">Cat</NavDropdown.Item>
                                    <NavDropdown.Item href="/Products/Rodent">Rodent</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="Products">All</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                </Nav>
                                <Nav>
                                <Nav.Link as={Link} to="/basket"><ShoppingCartIcon/></Nav.Link>
                                
                                <Nav.Link as={Link} to="/login" href="login">Login</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    />
                                    <Button variant="text" style={{color : 'green'}}>Search</Button>
                                </Form>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/login">
                            <LoginForm />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/basket">
                            <Basket cartItems={cartItems}
                                    onAdd={onAdd}
                                    onRemove={onRemove}/>
                        </Route>
                        <Route path="/">
                            <Home products={products} onAdd={onAdd}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }

