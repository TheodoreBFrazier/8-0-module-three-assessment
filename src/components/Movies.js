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
            return <option value={eachMovie.title}> {eachMovie.title} </option>
        })
        return (
            <div>
                <h1>Select A Movie</h1>
                <form>
                    <select>
                        {mapThroughMovies}
                    </select>
                </form>
            </div>
        )

    }
}



export default Movies