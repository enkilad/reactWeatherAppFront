import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './pages/WeatherPage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import HistoryList from './pages/History/HistoryList';
import HistoryDetails from './pages/History/HistoryDetails';
import { ProfilePage } from './pages/Profile';
// import { getToken } from './api';
import Navbar from './shared/Navbar';
import { signIn } from './redux/actions/userActions';
import { connect } from 'react-redux';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Router>
          {/* {this.props.isUserLoggedIn && */}
          <Navbar />
          <Switch>
            <Route component={Registration} path="/" exact />
            <Route component={Weather} path="/weather" />
            <Route component={Login} path="/login" />
            <Route component={HistoryList} path="/history-list" />
            <Route component={HistoryDetails} path="/history-details" />
            <Route component={ProfilePage} path="/profile" />
            <Route path="City/:id" />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: !!state.user.password
  };
};

export default connect(
  mapStateToProps,
  { signIn }
)(App);
