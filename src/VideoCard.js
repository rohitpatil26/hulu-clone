import React, { forwardRef } from "react";
import TextTruncate from "react-text-truncate";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import "./VideoCard.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videocard">
      <img
        alt=""
        src={`${base_url}${movie.poster_path || movie.backdrop_path}`}
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="…"
        text={movie.overview}
        // textTruncateChild={<a href="#">Read on</a>}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videocard_stats">
        {movie.media_type && `${movie.media_type} .`}
        {movie.release_date} <ThumbUpAltIcon /> {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
