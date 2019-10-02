import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { axiosClient } from '../../api';
import { connect } from 'react-redux';
// import { signIn, signOut } from '../../redux/actions/';

class Weather extends React.Component {
  state = { weatherList: [] };

  fetchWeather = async (lat, lon) => {
    try {
      const response = await axiosClient.get(
        `/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=2b7a8efd8eef6e6ca7dbd4539f13bb02`
      );
      const weatherList = response.data.list.map(obj => {
        let temp = Math.floor(obj.main.temp);
        const date = obj.dt_txt;
        const weather = obj.weather[0].main;
        if (+temp > 0) {
          temp = `+${temp}`;
        }
        return { temp, date, weather };
      });
      this.setState({ weatherList });
    } catch (error) {
      console.error(error);
    }
  };

  // autocompFunc = () => {};

  render() {
    return (
      <div>
        <Autocomplete
          className="form-control"
          onPlaceSelected={place => {
            const lat = place.geometry.location.lat();
            const lon = place.geometry.location.lng();
            this.fetchWeather(lat, lon);
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
            {this.state.weatherList.map(({ date, temp, weather }, id) => {
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

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  {} // signIn, signOut
)(Weather);
