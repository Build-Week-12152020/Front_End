import React from 'react';
import { withRouter } from 'react-router-dom';
import axiosWithAuth from "./utils/axiosWithAuth";
import { addPlant } from "./actions/index";

class AddPlant extends React.Component {
    state = {
        plantData: {
            species: '',
            name: '',
            water_frequency: '',
        }
    };

    handleChange = e => {
        this.setState({
            plantData: {
                ...this.state.plantData,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.plantData)
    };

    addPlant = e => {
        e.preventDefault();

        addPlant(this.state.plantData)
    };

    render() {
        return (
            <div className="form">
                <form onSubmit={this.addPlant}>
                    <header>
                        <h2> Add A Plant</h2>
                    </header>
                    <label htmlFor="name" className="name">
                        Name
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.plantData.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="species">
                        Species
                        <input
                            type="text"
                            id="species"
                            name="species"
                            value={this.state.plantData.species}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="water_frequency">
                        How Much Water?
                        <input
                            type="text"
                            id="water_frequency"
                            name="water_frequency"
                            value={this.state.plantData.water_frequency}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button> Add Plant</button>
                </form>
            </div>
        );
    }
};

export default withRouter(AddPlant);