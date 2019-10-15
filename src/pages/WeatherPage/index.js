import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { connect } from 'react-redux';
import { getToken } from '../../api';
import { getWeather, createHistory } from '../../redux/actions/weatherActions';

class Weather extends React.PureComponent {
  componentDidMount() {
    if (!getToken()) {
      this.props.history.replace('/');
    }
  }

  render() {
    return (
      <div>
        <Autocomplete
          className="form-control"
          onPlaceSelected={place => {
            if (!place.geometry) {
              return;
            }
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            (async () => {
              await this.props.getWeather(lat, lng, place.formatted_address);
              await this.props.createHistory();
            })();
          }}
        />
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody id="weather-table">
            {this.props.weatherList.map(({ date, temp, weather }, id) => {
              return (
                <tr key={id}>
                  <td>{date}</td>
                  <td>{temp}</td>
                  <td>{weather}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weatherList: state.weather.weatherList
});

const actions = { getWeather, createHistory };

export default connect(
  mapStateToProps,
  actions
)(Weather);
