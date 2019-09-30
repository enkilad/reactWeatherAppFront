import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <Form>
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
          <div className="text-center">
            <Button color="primary" className="w-100">
              Login
            </Button>
            <Link to="/">Don't have an account? Register!</Link>
          </div>
        </Form>
      </div>
    );
  }
}

export default Login;
