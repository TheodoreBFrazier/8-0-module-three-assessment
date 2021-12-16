import React from "react";

class People extends React.Component {
    constructor() {
        super()

        this.state = {
            returnedPeople: [],
            searchTerm: "", //to search
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

    //handlechange for submit 

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.fetchPeopleInfo();
    };


    render() {
        //test for data return 
        return (
            <div>
                <h1>Search for a Person</h1>
                <div id="form-container" onSubmit = {this.state.handleSubmit}> 
                    <form>
                        <input
                            id="people-search"
                            type="text"
                            placeholder="Search for a person"
                            onChange={this.state.handleChange} //we use state vs props because we are internally in component
                        />
                        <button type="submit" id="submit-button" value="search">Submit</button>

                    </form>
                </div>

            </div>
        )



    }
}

export default People 