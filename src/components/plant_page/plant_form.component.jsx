import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { connect } from "react-redux";
import { addPlant } from "../actions";
import styled from 'styled-components';
import * as Yup from 'yup';

const Wrapper = styled.div`
    color:#0e2923;
    width: 60%;
    margin: 0 auto;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-self:flex-start;
    form {
        display: flex;
        flex-direction: column;
        letter-spacing: 0.0375em;
    }
    button {
        align-self:flex-end;
        background-color: #0e2923;
        box-shadow: none;
        color: #fff;
        font-size: 0.7rem;
        height: 3.3rem;
        line-height: 3.3rem;
        border-radius: 0.325rem;
        letter-spacing: 0.175em;
        margin-top:1rem;
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

const PlantForm = (props) => {
    const [plantSearch, setPlantSearch] = useState({
        species: '',
        name: '',
        water_frequency: '',
    })

    let history = useHistory();

    const handleChanges = (e) => {
        setPlantSearch({ ...plantSearch, [e.target.name]: e.target.value })
        console.log(plantSearch)
    }

    const handleAdd = (e) => {
        e.preventDefault();

        props.addPlant(plantSearch, props.currentUser.id);
        history.push('/plantlist');
    };
    
    return (
        <Wrapper>
            <form onSubmit={handleAdd}>
                <header className="form-header">
    <h4>Add a Plant ! {props.currentUser.id}</h4>
                </header>
                <label htmlFor="name" />
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Custom Plant Name"
                    onChange={handleChanges}
                    value={plantSearch.name}
                />
                <label htmlFor="species" />
                <input
                    id="species"
                    type="text"
                    name="species"
                    placeholder="Plant Species"
                    onChange={handleChanges}
                    value={plantSearch.species}
                />
                <label htmlFor="water_frequency" onChange={handleChanges} />
                <input
                    id="water_frequency"
                    type="text"
                    name="water_frequency"
                    placeholder="Watering Frequency"
                    onChange={handleChanges}
                    value={plantSearch.water_frequency}
                />
                <button > Add </button>
            </form>
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        addPlantLoad: state.add_plant_loading,
        addPlantError: state.add_plant_error,
        addPlantSuccess: state.add_plant_success,
        currentUser: state.current_user,
        error: state.error
    }
}

export default connect(mapStateToProps, { addPlant })(PlantForm);