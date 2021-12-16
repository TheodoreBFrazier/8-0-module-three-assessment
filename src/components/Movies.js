import React from "react"

class Movies extends React.Component {
    constructor() {
        super()

        this.state = {
            returnedMovies: []
        }
    }

    fetchMovieInfo = () => {
        fetch("https://ghibliapi.herokuapp.com/films") //API call
            .then((res) => res.json())
            .then((data) => { //return JS array of objects
                this.setState({
                    returnedMovies: data //Set the data in state
                })
            })
    }

    componentDidMount = () => {
        this.fetchMovieInfo()
    }

    render() {
        //test for data return 
        let mapThroughMovies = this.state.returnedMovies.map((eachMovie) => {
            return (
                <div>
                    <h1>Select A Movie</h1>
                    <h1>Name: {eachMovie.title}</h1>
                </div>
            )

        })

        //Display the info

        return (
            <div>
                {mapThroughMovies}
            </div>
        )

    }
}

export default Movies