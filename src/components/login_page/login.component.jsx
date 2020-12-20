import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'

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
        background-color: #d3d3d3;
        background-color: white;
        border: 2px solid #d3d3d3;

        &:hover {
            background-color: #d3d3d3;
            border: 2px solid black;
        }

        &:disabled {
            border: 2px solid orange;
            cursor: not-allowed;
        }
    }
    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 0;
    }
    input {
        border: 1px solid #d3d3d3;
        text-align: center;
    }
`

const formSchema = Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required!'),
})

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' })
    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(() => {
        formSchema.isValid(form).then((valid) => {
            setButtonDisabled(!valid)
        })
    }, [form])

    const changeHandler = (e) => {
        const fields = { ...form, [e.target.name]: e.target.value }
        setForm(fields)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submitted', form)
        setForm({ username: '', password: '' })
    }
    return (
        <Wrapper>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">username</label>
                <input
                    type="username"
                    id="username"
                    name="username"
                    placeholder="username"
                    onChange={changeHandler}
                    minLength="5"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    minLength="8"
                    onChange={changeHandler}
                    required
                />
                <button type="submit" disabled={buttonDisabled}>
                    Sign In
                </button>
            </form>
        </Wrapper>
    )
}

export default Login
