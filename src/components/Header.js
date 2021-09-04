import { react } from "@babel/types"
import React,{Component} from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

 
class Header extends Component{
    render(){
        return(
            
                <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                <Navbar.Brand href="#home">COVID-19</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"> 
                  
                
                    <Link className="p-2 mr-5" to="/india">India</Link>
                
                    
                    <Link className="p-2 mr-5" to="/world">World</Link>
                
                </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            
            
          
        )
    }
}
export default Header;