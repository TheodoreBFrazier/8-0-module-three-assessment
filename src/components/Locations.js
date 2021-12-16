import React from "react";
import "../App.css";

class Locations extends React.Component {
    constructor() {
        super()

        this.state = {
            returnedLocations: []
        }
    }

    fetchLocations = () => {
        fetch("https://ghibliapi.herokuapp.com/locations") //API call
            .then((res) => res.json())
            .then((data) => { //return JS array of objects
                this.setState({
                    returnedLocations: data //Set the data in state
                })
            })
    }

    componentDidMount = () => {
        this.fetchLocations()
    }

    render() {
        //test for data return 
        let mapThroughLocales = this.state.returnedLocations.map((location) => {
            return (
                <div>
                    <h2>List of Locations</h2>
                    <h1>Name: {location.name}</h1>
                    <h1>Climate: {location.climate}</h1>
                    <h1>Terrain: {location.terrain}</h1>
                </div>
            )

        })

        //Display the info

        return (
            <div>
                {mapThroughLocales}
            </div>
        )

    }

}

export default Locations;