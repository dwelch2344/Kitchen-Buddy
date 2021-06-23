import React, { useState } from "react";
import Auth from '../../utils/auths';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    
    const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
        ...formState,
        [name]: value,
    });
};

  // submit form
    const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
        const { data } = await login({
        variables: { ...formState }
        });

        Auth.login(data.login.token);

        console.log(data);
    } catch(e) {
        console.error(e);
    }

    // clear form values
    setFormState({
        email: '',
        password: '',
    });
};

    return (
            <main className='flex-row justify-center mb-4'>
                <form>
                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        name='email'
                        id='email'
                        value={formState.email}
                        onChange={handleChange}
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
                        onChange={handleChange}
                        />
                    </div>


                    <button type="submit" className="btn btn-dark btn-lg btn-block">
                        Sign in
                    </button>
                    
                </form>
                {error && <div>Sign up failed</div>}
            </main>
        );
};


export default Login;