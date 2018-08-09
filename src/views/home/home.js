import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({})
const HomeView = props => {
  const { classes } = props
  return (
    <div>
      <h2>Dr. Erin Nichting Psy.D</h2>
      <Divider />
      <p>
        Erin is currently a forensic psychologist at Court Clinic in Cincinnati,
        OH
      </p>
    </div>
  )
}

export default withStyles(styles)(HomeView)
