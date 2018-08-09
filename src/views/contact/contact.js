import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  formGroup: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginBottom: '2em',
    marginRight: '2em',
    width: 250
  },
  textArea: {
    marginBottom: '2em',
    width: 532
  }
})

const ContactView = props => {
  const { classes } = props
  return (
    <div>
      <h2>Contact Form</h2>
      <p>
        If you are an individual or legal professional in need of a forensic
        consultation, please call Dr. Nichting at{' '}
        <a href="tel:4147040638">414-704-0638</a>, or email at&#160;
        <a href="mailto:erin.nichting@gmail.com">erin.nichting@gmail.com</a>.
      </p>
      <p>
        You can also fill out the form below and I will get back to you as soon
        as possible.
      </p>
      <div className={classes.formGroup}>
        <TextField
          id="firstName"
          label="First Name"
          required
          className={classes.textField}
        />
        <TextField
          id="lastName"
          label="Last Name"
          required
          className={classes.textField}
        />
      </div>
      <div className="formGroup">
        <TextField
          id="email"
          label="Email Address"
          required
          className={classes.textField}
        />
      </div>
      <div className="formGroup">
        <TextField
          id="subject"
          label="Subject"
          required
          className={classes.textField}
        />
      </div>
      <div className="formGroup">
        <TextField
          id="message"
          label="Message"
          required
          multiline
          rows="8"
          className={classes.textArea}
        />
      </div>
      <div className="formGroup">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default withStyles(styles)(ContactView)
