import React, { Component } from 'react'
import './App.css'
import NavBar from './components/header/header'
import BottomNavBar from './components/footer/footer'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1565C0'
    },
    secondary: orange
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <BottomNavBar />
      </MuiThemeProvider>
    )
  }
}

export default App
