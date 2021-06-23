import React, { useState } from "react";

import Auth from '../../utils/auths';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import './signup.css'

const SignUp = () => {
    // functionality
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form (notice the async!)
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // use try/catch instead of promises to handle errors
        try {
            //execute addUser mutation and pass in variable data from form
            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
            console.log(data);

        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="form-container">

            <form
                onSubmit={handleFormSubmit}
            >
                <h3>Register</h3>

                {/* <div className="form-group">
                        <label>First name</label>
                        <input 
                            type="username" 
                            className="form-control" 
                            placeholder="First name"
                            name='username'
                            id='username'
                            value={formState.username}
                            />
                    </div> */}

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name='email'
                        id='email'
                        value={formState.email}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name='password'
                        id='password'
                        value={formState.password}
                    />
                </div>

                <button type="submit" className="btn">
                    Register
                </button>
            </form>
            {error && <div>Sign Up Failed!</div>}
        </main>
    );
};

export default SignUp;