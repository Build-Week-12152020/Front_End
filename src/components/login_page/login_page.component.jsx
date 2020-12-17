import React from 'react'
import Wrapper from './login_page.component'

import Login from './login.component'
import Registration from './registration.component'

import './login_page.styles'

const LoginPage = () => (
    <Wrapper>
        <Login />
        <Registration />
    </Wrapper>
)

export default LoginPage
