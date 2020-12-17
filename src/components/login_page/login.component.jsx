import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 50%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid red;
`

const Login = () => {
    return (
        <Wrapper>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
                <button>Sign In</button>
            </form>
        </Wrapper>
    )
}

export default Login
