import React from 'react';
import { EditButton } from '../../shared/EditButton';

export class Profile extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <div>
          <span>Email: {}</span>
        </div>
        <div>
          <span>Username: {}</span>
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
