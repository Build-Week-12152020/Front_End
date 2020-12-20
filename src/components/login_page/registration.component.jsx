import React, { useState } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'

const Wrapper = styled.div`
    width: 50%;
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
    }
    button {
        margin: 15px 0;
        border: none;
    }
`

const Registration = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    })

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
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={changeHandler}
                />
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone Number"
                    onChange={changeHandler}
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
                <button type="submit">Register</button>
            </form>
        </Wrapper>
    )
}

export default Registration
