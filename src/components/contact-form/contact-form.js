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

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('E-mail is not valid')
    .required('E-mail is required'),
  subject: Yup.string().required('Password is required'),
  message: Yup.string().required('Message is required')
})

const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    // TODO: send email here
    alert('submitted')
    setSubmitting(false)
  }, 1000)
}

class ContactForm extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        render={({ errors, values, handleChange, handleSubmit }) => (
          <Form>
            <div className={classes.formGroup}>
              <TextField
                id="firstName"
                label="First Name"
                className={classes.textField}
                error={errors.firstName}
                value={values.firstName}
                onChange={handleChange}
                onSubmit={handleSubmit}
                helperText={errors.firstName}
              />
              <TextField
                id="lastName"
                label="Last Name"
                className={classes.textField}
                error={errors.lastName}
                value={values.lastName}
                onChange={handleChange}
                onSubmit={handleSubmit}
                helperText={errors.lastName}
              />
            </div>
            <div className={classes.formGroup}>
              <TextField
                id="email"
                label="Email Address"
                className={classes.textField}
                error={errors.email}
                value={values.email}
                onChange={handleChange}
                onSubmit={handleSubmit}
                helperText={errors.email}
              />
            </div>
            <div className={classes.formGroup}>
              <TextField
                id="subject"
                label="Subject"
                className={classes.textField}
                error={errors.subject}
                value={values.subject}
                onChange={handleChange}
                onSubmit={handleSubmit}
                helperText={errors.subject}
              />
            </div>
            <div className={classes.formGroup}>
              <TextField
                id="message"
                label="Message"
                multiline
                rows="8"
                className={classes.textArea}
                error={errors.message}
                value={values.message}
                onChange={handleChange}
                onSubmit={handleSubmit}
                helperText={errors.message}
              />
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
}

export default withStyles(styles, { withTheme: true })(ContactForm)
