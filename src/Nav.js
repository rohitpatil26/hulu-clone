import React from "react";
import "./Nav.css";
import request from "./request";

function Nav({ setselectedOptions }) {
  return (
    <div className="nav">
      <h2 onClick={() => setselectedOptions(request.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setselectedOptions(request.fetchTopReated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setselectedOptions(request.fetchActionMovies)}>
        Actions
      </h2>
      <h2 onClick={() => setselectedOptions(request.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setselectedOptions(request.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setselectedOptions(request.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setselectedOptions(request.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setselectedOptions(request.fetchSciFi)}>Sci-Fi</h2>
      <h2 onClick={() => setselectedOptions(request.fetchWestern)}>Western</h2>
      <h2 onClick={() => setselectedOptions(request.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setselectedOptions(request.fetchTrending)}>
        TV Movie
      </h2>
    </div>
  );
}

export default Nav;
