import React from 'react';

import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

class Home extends React.Component {
  componentDidMount() {
#    this.props.dispatch(this.props.frameworks.PlayerApi.squad({'squad_name': 'Flannelcat'}))
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
      stuff
      </div>
    )
  }
}

export default withtyles(styles)(Home))
