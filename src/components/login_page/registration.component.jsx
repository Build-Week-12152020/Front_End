import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 50%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid blue;
`

const Registration = () => {
    return (
        <Wrapper>
            <form>
                <label htmlFor="username">
                    Name
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                    />
                </label>
                
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
                <label htmlFor="phone">
                    Mobile Number
                    <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={loginCredentls.phone}
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
