import React from 'react';
import { getToken } from '../../api';
import { connect } from 'react-redux';
import { getHistoryList } from '../../redux/actions/historyListActions';
import { Link } from 'react-router-dom';

class HistoryList extends React.PureComponent {
  componentDidMount() {
    if (!getToken()) {
      return this.props.history.replace('/');
    }
    this.props.getHistoryList();
  }

  renderHistory() {
    if (this.props.historyList == null) {
      return;
    } else {
      return this.props.historyList.map(({ _id, createdAtTime, city }) => {
        return (
          <li className="list-group-item" key={_id}>
            <Link to="/history-details">
              {createdAtTime} {city}
            </Link>
          </li>
        );
      });
    }
  }

  render() {
    console.log('HistoryList', this.props.historyList);
    return (
      <div>
        <ul className="list-group">
          {this.renderHistory()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    historyList: state.historyList.data
  };
};

export default connect(
  mapStateToProps,
  { getHistoryList }
)(HistoryList);
