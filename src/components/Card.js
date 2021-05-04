import { Link } from "react-router-dom";

const Card = (props) => {
  const { title, release, vote, img, id, genreId, genreApi } = props;

  let allGenreNames = [];

  genreId.map((genreId) => {
    genreApi.map((genreNames) => {
      if (genreId === genreNames.id) {
        return allGenreNames.push(genreNames.name);
      }
      return allGenreNames;
    });
    return allGenreNames;
  });

  return (
    <div className="grid-item" key={id}>
      <div className="vote-container">
        <p className="vote">{vote}</p>
        <Link to={`/details/${id}`}>
          <img src={img} alt={title} />
        </Link>
      </div>
      <p>
        {release.slice(0, 4)} &#8212; {allGenreNames.join(" ")}
      </p>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
