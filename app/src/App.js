import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router' // react-router v4
import { withRouter } from 'react-router'
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './components/Home'


class NoMatch extends Component {
  render() {
    return (
      <div>
        No Match
      </div>
    )
  }
}

class App extends Component {
  componentDidMount() {
    this.props.fetchFrameworkEndpoints()
  }

  render() {
    if (!this.props.frameworks) {
      return (
        <div className="App">Loading app...</div>
      )
    }

    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">

          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}


export default withRouter(App)
