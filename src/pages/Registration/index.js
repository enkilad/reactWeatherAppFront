import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Registration extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter a password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Your passwords should match"
            />
          </FormGroup>
          <div className="text-center">
            <Button color="primary" className="w-100">
              Register
            </Button>
            <Link to="/login">Have an account? Log in!</Link>
          </div>
        </Form>
      </div>
    );
  }
}

export default Registration;
