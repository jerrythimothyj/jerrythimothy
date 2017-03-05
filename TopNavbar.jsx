import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class TopNavbar extends React.Component {
   render() {
      return (
         <Navbar inverse collapseOnSelect>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#">JERRY THIMOTHY J</a>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav>
		        <NavItem eventKey={1} href="#">Technical Skills</NavItem>
		        <NavItem eventKey={2} href="#">Projects</NavItem>
		        <NavItem eventKey={3} href="#">Learnings</NavItem>
		        <NavItem eventKey={4} href="#">Employment</NavItem>
		        <NavItem eventKey={5} href="#">Academic</NavItem>
		        <NavItem eventKey={6} href="#">Strengths</NavItem>
		        <NavItem eventKey={7} href="#">Personal</NavItem>
		      </Nav>
		    </Navbar.Collapse>
		  </Navbar>
      );
   }
}


export default TopNavbar;