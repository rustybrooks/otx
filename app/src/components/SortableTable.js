import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

class SortableTable extends React.Component {
  state = {
  }

  componentDidUpdate(prevProps) {
    console.log("component did update")
  }




  render() {
    let { classes } = this.props

    const that = this

    return (
        <div>
          <table className={classes.tablestats}>
            <thead>
            <tr>
            </tr>
            </thead>

            <tbody>
            {
              this.props.squad_stats.map((s) => {
                return <tr key={s.player_name}>
                </tr>
              })
            }
            </tbody>
          </table>
        </div>
    )
  }
}

export default connect(
  (state)=>{
    return {
      frameworks: state.frameworks,
      squad_stats: state.PlayerApi.squad_stats,
      seasons: state.MatchApi.seasons,
    }
  },
)(withStyles(styles)(SortableTable))
