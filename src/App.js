import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './pages/WeatherPage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { Profile } from './pages/Profile';
import Navbar from './shared/Navbar';

class App extends React.Component {
  render() {
    const isUserLoggedIn = true;

    return (
      <div className="container">
        <Router>
          {isUserLoggedIn && <Navbar />}
          <Switch>
            <Route component={Registration} path="/" exact />
            <Route component={Weather} path="/weather" />
            <Route component={Login} path="/login" />
            <Route component={Profile} path="/profile" />
            <Route path="City/:id" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
