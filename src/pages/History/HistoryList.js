import React from 'react';
import { getToken } from '../../api';
import { connect } from 'react-redux';
import { getHistory } from '../../redux/actions/weatherActions';

class HistoryList extends React.PureComponent {
  componentDidMount() {
    if (!getToken()) {
      return this.props.history.replace('/');
    }
    this.props.getHistory();
  }
  render() {
    console.log(this.props.historyList);
    return (
      <div>
        <p>HistoryList Page</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    historyList: state.historyList
  };
};

export default connect(
  mapStateToProps,
  { getHistory }
)(HistoryList);
