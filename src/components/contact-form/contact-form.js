import React from 'react'
import { Form } from 'formik'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Formik } from 'formik'
import * as Yup from 'yup'

const styles = theme => ({
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
  const { isSubmitting, handleChange, handleSubmit, classes, touched } = props

  return (
    <Formik
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string()
          .email('E-mail is not valid')
          .required('E-mail is required'),
        subject: Yup.string().required('Password is required'),
        message: Yup.string().required('Message is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // TODO: send email here
          alert('submitted')
          setSubmitting(false)
        }, 1000)
      }}
      render={({ errors }) => (
        <Form>
          <div className={classes.formGroup}>
            <TextField
              id="firstName"
              label="First Name"
              required
              className={classes.textField}
            />
            {errors.lastName &&
              touched.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            <TextField
              id="lastName"
              label="Last Name"
              required
              className={classes.textField}
            />
            {errors.lastName &&
              touched.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
          </div>
          <div className={classes.formGroup}>
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
          <div className={classes.formGroup}>
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
          <div className={classes.formGroup}>
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
          <div className={classes.formGroup}>
            <Button variant="contained" color="secondary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    />
  )
}

export default withStyles(styles, { withTheme: true })(ContactForm)
