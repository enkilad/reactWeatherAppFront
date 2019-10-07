import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

export class Registration extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: ''
  };

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
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

  onChangeConfirmPassword = e => {
    this.setState({
      confirmPassword: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    // console.log(user);

    // async () => {
    //   try {
    //     const res = await axios.post('http://localhost:5000/register', user);
    //     this.props.history.replace('/login');
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    axios
      .post('http://localhost:5000/register', user)
      .then(this.props.history.replace('/login'))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
              onChange={this.onChangeUsername}
            />
          </FormGroup>
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
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Your passwords should match"
              required
              onChange={this.onChangeConfirmPassword}
            />
          </FormGroup>
          <div className="text-center">
            <Button color="primary" className="w-100" onSubmit={this.onSubmit}>
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

// const mapStateToProps = state => {
//   return {};
// };

// export default connect(
//   mapStateToProps
// )(Registration);
