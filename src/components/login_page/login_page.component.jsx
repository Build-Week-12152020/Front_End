import React from 'react'
import styled from 'styled-components'

import Login from './login.component'
import Registration from './registration.component'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid black;
`

const LoginPage = () => (
    <Wrapper>
        <Login />
        <Registration />
    </Wrapper>
)

export default LoginPage
