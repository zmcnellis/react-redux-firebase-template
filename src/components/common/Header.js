import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { Button, Nav, NavDropdown, NavbarBrand, Navbar, NavItem, MenuItem, Glyphicon } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {

  return (
    <span>
      <Navbar fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Event App</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/events"><MenuItem eventKey={1}>Events</MenuItem></LinkContainer>
          <LinkContainer to="/interests"><MenuItem eventKey={1}>Manage Interests</MenuItem></LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={1} id="basic-nav-dropdown" title={
            <Glyphicon glyph="user" />
          }>
            <MenuItem eventKey={1.1}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
      {loading && <LoadingDots interval={100} dots={20}/>}
      </div>
    </span>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
