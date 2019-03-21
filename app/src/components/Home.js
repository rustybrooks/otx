import React from 'react';

import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

const styles = {}

class Home extends React.Component {
  componentDidMount() {
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


export default withStyles(styles)(Home)
