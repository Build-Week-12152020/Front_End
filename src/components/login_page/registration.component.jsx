import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { connect } from "react-redux";
import { registerUser } from "../actions";
import styled from 'styled-components';
import * as Yup from 'yup';

const Wrapper = styled.div`
color:#0e2923;
width: 40%;
padding: 25px;
display: flex;
flex-direction: column;
justify-content: space-around;
form {
    display: flex;
    flex-direction: column;
    letter-spacing: 0.0375em;
}
button {
    background-color: #0e2923;
    box-shadow: none;
    color: #fff;
    font-size: 0.7rem;
    height: 3.3rem;
    line-height: 3.3rem;
    border-radius: 0.325rem;
    letter-spacing: 0.175em;
    padding: 0 2rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    font-family: "Raleway", Helvetica, sans-serif;
    &:hover {
        background-color: #fff;
        color:#000;
    }
    &:disabled {
        border: 2px solid red;
        cursor: not-allowed;
    }
}
label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.0375em;
    line-height: 2;
}
input {
padding-left: 5%;
height: 3rem;
border-radius: 0.325rem;
border: solid 2px rgba(144, 144, 144, 0.25);
display: block;
outline: 0;
text-decoration: none;
width: 100%;
font-family: "Source Sans Pro", Helvetica, sans-serif;
font-size: 1rem;
font-weight: 300;
letter-spacing: 0.0375em;
line-height: 2;
&::placeholder{
    opacity:75%;
    }
h4{
    font-size:2rem;
    margin-bottom: 0px;
    text-transform: uppercase;
}
`


const Registration = (props) => {
    
    // component level state
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        phone: ""
    });

    let history = useHistory();
    

    const handleChanges = (e) => {
        setNewUser({...newUser,
        [e.target.name]: e.target.value
        });
        console.log(newUser);
    };

    const handleSubmit = (e) => {
        // prevent default page reload

        e.preventDefault();
        // action from actions>index.js
        props.registerUser(newUser);
        setNewUser({
            username: "",
            password: "",
            phone: ""
        });
        history.push('/plantlist')
    };


    const formSchema = Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        password: Yup.string().required('Password is required!'),
    })

    useEffect(() => {
        formSchema.isValid(newUser).then((valid) => {
            setButtonDisabled(!valid)
        })
    }, [newUser, formSchema])

    return (
        <Wrapper>
            {
                props.isLoadingRegister ? (
                    <form>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="rect" />
                    </form>
                ) : props.error ? (
                    <div className="error">{props.error}</div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <header className="form-header">
                            <h4>Sign Up</h4>
                            <hr/>
                        </header>
                        <label htmlFor="username">
                            Username
                            <input
                                id="username"
                                type="text"
                                name="username"
                                value={newUser.username}
                                onChange={handleChanges}
                                placeholder="Name"
                            />
                        </label>

                        <label htmlFor="password">
                            Password
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={newUser.password}
                                onChange={handleChanges}
                                placeholder="********"
                            />
                        </label>

                        <label htmlFor="phone">
                            Mobile Number
                            <input
                                id="phone"
                                type="number"
                                name="phone"
                                value={newUser.phone}
                                onChange={handleChanges}
                                placeholder="(123) 456-7890"
                            />
                        </label>
                        <button disabled={buttonDisabled}>Register</button>
                    </form>
                )

                // <Wrapper>
                //     <form onSubmit={handleSubmit}>
                //         <header className="form-header">
                //             <h4>
                //                 Sign Up
                //             </h4>
                //         </header>
                //         <label htmlFor="username">
                //             Username
                //             <input 
                //                 id="username"
                //                 type="text" 
                //                 name="name" 
                //                 value={newUser.username}
                //                 onChange={handleChanges}
                //                 placeholder="Name" 
                //             />
                //         </label>
                        
                //         <label htmlFor="password">
                //             Password
                //             <input
                //                 id="password"
                //                 type="password" 
                //                 name="password"
                //                 value={newUser.password}
                //                 onChange={handleChanges} 
                //                 placeholder="********" 
                //             />
                //         </label>
                        
                //         <label htmlFor="phone">
                //             Mobile Number
                //             <input
                //                 id="phone"
                //                 type="number"
                //                 name="phone"
                //                 value={newUser.phone}
                //                 onChange={handleChanges}
                //                 placeholder="(123) 456-7890"
                //                 />
                //         </label>
                //         <button>Register</button>
                //     </form>   
                // </Wrapper>
                
            
        
    }</Wrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        isLoadingRegister: state.is_loading_register,
        registerSuccess: state.register_success,
        error: state.error,
    }
}

export default connect( mapStateToProps, { registerUser })(Registration);



/* <header className="form-header">
                <h4>
                    Sign Up
                </h4>
            </header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username
                    <input 
                        id="username"
                        type="text" 
                        name="name" 
                        value={newUser.username}
                        onChange={handleChanges}
                        placeholder="Name" 
                    />
                </label>
                
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        type="password" 
                        name="password"
                        value={newUser.password}
                        onChange={handleChanges} 
                        placeholder="********" 
                    />
                </label>
                
                <label htmlFor="phone">
                    Mobile Number
                    <input
                        id="phone"
                        type="number"
                        name="phone"
                        value={newUser.phone}
                        onChange={handleChanges}
                        placeholder="(123) 456-7890"
                        />
                </label>
                <button>Register</button>
            </form> */
