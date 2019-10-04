import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { connect } from 'react-redux';
import { getWeather } from '../../redux/actions/weatherActions';

class Weather extends React.Component {
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
            this.props.getWeather(lat, lng, place.formatted_adress);
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
  weatherList: state.weather.weather.list
});

const actions = { getWeather };

export default connect(
  mapStateToProps,
  actions
)(Weather);
