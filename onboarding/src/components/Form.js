import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';

export default function Form() {
    
    const [formState, setFormState] = useState ({
        name: '',
        email: '',
        password: '',
        termsOfService: '',
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
                    type = "text"
                    name = "email"
                />
            </label><br />

            <label htmlFor = "password">
                Password:
                <input 
                    id = "password"
                    type = "text"
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