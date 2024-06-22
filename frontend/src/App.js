import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DeviceControl from './components/DeviceControl';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/devices" component={DeviceControl} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
