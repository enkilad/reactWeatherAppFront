import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { signIn } from '../../redux/actions/userActions';
import { getToken } from '../../api';

class Login extends React.PureComponent {
  componentDidMount() {
    if (getToken()) {
      this.props.history.replace('/weather');
    }
  }

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

  onSubmit = async e => {
    e.preventDefault();

    try {
      const formValues = {
        email: this.state.email,
        password: this.state.password
      };

      await this.props.signIn(formValues);
      this.props.history.replace('/weather');
    } catch (error) {
      console.log(error);
    }
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
  { signIn }
)(Login);
