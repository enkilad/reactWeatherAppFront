import React from 'react';
import { getToken } from '../../api';
import { connect } from 'react-redux';
import { getHistoryList } from '../../redux/actions/historyListActions';

class HistoryList extends React.PureComponent {
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

export default connect(
  null,
  { getHistoryList }
)(HistoryList);
