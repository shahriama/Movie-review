import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3 col-lg-3' onClick = {()=>props.openPopup(movie.imdbID)}>
					<img src={movie.Poster} alt='movie'></img>
                    <div className='title'>
                        <h3>{movie.Title}</h3>
                    </div>
				</div>
			))}
		</>
	);
};

export default MovieList;