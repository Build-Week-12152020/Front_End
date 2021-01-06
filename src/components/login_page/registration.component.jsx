import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { connect } from "react-redux";
import { registerUser } from "../actions";
import styled from 'styled-components';
// import { initialState } from "../reducers/plantReducer";
import * as Yup from 'yup';

const Wrapper = styled.div`
    width: 50%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid blue;
`


const Registration = (props) => {
    
    // component level state
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        phone: ""
    });

    

    const handleChanges = (e) => {
        setNewUser({...newUser,
        [e.target.name]: e.target.value
        });
        console.log(newUser);
    };

    const handleSubmit = (e) => {
        // prevent default page reload

        e.preventDefault();
        // action from actions>index.js
        props.registerUser(newUser);
        setNewUser({
            username: "",
            password: "",
            phone: ""
        });
    };

    const redirect = (e) => {
        this.props.history.push('/plantlist')
    }

    const formSchema = Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        password: Yup.string().required('Password is required!'),
        })

    useEffect(() => {
                formSchema.isValid(newUser).then((valid) => {
                    setButtonDisabled(!valid)
                })
            }, [newUser])


    return (
    <Wrapper>{
        props.isLoadingRegister ? (
            <form>
                <Skeleton variant="text"/>
                <Skeleton variant="text"/>
                <Skeleton variant="text"/>
                <Skeleton variant="rect"/>
            </form>
        ) : props.error ? (
            <div className="error">{props.error}</div>
        ) :
        
            <form onSubmit={handleSubmit}>
                <header className="form-header">
                    <h4>
                        Sign Up
                    </h4>
                </header>
                <label htmlFor="username">
                    Username
                    <input 
                        id="username"
                        type="text" 
                        name="username" 
                        value={newUser.username}
                        onChange={handleChanges}
                        placeholder="Name" 
                    />
                </label>
                
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        type="password" 
                        name="password"
                        value={newUser.password}
                        onChange={handleChanges} 
                        placeholder="********" 
                    />
                </label>
                
                <label htmlFor="phone">
                    Mobile Number
                    <input
                        id="phone"
                        type="number"
                        name="phone"
                        value={newUser.phone}
                        onChange={handleChanges}
                        placeholder="(123) 456-7890"
                        />
                </label>
                <button disabled={buttonDisabled}>Register</button>
            </form>   
        
        
             
                // <Wrapper>
                //     <form onSubmit={handleSubmit}>
                //         <header className="form-header">
                //             <h4>
                //                 Sign Up
                //             </h4>
                //         </header>
                //         <label htmlFor="username">
                //             Username
                //             <input 
                //                 id="username"
                //                 type="text" 
                //                 name="name" 
                //                 value={newUser.username}
                //                 onChange={handleChanges}
                //                 placeholder="Name" 
                //             />
                //         </label>
                        
                //         <label htmlFor="password">
                //             Password
                //             <input
                //                 id="password"
                //                 type="password" 
                //                 name="password"
                //                 value={newUser.password}
                //                 onChange={handleChanges} 
                //                 placeholder="********" 
                //             />
                //         </label>
                        
                //         <label htmlFor="phone">
                //             Mobile Number
                //             <input
                //                 id="phone"
                //                 type="number"
                //                 name="phone"
                //                 value={newUser.phone}
                //                 onChange={handleChanges}
                //                 placeholder="(123) 456-7890"
                //                 />
                //         </label>
                //         <button>Register</button>
                //     </form>   
                // </Wrapper>
                
            
        
    }</Wrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        isLoadingRegister: state.is_loading_register,
        isRegister: state.isRegister,
        registerSuccess: state.register_success,
        error: state.error,
    }
}

export default connect( mapStateToProps, { registerUser })(Registration);



{/* <header className="form-header">
                <h4>
                    Sign Up
                </h4>
            </header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username
                    <input 
                        id="username"
                        type="text" 
                        name="name" 
                        value={newUser.username}
                        onChange={handleChanges}
                        placeholder="Name" 
                    />
                </label>
                
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        type="password" 
                        name="password"
                        value={newUser.password}
                        onChange={handleChanges} 
                        placeholder="********" 
                    />
                </label>
                
                <label htmlFor="phone">
                    Mobile Number
                    <input
                        id="phone"
                        type="number"
                        name="phone"
                        value={newUser.phone}
                        onChange={handleChanges}
                        placeholder="(123) 456-7890"
                        />
                </label>
                <button>Register</button>
            </form> */}