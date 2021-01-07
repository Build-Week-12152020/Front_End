import React from 'react';

const PlantCard = (props) => {
    

    return (
        <div className="plant_card">
            <header className="plant_name">
    <h3>{props.name}</h3>
            </header>
            <div className="plant_info">
    <h4 className="plant_species">{props.species}</h4>
    <h4 className="h2o_freq">{props.water_frequency}</h4>
            </div>

        </div>
    )
};

export default PlantCard;