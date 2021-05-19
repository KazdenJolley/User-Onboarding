import '../App.css';
import React from 'react';

export default function Form(props) {
    const { values } = props

    const onChange = () => {

    }

    const onSubmit = () => {

    }

    return (
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
            <button>Submit</button>
        </form>
    )
}