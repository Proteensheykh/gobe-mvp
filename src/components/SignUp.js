import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './SignUp.css';

const SignUp = () => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const config = {
        headers: { 'Content-Type': 'application/json' }
    };

    const onSubmit = async (data) => {
        console.log(data);
            await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/users/subscribe/`, data, config)
            // await axios.post(`http://127.0.0.1:8000/api/v1/users/subscribe/`, data, config)
                .then((res)=>{
                    console.log(res)
                    history.push('/welcome')
             })
             .catch(err=>console.log(err.response.data.message))
    }

    const dropForm = () => {

        document.querySelector("#join-us").className = "collapse";
        document.querySelector("#signUpForm").className = "show";
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
                    ref={register({ required: "Name field is required", pattern: /^[A-Za-z]+$/i })}
                />
                {errors.first_name && <div><p className="error-message">Only first name required</p></div>}

                <div>
                </div>
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
                <div>
                <p className="error-message" id="emailError"></p>
                </div>
                <br />

                <div>
                    <input
                        type='checkbox'
                        name='confirmed'
                        required
                        className="confirmation-box__div"
                        ref={register}
                    />
                    <label className="confrimation-box" htmlFor='confirmed'>Susbcribe to our newsletter</label>
                </div>
                <input placeholder='Signup'
                    type='submit'
                    className="button"
                />
            </form>
        </div>
    );
};

export default SignUp;