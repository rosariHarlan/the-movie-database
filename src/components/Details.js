import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImage, getVideo } from "./../MOVIE_API";
import axios from "axios";
import "./Details.scss";

const Details = (props) => {
  let { id } = useParams();
  const movieId = props.info.find((x) => x.id === parseInt(id));

  const [video, setVideo] = useState(null);
  // const [streaming, setStreaming] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a3de086266723f37ed7fb28d7fa9ae25&language=en-US`
      )
      .then((res) => setVideo(res.data.results));
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=a3de086266723f37ed7fb28d7fa9ae25`
    //   )
    //   .then((res) => setStreaming(res.data.results.US));
  }, [id]);

  let allGenreNames = [];
  movieId.genre_ids.map((genreId) => {
    props.genre.map((names) => {
      if (genreId === names.id) {
        return allGenreNames.push(names.name);
      }
      return allGenreNames;
    });
    return allGenreNames;
  });

  return (
    <section id="details" className="parentContainer">
      <div className="details-content">
        <div className="left-side">
          <h1>{movieId.title}</h1>
          <img src={getImage(movieId.poster_path)} alt={movieId.title} />
        </div>
        <div className="right-side">
          <div className="info">
            <h2>Release Date</h2>
            <p>{movieId.release_date}</p>
            <h2>Genres</h2>
            <p>{allGenreNames.join(" ")}</p>
            <h2>Overview</h2>
            <p className="clear">{movieId.overview}</p>
            <h2>Average Voting</h2>
            <p>{movieId.vote_average}</p>
          </div>
          <div className="trailer">
            <h2>Watch Trailer</h2>
            <div className="video-container">
              {video && (
                <iframe
                  width="467"
                  height="259"
                  src={getVideo(video[0].key)}
                  title={`Trailer of ${movieId.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              )}
            </div>
          </div>
          {/* <div className="streaming">
            {streaming && (
              <div>
                <h2>Available On</h2>
                <a href={streaming.link} rel="noreferrer" target="_blank">
                  <img
                    src={getImage(streaming.flatrate[0].logo_path)}
                    alt={streaming.flatrate[0].provider_name}
                  />
                </a>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Details;
