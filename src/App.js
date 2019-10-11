import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './pages/WeatherPage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import HistoryList from './pages/History/HistoryList';
import HistoryDetails from './pages/History/HistoryDetails';
import { ProfilePage } from './pages/Profile';
import { getToken } from './api';
import Navbar from './shared/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          {{
            /* getToken()  */
          } && <Navbar />}
          {/* works only after a page reload */}
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

export default App;
