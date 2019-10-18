import React from 'react';
import { getToken } from '../../api';
import { connect } from 'react-redux';
import { getHistoryDetails } from '../../redux/actions/historyDetailsActions';

class HistoryDetails extends React.PureComponent {
  componentDidMount() {
    if (!getToken()) {
      this.props.history.replace('/');
    }
    this.props.getHistoryDetails();
  }

  renderHistoryDetails() {
    if (this.props.historyDetails == null) {
      return;
    } else {
      return this.props.historyDetails.map(
        ({ _id, createdAtTime, city, list }) => {
          return (
            <li key={_id}>
              <div id={_id}>
                {createdAtTime} {city}
              </div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Temperature</th>
                    <th>Condition</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map(({ date, temp, weather }) => {
                    return (
                      <tr key={Math.random()}>
                        <td>{date}</td>
                        <td>{temp}</td>
                        <td>{weather}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </li>
          );
        }
      );
    }
  }

  render() {
    console.log('HistoryDetails', this.props.historyDetails);
    return (
      <div>
        <ul className="list-group list-unstyled text-center">
          {this.renderHistoryDetails()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    historyDetails: state.historyDetails.data
  };
};

export default connect(
  mapStateToProps,
  { getHistoryDetails }
)(HistoryDetails);
