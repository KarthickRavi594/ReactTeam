import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

//import {FormControl} from 'react-bootstrap';
//import Nivea from '../src/images/nivea.jpg';

  
    class Header extends Component {
    
      render() {
       
        return (
         
            <div>
              <Navbar expand="lg"  bg="light">
                <Navbar.Brand href="#" className="shop"><h1>Welcome To Shopping</h1></Navbar.Brand>
              
                </Navbar>
                <Navbar expand="lg"  bg="primary">
                <Navbar.Brand href="#"><h2>Shopping Cart</h2></Navbar.Brand>
                <Form inline>
                <Button variant="outline-info" className="cart"><h3>Cart</h3></Button>
                </Form>
                </Navbar>
            </div> 
            
        );
      }
    }
    export default Header;