import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import styled from 'styled-components';

const NavItemStyled = styled(NavItem)`
  padding: 0.5rem;
`;

export default class Example extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            Weather React App With Google Autocomplete
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItemStyled>
                <Link to="/profile">Profile</Link>
              </NavItemStyled>
              <NavItemStyled>
                <Link to="/weather">Weather</Link>
              </NavItemStyled>
              <NavItem>
                <Button className="p-0">
                  <NavLink href="/" className="text-white">
                    Log Out
                  </NavLink>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
