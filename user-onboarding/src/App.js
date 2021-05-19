import './App.css';
import React, { useState } from 'react';

import Form from './components/Form';

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

  return (
    <div className="App">
      <Form values={formValues}/>
    </div>
  );
}

export default App;
