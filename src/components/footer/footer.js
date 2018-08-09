import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import { withStyles } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'

// TODO: use theme secondary color instead of hard-coding orange
const styles = theme => ({
  iconHover: {
    '&:hover': {
      color: orange[500]
    }
  }
})

const BottomNavBar = props => {
  const { classes } = props
  return (
    <div>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Email"
          icon={
            <EmailIcon
              color="primary"
              className={classes.iconHover}
              style={{ fontSize: 40 }}
            />
          }
          href="mailto:erin.nichting@gmail.com"
        />
        <BottomNavigationAction
          label="Call"
          icon={
            <PhoneIcon
              color="primary"
              className={classes.iconHover}
              style={{ fontSize: 40 }}
            />
          }
          href="tel:4147040638"
        />
      </BottomNavigation>
    </div>
  )
}

export default withStyles(styles)(BottomNavBar)
