import React from 'react'
import ContactForm from '../../components/contact-form/contact-form'

const ContactView = props => {
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
      <ContactForm />
    </div>
  )
}

export default ContactView
