import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';


const formSchema = yup.object().shape({
    name: yup.string().required("Please enter your name!"),
    email: yup.string().email().required("Please include and email so we can contact you!"),
    password: yup.string().required("If you don't include a password, you can't log in!"),
    terms: yup.boolean().oneOf([true], "Please agree to the terms of use")
})

export default function Form() {
    
    const [formState, setFormState] = useState ({
        name: '',
        email: '',
        password: '',
        terms: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        terms: ''
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [post, setPost] = useState([]);

    const validation = event => {
        yup.reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then(valid => {
            setErrors({
                ...errors, [event.target.name]: ""
            });
        })
        .catch(err => {
            setErrors({
                ...errors, [event.target.name]: err.errors[0]
            })
        })
    }

    const inputChange = event => {
        event.persist();
        const newFormData = {
            ...formState, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        }
        validation(event);
        setFormState(newFormData);
    }

    const submitForm = event => {
        event.preventDefault();
        axios.post('https://reqres.in/')
        .then(response => {
            setPost(response.data);
            console.log("success!", post)
        })
    }

    return (
        <form>
            <label htmlFor = "name">
                Name:
                <input 
                    id = "name"
                    type = "text"
                    name = "name"
                    value = {formState.name}
                    onChange = {inputChange}
                />
                {errors.name.length > 0 ? (<p className="error">{errors.name}</p>) : null}
            </label><br />

            <label htmlFor = "email">
                Email:
                <input 
                    id = "email"
                    type = "email"
                    name = "email"
                    value = {formState.email}
                    onChange = {inputChange}
                />
                {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}
            </label><br />

            <label htmlFor = "password">
                Password:
                <input 
                    id = "password"
                    type = "password"
                    name = "password"
                    value = {formState.password}
                    onChange = {inputChange}
                />
                {errors.password.length > 0 ? (<p className="error">{errors.password}</p>) : null}
            </label><br />

            <label htmlFor = "terms">
                <input 
                    id = "terms"
                    type = "checkbox"
                    name = "terms"
                    checked = {formState.terms}
                    onChange = {inputChange}
                />
                Terms and Conditions
            </label><br />

            <button>Submit</button>
        </form>
    )
}