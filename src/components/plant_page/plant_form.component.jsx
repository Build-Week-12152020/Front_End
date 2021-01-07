import React, { useState } from 'react'

const PlantForm = () => {
    const [plantSearch, setPlantSearch] = useState({
        name: '',
        species: '',
        water_frequency: '',
    })
    const handleChanges = (e) => {
        setPlantSearch({ ...plantSearch, [e.target.name]: e.target.value })
        console.log(plantSearch)
    }
    return (
        <>
            <form>
                <header className="form-header">
                    <h4>Search for Plants</h4>
                </header>
                <label htmlFor="name" />
                <input
                    id="name"
                    type="text"
                    placeholder="Custom Plant Name"
                    onChange={handleChanges}
                />
                <label htmlFor="species" />
                <input
                    id="species"
                    type="text"
                    placeholder="Plant Species"
                    onChange={handleChanges}
                />
                <label htmlFor="water_frequency" onChange={handleChanges} />
                <input
                    id="water_frequency"
                    type="text"
                    placeholder="Watering Frequency"
                    onChange={handleChanges}
                />
                <button onClick={}></button>
            </form>
        </>
    )
}
