import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import logo from './ErinNichtingMobile.jpg'
import Avatar from '@material-ui/core/Avatar'
import SwipeableViews from 'react-swipeable-views'
import ContactView from '../../views/contact/contact'
import HomeView from '../../views/home/home'
import AboutMeView from '../../views/about-me/aboutme'
import ResumeView from '../../views/resume/resume'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
})

class NavBar extends React.Component {
  state = {
    value: 0
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render() {
    const { classes, theme } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <div className="headerBar">
            {<Avatar alt="Erin Nichting" src={logo} className="avatar" />}
            <h1>Nichting Psychological Services, LLC</h1>
          </div>
          <nav>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
            >
              <Tab label="Home" />
              <Tab label="About Me" />
              <Tab label="Resume" />
              <Tab label="Contact" />
            </Tabs>
          </nav>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          animateHeight
        >
          {
            <TabContainer dir={theme.direction}>
              <HomeView />
            </TabContainer>
          }
          {
            <TabContainer dir={theme.direction}>
              <AboutMeView />
            </TabContainer>
          }
          {
            <TabContainer dir={theme.direction}>
              <ResumeView />
            </TabContainer>
          }
          {
            <TabContainer dir={theme.direction}>
              <ContactView />
            </TabContainer>
          }
        </SwipeableViews>
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(NavBar)
