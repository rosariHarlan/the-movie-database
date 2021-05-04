import Card from "./Card";
import "./Overview.scss";
import { getImage } from "./../MOVIE_API";
import { Link } from "react-router-dom";
import popcorn_small from "../assets/popcorn_small.jpg";

const Overview = (props) => {
  const { data, allFilms, genre } = props;
  let currentData = [];

  if (data !== null) {
    currentData = data;
  } else {
    currentData = allFilms;
  }

  return (
    <section className="parentContainer popular">
      <h1>Popular Movies</h1>
      <div className="gallery">
        {currentData.length > 0 ? (
          currentData.map((item, i) => (
            <Card
              key={i}
              id={item.id}
              img={getImage(item.poster_path)}
              title={item.title}
              release={item.release_date}
              vote={item.vote_average}
              genreId={item.genre_ids}
              genreApi={genre}
            />
          ))
        ) : (
          <div className="error">
            <img src={popcorn_small} alt="popcorn" />
            <h2>
              Sorry, we can't find what you're looking for &#128546;, but go
              ahead and add it to our <Link to="/add">database!</Link> &#128515;
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Overview;
