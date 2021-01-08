import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { connect } from "react-redux";
import { updatePlant, deletePlant } from "../actions";
import styled from 'styled-components';
import * as Yup from 'yup';


const UpdatePlant = (props) => {
    const [plantSearch, setPlantSearch] = useState({
        species: props.plantIsEditing.species,
        name: props.plantIsEditing.name,
        water_frequency: props.plantIsEditing.water_frequency,
    })

    const history = useHistory();

    const handleChanges = (e) => {
        setPlantSearch({ ...plantSearch, [e.target.name]: e.target.value })
        console.log(plantSearch)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.updatePlant(plantSearch, props.plantIsEditing.id);
        history.push('/plantlist');
    };


    const handleDelete = (e) => {
        e.preventDefault();

        props.deletePlant(props.plantIsEditing.id);
        history.push('/plantlist')
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <header className="form-header">
    <h4>Edit your {props.plantIsEditing.species} ! </h4>
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
                <button > Update </button>
            </form>
            <form onSubmit={handleDelete}>
                <button>Delete Plant</button>
            </form>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        updatePlantLoad: state.update_plant_loading,
        updatePlantError: state.update_plant_error,
        updatePlantSuccess: state.update_plant_success,
        isEditing: state.is_editing,
        plantIsEditing: state.plant_isediting,
        currentUser: state.current_user,
        error: state.error
    }
}

export default connect(mapStateToProps, { updatePlant, deletePlant  })(UpdatePlant);