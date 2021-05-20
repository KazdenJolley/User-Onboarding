import '../App.css';
import React from 'react';

export default function Form(props) {
    const { values, updateValues, submit, errors, disabled } = props

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        updateValues([name], type === 'checkbox' ? checked : value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit()
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <label>
                    Name: <input
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Email: <input
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Password: <input
                        type='text'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Terms of Service: <input
                        type='checkbox'
                        name='terms'
                        value={values.terms}
                        onChange={onChange}
                    />
                </label>
                <button disabled={disabled}>Submit</button>
            </form>
            <div>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
        </div>
    )
}