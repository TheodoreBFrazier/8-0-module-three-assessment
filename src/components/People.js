import React from "react";

class People extends React.Component {
    constructor() {
        super()

        this.state = {
            returnedPeople: []
        }
    }

    fetchPeopleInfo = () => {
        fetch("https://ghibliapi.herokuapp.com/people") //API call
            .then((res) => res.json())
            .then((data) => { //return JS array of objects
                this.setState({
                    returnedPeople: data //Set the data in state
                })
            })
    }

    componentDidMount = () => {
        this.fetchPeopleInfo()
    }


    render() {
        //test for data return 
        let mapThroughPeople = this.state.returnedPeople.map((eachPerson) => {
            return (
                <div>
                    <h1>Search for a Person</h1>
                <h1>Name: {eachPerson.name}</h1>

                </div>
            )

        })

        //Display the info

        return (
            <div>
                {mapThroughPeople}
            </div>
        )

    }
}

export default People 