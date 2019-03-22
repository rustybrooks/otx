import React from 'react';

import fetchFrameworks from '../framework_client'

const sites = [
  "https://ci-otxp.aveng.us",
  "https://otx.alienvault.com",
  "https://local-otxp.aveng.us",
]

class Home extends React.Component {
  state = {
    site: sites[0],
    frameworks: null,
  }

  updateFrameworks() {
    this.setState(prevstate => ({frameworks: null}))

    fetchFrameworks(this.state.site).then(data => {
      console.log(data)
      this.setState(prevstate => ({frameworks: data}))
    })
  }

  componentDidMount() {
    this.updateFrameworks()
  }

  render() {
    const { classes } = this.props;

    if (this.state.frameworks === null) {
      return <div>Loading</div>
    }

    console.log(Object.keys(this.state.frameworks))

    return <table border="1">
      <thead>
      <tr>
        <td>Site:</td>
        <td>{this.state.site}</td>
        <td>Key:</td>
        <td>Foo</td>
      </tr>

      </thead>
      <tbody>
        {
          Object.keys(this.state.frameworks).map(k => {
            return Object.keys(this.state.frameworks[k]).map(ko => {
              return <tr key={k + ':' + ko}>
                <td>{k}</td>
                <td>{ko}</td>
              </tr>

            })
          })
        }
      </tbody>
    </table>
  }
}


export default Home
