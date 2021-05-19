import './App.css';
import React, { useState } from 'react';
import * as yup from 'yup';

import Form from './components/Form';
import schema from './validation/Schema';


const initialValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

function App() {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setErrors({
          ...errors,
          [name]: ''
        })
      })
      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        })
      })
  }

  const inputChange = (name, value) => {
    validate(name, value);

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitForm = () => {

  }

  return (
    <div className="App">
      <Form values={formValues} errors={errors} updateValues={inputChange} submit={submitForm} />
    </div>
  );
}

export default App;
