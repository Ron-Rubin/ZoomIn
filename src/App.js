import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "@/components/MovieList/MovieList";
import MovieDetails from "@/components/MovieDetails/MovieDetails";

function App() {

  const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);
  /*----  Setting the image Url selection  ----*/
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };  

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
    setImageUrl(`../../images/img01Ep0${movie.episode_id}.jpg`);              /* --Changing the image for each movie-- */
  }

  return (
  <div className="mainView">
    <div className="App" style={{backgroundImage: `url(${imageUrl})`}} />     {/* --Background blur image for selected movie-- */}
    <div  className="mainImg" style={{backgroundImage: `url(${imageUrl})`}}>  {/* --Main image for selected movie-- */}
      <div className="wrapper" />
      <MovieDetails 
        movie={selectedMovie}
        onFavoriteToggle={handleFavorite} //error #1
        favorites={favorites}
      />
      <MovieList 
      onMovieSelect={handleMovieSelect} 
      />
    </div>
</div>
  );
}

export default App;
