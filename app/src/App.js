import React, { Component } from 'react'
import './App.css'
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
//    this.props.fetchFrameworkEndpoints()
  }

  render() {
//    if (!this.props.frameworks) {
//      return (
//        <div className="App">Loading app...</div>
//      )
//    }

    return (
        <Home/>
    );
  }
}


export default App
