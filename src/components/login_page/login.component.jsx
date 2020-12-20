import React, { useState } from 'react';
import { connect } from "react-redux";
// import action here
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 50%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid red;
`

const Login = (props) => {

    // component level state
    const [loginCredentls, setLoginCredntls] = useState({
        username: "",
        password: ""
    });

    const handleChanges = (e) => {
        setLoginCredntls({...loginCredentls,
        [e.target.name]: e.target.value
        });
        console.log(loginCredentls)
    };

    const handleSubmit = (e) => {
        // prevent page reload
        e.preventDefault();
        // action from props/connect with loginCredentls passed as param
        props.loginToApp(loginCredentls);
        setLoginCredntls({
            username: "",
            password: ""
        });
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username
                    <input 
                        type="text"
                        id="username" 
                        name="username"
                        value={loginCredentls.username}
                        onChange={handleChanges} 
                        placeholder="PlantLover123" 
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input 
                        type="password"
                        id="password" 
                        name="password"
                        value={loginCredentls.password}
                        onChange={handleChanges} 
                        placeholder="**********" 
                    />
                </label>
                
                
                <button>Log In</button>
            </form>
        </Wrapper>
    );
};

export default connect( () => null, {})(Login);
