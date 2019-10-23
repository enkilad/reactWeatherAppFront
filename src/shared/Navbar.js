import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import styled from 'styled-components';
import { signOut } from '../redux/actions/userActions';
import { connect } from 'react-redux';

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

export class NavbarMenu extends React.PureComponent {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  onLogOut = () => {
    this.props.signOut();
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <LinkStyled to="/" style={{ fontSize: 20 }}>
            React Weather App
          </LinkStyled>
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
                <LinkStyled to="/history-list">History List</LinkStyled>
              </NavItemStyled>
              <NavItemStyled>
                <LinkStyled to="/history-details">History Details</LinkStyled>
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

export default connect(
  null,
  { signOut }
)(NavbarMenu);
