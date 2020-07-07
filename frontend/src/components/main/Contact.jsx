import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../store/contact/actions';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../shared/Error';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Must be grater then two characters')
    .max(255, 'Must be shorter then 255 characters ')
    .required('הכנס שם מלא'),
  email: Yup.string()
    .email('Must be a valid email address')
    .required('הכנס אימייל'),
  age: Yup.number().required('הכנס את גילך'),
  phone: Yup.string()
    .matches(phoneRegExp, 'נא הכנס מספר טלפון תקין')
    .required('הכנס מספר טלפון')
});

class Contact extends React.Component {
  state = { success: false, name: '' };

  onBack = () => this.setState({ success: false });

  onSuccess = (name) => this.setState({ success: true, name });

  render() {
    const { success, name } = this.state;
    return (
      <div className='contact'>
        <div className='contact-header'>
          <h2>השאירו פרטים ונחזור אליכם</h2>
        </div>
        {success ? (
          <div className='success-msg'>
            <h3>
              תודה <span>{name}</span>
            </h3>
            <p>נציגנו יחזור אליך בהקדם</p>
            <button onClick={this.onBack} className='btn'>
              אישור
            </button>
          </div>
        ) : (
          <Formik
            initialValues={{ fullName: '', age: '', phone: '', email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const { fullName, age, phone, email } = values;
              setSubmitting(true);
              const newContact = {
                fullName,
                age,
                phone,
                email
              };
              this.props.addContact(newContact);
              this.onSuccess(fullName);
              resetForm();
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <form onSubmit={handleSubmit}>
                <div className='contact-form'>
                  <div>
                    <input
                      type='text'
                      placeholder='שם מלא'
                      name='fullName'
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.fullName && errors.fullName ? 'has-error' : null
                      }
                    />
                    <Error
                      touched={touched.fullName}
                      message={errors.fullName}
                    />
                  </div>
                  <div>
                    <input
                      type='number'
                      placeholder='גיל'
                      name='age'
                      value={values.age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.age && errors.age ? 'has-error' : null}
                    />
                    <Error touched={touched.age} message={errors.age} />
                  </div>
                  <div>
                    <input
                      type='tel'
                      placeholder='טלפון'
                      name='phone'
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.phone && errors.phone ? 'has-error' : null
                      }
                    />
                    <Error touched={touched.phone} message={errors.phone} />
                  </div>
                  <div>
                    <input
                      type='text'
                      placeholder='אימייל'
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.email && errors.email ? 'has-error' : null
                      }
                    />
                    <Error touched={touched.email} message={errors.email} />
                  </div>
                </div>
                <button className='btn' disabled={isSubmitting} type='submit'>
                  שלח
                </button>
              </form>
            )}
          </Formik>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  addContact
};

export default connect(null, mapDispatchToProps)(Contact);
