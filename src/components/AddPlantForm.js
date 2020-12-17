import React from 'react';
import { withRouter } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";

class AddPlant extends React.Component {
    state = {
        plantData: {
            nickname: '',
            species: '',
            h20Freq: '',
        }
    };

    handleChange = e => {
        this.setState({
            plantData: {
                ...this.state.plantData,
                [e.target.name]: e.target.value
            }
        });
    };

    addPlant = e => {
        e.preventDefault();

        axiosWithAuth()
            .post("http://apihere", this.state.plantData)
            .then((res) => {
                console.log(`WaterMyPlants: AddPlantForm.js: addPlant(): res:`, res)
                this.props.history.push('/plantlist')
            })
            .catch((err) => {
                console.error(err.response)
            })
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
                            value={this.state.plantData.nickname}
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
                    <label htmlFor="h20">
                        How Much Water?
                        <input
                            type="text"
                            id="h20"
                            name="h20"
                            value={this.state.plantData.h20Freq}
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