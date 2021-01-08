import React, { useState, useEffect } from 'react';
import { loadPlantlist } from "../actions";
import { initialState } from "../reducers/plantReducer";

import styled from 'styled-components';

import Skeleton from "react-loading-skeleton";
import PlantCard from "./plant_card.component";
import { connect } from 'react-redux';

const PlantPage = (props) => {

    const [currentPlants, setCurrentPlants] = useState(initialState.plantlist)
    // component level state calls action

    useEffect( () => {
        return setCurrentPlants(props.loadPlantlist());
    },[]);

    return (
    <section className="main_content">
        <div className="user_greeting">
    <h1>Hello {props.currentUser.username} !</h1>
        </div>
        {
        props.isLoadingPlants ? (
            <div className="plantlist_skeletons">
                <Skeleton>
                    <PlantCard />
                </Skeleton>
                <Skeleton>
                    <PlantCard />
                </Skeleton>
                <Skeleton>
                    <PlantCard />
                </Skeleton>
                <Skeleton>
                    <PlantCard />
                </Skeleton>
            </div>
        ) : props.error ? (
            <div className="error">
                <h3>{props.error}</h3>
            </div>
        ) : props.plantlist.length < 1 ? (
            <div className="nodata">
                <h3> No Plants Yet!</h3>
            </div>
        ) : props.plantlist.map( (plant) => {
            // console.log(plant.name)
            return (
                <PlantCard plant={plant} key={plant.id} />
            )
        })
    }</section>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoadingPlants: state.is_loading_plants,
        plantlist: state.plantlist,
        currentUser: state.current_user,
        error: state.error
    };
};


export default connect(mapStateToProps, { loadPlantlist })(PlantPage);