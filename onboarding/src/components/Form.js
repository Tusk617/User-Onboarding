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
        terms: '',
    })

    return (
        <form>
            <label htmlFor = "name">
                Name:
                <input 
                    id = "name"
                    type = "text"
                    name = "name"
                />
            </label><br />

            <label htmlFor = "email">
                Email:
                <input 
                    id = "email"
                    type = "email"
                    name = "email"
                />
            </label><br />

            <label htmlFor = "password">
                Password:
                <input 
                    id = "password"
                    type = "password"
                    name = "password"
                />
            </label><br />

            <label htmlFor = "terms">
                <input 
                    id = "terms"
                    type = "checkbox"
                    name = "terms"
                />
                Terms and Conditions
            </label><br />

            <button>Submit</button>
        </form>
    )
}