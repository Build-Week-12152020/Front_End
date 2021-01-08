import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { passDataToForm } from "../actions";

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
        
        <div className="plant_card">
            <header className="plant_name">
                <h3>{plantinfo.name}</h3>
            </header>
            <div className="plant_info">
                <h4 className="plant_species">{plantinfo.species}</h4>
                <h4 className="h2o_freq">{plantinfo.water_frequency}</h4>
            </div>

            <button onClick={passToForm}>Edit</button>

        </div>
    )
};

export default connect(null, { passDataToForm })(PlantCard);