import React, { useState, useEffect } from "react";
import { fetchMovies } from "@/services/api";
import MovieItem from "@/components/MovieItem/MovieItem";
import Loading from "@/components/Loading/Loading";
import "./MovieList.css";

function MovieList({ onMovieSelect }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="listZone"> {/* --The outer part of the movies list box-- */}
          {movies.map(movie => (
            <div className="listPlacer"> {/* --The inner part of the movies list box-- */}
              <MovieItem key={movie.episode_id} movie={movie} onMovieSelect={onMovieSelect} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
