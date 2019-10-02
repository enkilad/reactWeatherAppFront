import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post('http://localhost:5000/login', user)
      .then(this.props.history.replace('/weather'))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              onChange={this.onChangeEmail}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter a password"
              required
              onChange={this.onChangePassword}
            />
          </FormGroup>
          <div className="text-center">
            <Button color="primary" className="w-100" onSubmit={this.onSubmit}>
              Login
            </Button>
            <Link to="/">Don't have an account? Register!</Link>
          </div>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Login);
