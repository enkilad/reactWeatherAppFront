import React from 'react';
import { connect } from 'react-redux';
import {
  getUser,
  changeUsername,
  changePassword
} from '../../redux/actions/userActions';
import { getToken } from '../../api';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { history } from '../../history';

const ProfilePageComponent = styled.div`
  width: 45%;
  margin: 3% auto 0;
  border: 1px solid #e7e8ec;
  background-color: #fafbfc;
  padding: 1% 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ButtonStyled = styled(Button)`
  margin-left: 2%;
`;

const UserField = styled.div`
  margin: 2% 0;
`;

class Profile extends React.PureComponent {
  state = {
    newUsername: '',
    currentPassword: '',
    newPassword: '',
    toggleChangeUsername: false,
    toggleChangePassword: false
  };

  componentDidMount() {
    if (!getToken()) {
      history.replace('/');
    }
    this.props.getUser();
  }

  onChangeUsername = e => {
    const value = e.target.value;
    this.setState(() => ({ newUsername: value }));
  };

  onChangeCurrentPassword = e => {
    this.setState({
      currentPassword: e.target.value
    });
  };

  onChangeNewPassword = e => {
    this.setState({
      newPassword: e.target.value
    });
  };

  showChangeUsernameInput = () => {
    const currentState = this.state.toggleChangeUsername;
    this.setState({
      toggleChangeUsername: !currentState
    });
  };

  showChangePasswordInput = () => {
    const currentState = this.state.toggleChangePassword;
    this.setState({
      toggleChangePassword: !currentState
    });
  };

  onChangeUsernameSubmit = async () => {
    try {
      const inputValues = {
        newUsername: this.state.newUsername
      };

      await this.props.changeUsername(inputValues);
    } catch (error) {
      console.log(error);
    }
  };

  onChangePasswordSubmit = async () => {
    try {
      const inputValues = {
        currentPassword: this.state.currentPassword,
        newPassword: this.state.newPassword
      };

      await this.props.changePassword(inputValues);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { userData } = this.props;
    return (
      <ProfilePageComponent>
        <UserField>
          <label>Email: {userData && userData.email}</label>{' '}
          {/* {'' || userData.email} */}
        </UserField>

        <UserField>
          <label htmlFor="username">
            Username: {userData && userData.username}
          </label>
          <ButtonStyled onClick={this.showChangeUsernameInput}>
            {this.state.toggleChangeUsername ? 'Cancel' : 'Change Username'}
          </ButtonStyled>
        </UserField>

        <div className={this.state.toggleChangeUsername ? 'd-block' : 'd-none'}>
          <hr></hr>
          <label>New Username:</label>
          <input
            type="text"
            id="username"
            className="ml-2"
            required
            onChange={this.onChangeUsername}
          />
          <Button
            type="submit"
            className="ml-3"
            onClick={this.onChangeUsernameSubmit}
          >
            Change
          </Button>
          <hr></hr>
        </div>

        <UserField>
          <label htmlFor="password">Password</label>
          <ButtonStyled onClick={this.showChangePasswordInput}>
            {this.state.toggleChangePassword ? 'Cancel' : 'Change Password'}
          </ButtonStyled>
        </UserField>

        <div className={this.state.toggleChangePassword ? 'd-block' : 'd-none'}>
          <hr></hr>
          <div>
            <label>Current Password:</label>
            <input
              type="password"
              id="current-password"
              className="ml-2"
              required
              onChange={this.onChangeCurrentPassword}
            />
          </div>

          <div>
            <label>New Password:</label>
            <input
              type="password"
              id="new-password"
              className="ml-2"
              required
              onChange={this.onChangeNewPassword}
            />
            <Button
              type="submit"
              onClick={this.onChangePasswordSubmit}
              className="ml-3"
            >
              Change
            </Button>
          </div>
        </div>
      </ProfilePageComponent>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.user.userData,
    token: state.user.token
  };
};

const actions = { getUser, changeUsername, changePassword };

export const ProfilePage = connect(
  mapStateToProps,
  actions
)(Profile);
