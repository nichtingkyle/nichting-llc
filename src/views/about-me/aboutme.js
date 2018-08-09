import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({})
const AboutMeView = props => {
  const { classes } = props
  return (
    <div>
      <h2>Dr. Erin Nichting Psy.D</h2>
      <Divider />
      <p>This is my personal information page.</p>
    </div>
  )
}

export default withStyles(styles)(AboutMeView)
