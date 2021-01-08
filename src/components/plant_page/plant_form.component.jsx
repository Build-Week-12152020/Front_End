import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { connect } from "react-redux";
import { addPlant } from "../actions";
import styled from 'styled-components';
import * as Yup from 'yup';


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
        <>
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
        </>
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