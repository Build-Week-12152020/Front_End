import React, { useState } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid blue;
`

const Registration = () => {
    // component level state
    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        phone: ""
    });

    const handleChanges = (e) => {
        setNewUser({...newUser,
        [e.target.name]: e.target.value
        });
        console.log(newUser);
    }

    const handleSubmit = (e) => {
        // prevent default page reload
        e.preventDefault();
        // action from actions>index.js
        setNewUser({
            username: "",
            password: "",
            phone: ""
        });
    };

    return (
        <Wrapper>
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
            </form>
        </Wrapper>
    )
}

export default Registration
