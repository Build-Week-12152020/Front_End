import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 50%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    form {
        display: flex;
        flex-direction: column;
    }
    button {
        margin: 15px 0;
        border: none;
    }
`

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' })

    const changeHandler = (e) => {
        const fields = { ...form, [e.target.name]: e.target.value }
        setForm(fields)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submitted', form)
    }
    return (
        <Wrapper>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    onChange={changeHandler}
                    required
                />
                <button type="submit">Sign In</button>
            </form>
        </Wrapper>
    )
}

export default Login
