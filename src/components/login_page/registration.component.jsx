import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'

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

const formSchema = yup.object().shape({
    username: yup.string().required('Username is required!'),
    password: yup
        .string()
        .required(`Password is required! Must be 8 characters long!`),
    phone: yup.number().required(`Phone is required! Must be 10 digits long`),
})

const Registration = () => {
    const [form, setForm] = useState({
        username: '',
        phone: '',
        password: '',
    })

    useEffect(() => {
        formSchema.isValid(form).then((valid) => {
            setButtonDisabled(!valid)
        })
    }, [form])

    const [buttonDisabled, setButtonDisabled] = useState(true)

    const changeHandler = (e) => {
        const fields = {
            ...form,
            [e.target.name]: e.target.value,
        }
        setForm(fields)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log('submitted', form)
        setForm({
            id: Date.now(),
            username: '',
            phone: '',
            password: '',
        })
        console.log(form)
    }

    return (
        <Wrapper>
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="reg_username"
                    name="username"
                    placeholder="Name"
                    onChange={changeHandler}
                    value={form.name}
                    minLength="5"
                    required
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    maxLength="10"
                    placeholder="555-555-5555"
                    onChange={changeHandler}
                    value={form.phone}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="reg_password"
                    name="password"
                    placeholder="Password"
                    onChange={changeHandler}
                    value={form.password}
                    minLength="8"
                    required
                />

                <button type="submit" disabled={buttonDisabled}>
                    Register
                </button>
            </form>
        </Wrapper>
    )
}

export default Registration
