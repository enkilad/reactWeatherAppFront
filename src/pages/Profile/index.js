import React from 'react';
import { connect } from 'react-redux';
import { EditButton } from '../../shared/EditButton';
import { getUser } from '../../redux/actions/userActions';
import { getToken } from '../../api';

class Profile extends React.PureComponent {
  state = {
    username: '',
    password: ''
  };

  componentDidMount() {
    if (!getToken()) {
      this.props.history.replace('/');
    }
  }

  changeUsername = e => {
    this.setState({ username: e.target.value });
  };

  changePassword = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { user } = this.props;
    return (
      <div className="d-flex flex-column align-items-center">
        <div>
          <label htmlFor="email">Email: {user.email}</label>
        </div>
        <div>
          <label htmlFor="username">Username: {user.username}</label>
          <input
            type="text"
            id="username"
            // className="d-none"
            value={user.username}
            onChange={this.changeUsername}
          />
          <EditButton />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            // className="d-none"
            value={user.password}
            onChange={this.changePassword}
          />
          <EditButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users
  };
};

const actions = { getUser };

export const ProfilePage = connect(
  mapStateToProps,
  actions
)(Profile);
