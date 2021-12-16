import React from 'react';

class MovieSearch extends React.Component {
    constructor() {
        super();
    }

    render () {
        let movies = this.props.state.returnedMovies;
        let optionItems = movies.map((movie) =>
                <option key={movie.name}>{movie.name}</option>
            );

        return (
         <div>
             <select>
                {optionItems}
             </select>
         </div>
        )
    }
}

export default MovieSearch;