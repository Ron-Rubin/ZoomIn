import React from "react";
import "./MovieItem.css";


function MovieItem({ movie, onMovieSelect }) {
  return (
    <div className="btnPlacer"                  /* --Placer for each button inside the movies-- */
        style = {{ backgroundImage: `url("../../images/img01Ep0${movie.episode_id}.jpg")`}}
        key={movie.episode_id}
    >
      <button onClick={() =>{onMovieSelect(movie)}} className="selected btn" > {/* Error #2 */}
          <p className="movieText"> View <br></br> {movie.title} </p>
      </button>
    </div>
  );
}

export default MovieItem;
