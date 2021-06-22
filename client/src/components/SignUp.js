import React from "react";

const SignUp = () => {
    // functionality
    
        return (
            <main className='flex-row justify-center mb-4'>

                <form 
                // onSubmit={}
                >
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input 
                            type="username" 
                            className="form-control" 
                            placeholder="First name"
                            name='username'
                            id='username'
                            // value={formState.username}
                            />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        name='email'
                        id='email'
                        // value={formState.email}
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
                        // value={formState.password}
                        />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">
                        Register
                    </button>
                </form>
                {/* {error && <div>Sign Up Failed!</div>} */}
            </main>
        );
};

export default SignUp;