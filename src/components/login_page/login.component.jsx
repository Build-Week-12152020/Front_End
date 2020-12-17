import React from 'react'
import Wrapper from './login.styles'

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
