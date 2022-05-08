import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import Home from './Home';
import Contact from './Contact';
import About from './About'

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="light"  expand="lg">
                    <Container fluid>
                            <Navbar.Brand href="#">SOUL MATE</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="mr-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                    
                                    <NavDropdown title="Products" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Dog</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Cat</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Bird</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">All</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                {/* <img src={ShoppingCartIcon} className="rounded me-2" alt="cart" /> */}
                                <Nav.Link as={Link} href="#deets">Log in/Sign up</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Switch>
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
