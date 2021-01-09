import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { passDataToForm } from "../actions";
import styled from 'styled-components';

const Wrapper= styled.div`
min-width: 23%;
flex-basis: 33%;
align-content:  flex-start;
justify-content: space-evenly;
margin: 1rem;
h3{
    background-color:black;
    padding: 1rem;
    color: white;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    margin-bottom:0px;
}
.plant_info{
    border: 1px black solid;
    margin-top: 0px;
}
button {
        background-color: #0e2923;
        box-shadow: none;
        color: #fff;
        font-size: 0.7rem;
        height: 2.3rem;
        line-height: 2.3rem;
        border-radius: 0.325rem;
        letter-spacing: 0.175em;
        margin:0.5rem;
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

`


const PlantCard = (props) => {
    console.log(props)

    const history = useHistory();

    const plantinfo = {
        name: props.plant.name,
        species: props.plant.species,
        water_frequency: props.plant.water_frequency,
        id: props.plant.id
    }

    const passToForm = (e) => {
        e.preventDefault();
       props.passDataToForm(plantinfo);
        history.push('/update');

    } 



    return (
        <Wrapper>
        <div className="plant_card">
            <header className="plant_name">
                <h3>{plantinfo.name}</h3>
            </header>
            <div className="plant_info">
                <h4 className="plant_species">{plantinfo.species}</h4>
                <h4 className="h2o_freq">{plantinfo.water_frequency}</h4>
            <button onClick={passToForm}>Edit</button>
</div>
        </div>
        </Wrapper>
    )
};

export default connect(null, { passDataToForm })(PlantCard);