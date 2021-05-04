import "./Search.scss";
import { Link } from "react-router-dom";
import iconLupe from "../assets/lupe.png";

const Search = (props) => {
  const search = (e) => {
    props.search(e.target.value.toLowerCase());
  };

  return (
    <aside className="searchbar">
      <figure>
        <Link to="/">
          <img src={iconLupe} alt="lupe" />
        </Link>
        <input
          onChange={(e) => search(e)}
          className="input"
          type="text"
          name="searchfield"
          placeholder="Search movie"
        ></input>
      </figure>
    </aside>
  );
};

export default Search;
