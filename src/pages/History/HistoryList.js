import React from 'react';
import { getToken } from '../../api';
import { connect } from 'react-redux';
import { getHistoryList } from '../../redux/actions/historyListActions';

class HistoryList extends React.PureComponent {
  componentDidMount() {
    if (!getToken()) {
      return this.props.history.replace('/');
    }
    this.props.getHistoryList();
  }
  render() {
    console.log(this.props.historyList);
    return (
      <div>
        <ul className="list-group list-unstyled text-center">
          Request History List
        </ul>
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
  { getHistoryList }
)(HistoryList);
