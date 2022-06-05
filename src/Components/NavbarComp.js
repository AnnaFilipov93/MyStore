import React, { Component } from 'react'
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


export default class NavbarComp extends Component {
    render() {
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
                                {/* <img src="../../public/Images/icons/Cart.png" className="rounded me-2" alt="cart" /> */}
                                <Button 
                                    variant="text"
                                    startIcon={<ShoppingCartIcon style={{color : 'green'}}/>}>
                                </Button>
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
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
