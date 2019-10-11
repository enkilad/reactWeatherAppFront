import React from 'react';
import { connect } from 'react-redux';
import { EditButton } from '../../shared/EditButton';
import { getUser } from '../../redux/actions/userActions';
import { getToken } from '../../api';

class Profile extends React.Component {
  componentDidMount() {
    if (!getToken()) {
      this.props.history.replace('/');
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div className="d-flex flex-column align-items-center">
        <div>
          <span>Email: {user.email}</span>
        </div>
        <div>
          <span>Username: {user.username}</span>
          <EditButton />
        </div>
        <div>
          <span>Password</span>
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
