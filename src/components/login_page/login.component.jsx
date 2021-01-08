import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginToApp } from '../actions'
import styled from 'styled-components'
import * as Yup from 'yup'
import Skeleton from 'react-loading-skeleton'

const Wrapper = styled.div`
    color:#0e2923;
    width: 40%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self:flex-start;
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

const Login = (props) => {
    // component level state
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [loginCredentls, setLoginCredntls] = useState({
        username: "",
        password: ""
    });

    let history = useHistory();


    const handleChanges = (e) => {
        setLoginCredntls({ ...loginCredentls, [e.target.name]: e.target.value })
        console.log(loginCredentls)
    }

    const handleSubmit = (e) => {
        // prevent page reload
        e.preventDefault()
        // action from props/connect with loginCredentls passed as param
        props.loginToApp(loginCredentls)
        setLoginCredntls({
            username: '',
            password: '',
        })
        history.push('/plantlist')
    }

    const formSchema = Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        password: Yup.string().required('Password is required!'),
    })

    useEffect(() => {
        formSchema.isValid(loginCredentls).then((valid) => {
            setButtonDisabled(!valid)
        })
    }, [loginCredentls, formSchema])

    return (
        <Wrapper>
            {props.isLoadingLogin ? (
                <form>
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                </form>
            ) : props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <header className="form-header">
                        <h4>Login</h4>
                        <hr/>
                    </header>
                    <label htmlFor="username">
                        Username
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={loginCredentls.username}
                            onChange={handleChanges}
                            placeholder="PlantLover123"
                            minLength="5"
                            required
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
                            minLength="8"
                            required
                        />
                    </label>
                    <button type="submit" disabled={buttonDisabled}>
                        Log In
                    </button>
                </form>
            )}
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoadingLogin: state.is_loading_login,

        loginSuccess: state.login_success,
        error: state.error,
    }
}

export default connect(mapStateToProps, { loginToApp })(Login)

// const Wrapper = styled.div`
// width: 50%;
// padding: 25px;
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// form {
//     display: flex;
//     flex-direction: column;
// }
// button {
//     margin: 15px 0;
//     border: none;
//     background-color: #d3d3d3;
//     background-color: white;
//     border: 2px solid #d3d3d3;
//     &:hover {
//         background-color: #d3d3d3;
//         border: 2px solid black;
//     }
//     &:disabled {
//         border: 2px solid orange;
//         cursor: not-allowed;
//     }
// }
// label {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 10px 0;
// }
// input {
//     border: 1px solid #d3d3d3;
//     text-align: center;
// }
// `

// const formSchema = Yup.object().shape({
// username: Yup.string().required('Username is required!'),
// password: Yup.string().required('Password is required!'),
// })

// const Login = () => {
// const [form, setForm] = useState({ username: '', password: '' })
// const [buttonDisabled, setButtonDisabled] = useState(true)

// useEffect(() => {
//     formSchema.isValid(form).then((valid) => {
//         setButtonDisabled(!valid)
//     })
// }, [form])
