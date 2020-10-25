import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import FlipMove from "react-flip-move";

function Results({ selectedOptions }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(selectedOptions);
      if (response.data.results) {
        setmovies(response.data.results);
        return response;
      }
    }

    fetchData();
  }, [selectedOptions]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => {
          return <VideoCard key={movie.id} movie={movie} />;
        })}
      </FlipMove>
    </div>
  );
}

export default Results;
