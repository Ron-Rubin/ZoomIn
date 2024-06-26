import React from "react";
import "./MovieDetails.css";

function MovieDetails({ movie, onFavoriteToggle, favorites }) {

  if (!movie) return null;


  /*----  Handaling info button  ----*/
  function infoButton() {
    var element = document.getElementById("infoToggle");
      element.classList.toggle("infoToggle-on"); 
  }

  return (
    <div className="movieDetails" >
      <button id="infoButton"onClick={() =>{infoButton()}} />
      <h2 className="movieTitle">{movie.title}</h2>
      <h2 className="movieEpisode">Episode : {movie.episode_id}</h2>
      <h3 className="movieYear">Realese Date:&nbsp;{movie.release_date}</h3>
      <h3 className="movieProducer">By:&nbsp; {movie.producer}</h3>
      <button className="likeBtn" onClick={() =>{onFavoriteToggle(movie);}}>
        <div>
          { favorites.some(fav => fav.episode_id === movie.episode_id) ? "Like" : "Liked"} 
        </div>
      </button>
        <div className="infoBox">
          <p id="infoToggle" className="infoToggle-off"> {movie.opening_crawl} </p>
        </div>

    </div>
  );
}

export default MovieDetails;