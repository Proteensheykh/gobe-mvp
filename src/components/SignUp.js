import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './style.css';

const SignUp = () => {
    const {register, handleSubmit, errors} = useForm();

    //meta data/config for post request
    const config = {
        headers: {'Content-Type': 'application/json'}
    };

    //Handles data submission and is passed as a callback to handleSubmit()
    const onSubmit = async (data) => {
        try {
            /**create a .env file at the app_root directory [>landing_page_mvp]
             * And store this > REACT_APP_API_URL = 'https://gobe-home.herokuapp.com'*/
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/frontend/api/users/`, data, config);
            console.log(res)
            window.location.replace("/welcome");
        }
        catch (err) {

        }
    }

    /**the 'Join us' button currently sits idle because I only 
     * implemented the javascript logic and routing. 
     * The 'Join us' button reveals the form*/
    return (
        <div className="container">
            
            {/* <button type="button" className="btn btn-outline-primary">Join Us</button> */}

            <form onSubmit={handleSubmit(onSubmit)}>
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
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
                    className="submit"
                />
            </form>
        </div>
    );
};

export default SignUp;