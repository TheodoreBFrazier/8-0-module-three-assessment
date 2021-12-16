import React from "react";

class People extends React.Component {
    constructor() {
        super()

        this.state = {
            returnedPeople: [],
            searchTerm: "", //to search
            selectedPerson: []
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSearch = () => {
        this.fetchPeopleInfo(this.state.searchTerm)
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

    //handlechange for submit 

    render() {
        //test for data return 
        return (
            <div>
                <h1>Search for a Person</h1>
                    <form>
                        <input
                            id="people-search"
                            type="text"
                            placeholder="Search for a person"
                            onChange={event => this.handleChange(event)} //we use state vs props because we are internally in component
                            value = {this.state.searchTerm} //set the input
                        />
                        <button onClick={this.handleSearch}>Submit</button>

                    </form>



            </div>
        )



    }
}

export default People 