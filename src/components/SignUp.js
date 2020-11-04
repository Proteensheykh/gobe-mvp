import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './style.css';

const SignUp = () => {
    const {register, handleSubmit, errors} = useForm();
    const history = useHistory();

    const config = {
        headers: {'Content-Type': 'application/json'}
    };

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/frontend/api/users/`, data, config);
            console.log(res);
            
            history.push('/welcome')
        }
        catch (err) {

        }
    }

    const dropForm = () => {

        document.querySelector("#join-us").className="collapse";
        document.querySelector("#signUpForm").className="show";
    }

    return (
        <div className="container">
            
           <button type="button" className="button" id="join-us" onClick={dropForm}>Join Us</button>

            <form onSubmit={handleSubmit(onSubmit)} className="collapse" id="signUpForm">
                <input 
                    placeholder='First Name' 
                    className="input-box"
                    type='text' 
                    name='first_name'
                    ref={register({required: "Name field is required", pattern: /^[A-Za-z]+$/i})}
                />
                {errors.name && <p>{errors.name.message}</p>}
                <br/>

                <input placeholder='Email' 
                    className="input-box"
                    type='email' 
                    name='email'
                    ref={register({
                            required: "Email field is required", 
                            //RegEx email validation patterns
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })
                        }
                    required
                />
                {errors.email && <p>{errors.email.message}</p>}
                <br/>

                <div>
                <input
                    type='checkbox' 
                    name='confirmed'
                    className="confirmation-box__div"
                    ref={register}
                />
                <label className="confrimation-box" htmlFor='confirmed'>Susbcribe to our newsletter</label>
                </div>
                <br/>

                <input placeholder='Signup' 
                    type='submit' 
                    className="button"
                />
            </form>
        </div>
    );
};

export default SignUp;