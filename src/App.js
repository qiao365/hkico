import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import features from './feature';
class App extends Component {
  render() {
    // console.log('feature', features);
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={features.Home} />
            <Route exact path="/home" component={features.Home} />
            <Route path="/sign/in" component={features.SignIn} />
            <Route path="/sign/up" component={features.SignUp} />
            <Route path="/project/list" component={features.ProjectList} />
            <Route path="/project/list/media" component={features.ProjectList} />
            <Route path="/project/create" component={features.ProjectCreate} />
            <Route path="/project/show/:projectId" component={features.ProjectShow} />
            <Route path="/project/:projectId/contract/:contractId" component={features.InfoContract} />
            <Route path="/account/profile/:accountId" component={features.AccountProfile} />
            <Route path="/account/edit/:accountId" component={features.AccountEdit} />
            <Route path="/account/recharge/:accountId" component={features.AccountRecharge} />
            <Route path="/contract/create/:projectId" component={features.CreateContract} />
            <Route path="/contract/progress/:contractId" component={features.ProgressContract} />
            <Route path="/contract/holder/:contractId" component={features.HolderContract} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
