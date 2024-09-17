import * as yup from 'yup';

let schema = yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters')
        .max(37, 'Name must be shorter than 37 characters'),
    email: yup.string()
        .required('email is required')
        .email('Must be a valid email'),
    password: yup.string()
        .required('password is required')
        .min(8, 'Password must be at least 8 characters'),
    terms: yup.boolean()
        .required('You must agree to the terms of service')
});

export default schema;