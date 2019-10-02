import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import axios from 'axios';
import Weather from './pages/WeatherPage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { Profile } from './pages/Profile';
import Navbar from './shared/Navbar';

class App extends React.Component {
  isUserLoggedIn = true;
  //   const res = await axios.post('http://localhost:5000/login');
  //   if (res) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  render() {
    return (
      <div className="container">
        <Router>
          {this.isUserLoggedIn && <Navbar />}
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
