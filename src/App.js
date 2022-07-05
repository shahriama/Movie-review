import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import Popup from './components/Popup';

const App = () => {
	const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [aboutValue,setaboutValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=dd60f0d4`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  }

  const openPopup = async(id) =>{
    const url = `http://www.omdbapi.com/?i=${id}&apikey=607e47e`
    const response = await fetch(url);
    const responseJson = await response.json();
    setaboutValue(responseJson)
  }

  const closePopup = () =>{
    setaboutValue('');
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);


	return (
		<div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
			<div className='row'>
				<MovieList movies={movies} openPopup={openPopup}/>
			</div>

      {(typeof aboutValue.Title!="undefined")? <Popup Selected={aboutValue} closePopup={closePopup} />: false}
		</div>
	);
};

export default App;