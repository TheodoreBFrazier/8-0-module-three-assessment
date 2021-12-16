import React from "react"

class Movies extends React.Component {
    constructor() {
        super()

        this.state = {
            returnedMovies: [],
            eachMovie: {},
            movieSelect: ""
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


    handleSubmit = (event) => {
        event.preventDefault()
    }

    componentDidMount = () => {
        this.fetchMovieInfo()
    }



    render() {
        //test for data return 
        let mapThroughMovies = this.state.returnedMovies.map((eachMovie) => {
            return <option value={eachMovie.title}> {eachMovie.title} </option>
        })
        return (
            <div className="movies">
                <h1>Select a Movie</h1>
                <form onsubmit = {this.handleSubmit}>
                    <select>
                        {mapThroughMovies}
                    </select>
                </form>
                
            </div>
        )

    }
}



export default Movies