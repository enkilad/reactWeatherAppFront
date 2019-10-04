import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import styled from 'styled-components';

const NavItemStyled = styled(NavItem)`
  padding: 0.5rem;
`;

const LinkStyled = styled(Link)`
  color: darkblue;

  &:hover {
    text-decoration: none;
    color: darkslateblue;
  }
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

  onLogOut = () => {
    localStorage.clear();
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <LinkStyled to="/">Weather React App</LinkStyled>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItemStyled>
                <LinkStyled to="/profile">Profile</LinkStyled>
              </NavItemStyled>
              <NavItemStyled>
                <LinkStyled to="/weather">Weather</LinkStyled>
              </NavItemStyled>
              <NavItemStyled>
                <LinkStyled to="/">History List</LinkStyled>
              </NavItemStyled>
              <NavItemStyled>
                <LinkStyled to="/">History Details</LinkStyled>
              </NavItemStyled>
              <NavItem>
                <Button onClick={this.onLogOut}>Log Out</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
