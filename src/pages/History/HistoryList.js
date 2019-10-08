import React from 'react';
import { getToken } from '../../api';

export default class HistoryList extends React.PureComponent {
  componentDidMount() {
    if (!getToken()) {
      this.props.history.replace('/');
    }
  }
  render() {
    return (
      <div>
        <p>HistoryList Page</p>
      </div>
    );
  }
}
