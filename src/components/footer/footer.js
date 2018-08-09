import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'

const BottomNavBar = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label="Email" icon={<EmailIcon />} />
      <BottomNavigationAction label="Call" icon={<PhoneIcon />} />
    </BottomNavigation>
  )
}

export default BottomNavBar
