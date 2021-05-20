import './App.css';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

import Form from './components/Form';
import schema from './validation/Schema';
import UserList from './components/UserList';


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
  const [disabled, setDisabled] = useState(true);
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

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

  const postNewUser = user => {
    axios
      .post('https://reqres.in/api/users', user)
      .then(res => {
        setUsers([...users, res.data])
        console.log(users);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialValues);
      })
  } 

  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    postNewUser(newUser);
  }

  return (
    <div className="App">
      <Form
        values={formValues}
        errors={errors}
        updateValues={inputChange}
        submit={submitForm}
        disabled={disabled}
      />
      <UserList users={users} />
    </div>
  );
}

export default App;
