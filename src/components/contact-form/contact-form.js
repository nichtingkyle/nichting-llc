import React from 'react'
import { Form } from 'formik'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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

const ContactForm = props => {
  const {
    isSubmitting,
    errors,
    handleChange,
    handleSubmit,
    classes,
    touched
  } = props

  return (
    <Form>
      <div className="formGroup">
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
        {errors.lastName &&
          touched.firstName && (
            <div className="invalid-feedback">{errors.lastName}</div>
          )}
      </div>
      <div className="formGroup">
        <TextField
          id="email"
          label="Email Address"
          required
          className={classes.textField}
        />
        {errors.email &&
          touched.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
      </div>
      <div className="formGroup">
        <TextField
          id="subject"
          label="Subject"
          required
          className={classes.textField}
        />
        {errors.subject &&
          touched.subject && (
            <div className="invalid-feedback">{errors.subject}</div>
          )}
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
        {errors.message &&
          touched.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
      </div>
      <div className="formGroup">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </Form>
  )
}

export default withStyles(styles)(ContactForm)
