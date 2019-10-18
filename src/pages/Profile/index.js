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
    this.props.getUser();
  }

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    const { user } = this.props;
    return (
      <div className="d-flex flex-column align-items-center">
        <div>
          <label htmlFor="email">Email: {this.props.user.username}</label>
        </div>
        <div>
          <label htmlFor="username">Username: </label>
          {/* <input
            type="text"
            id="username"
            className="d-none"
            value={user.username}
            onChange={this.onChangeUsername}
          /> */}
          <EditButton />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          {/* <input
            type="password"
            id="password"
            className="d-none"
            value={user.password}
            onChange={this.onChangePassword}
          /> */}
          <EditButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userData
  };
};

export const ProfilePage = connect(
  mapStateToProps,
  { getUser }
)(Profile);
