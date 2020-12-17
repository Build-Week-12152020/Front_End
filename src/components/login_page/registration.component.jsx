import React from 'react'
import Wrapper from './registration.styles'

const Registration = () => {
    return (
        <Wrapper>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
                <button>Register</button>
            </form>
        </Wrapper>
    )
}

export default Registration
