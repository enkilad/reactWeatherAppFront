import React from 'react';
import { getToken } from '../../api';

export default class HistoryDetails extends React.PureComponent {
  componentDidMount() {
    if (!getToken()) {
      this.props.history.replace('/');
    }
  }
  render() {
    return (
      <div>
        <p>HistoryDetails Page</p>
      </div>
    );
  }
}
