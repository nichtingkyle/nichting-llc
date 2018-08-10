import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import ContactForm from '../../components/contact-form/contact-form'

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
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        render={ContactForm}
      />
    </div>
  )
}

export default ContactView
