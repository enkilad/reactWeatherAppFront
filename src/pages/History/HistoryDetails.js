import React from 'react';
import { getToken } from '../../api';
import { connect } from 'react-redux';
import { getHistoryDetails } from '../../redux/actions/historyDetailsActions';

class HistoryDetails extends React.PureComponent {
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

export default connect(
  null,
  { getHistoryDetails }
)(HistoryDetails);
