import "./App.scss";
import React, { useState, useEffect } from "react";
import { getPopularMovies, getGenre } from "./MOVIE_API";
import db from "./services/Firestore";

import { Switch, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import AddFilms from "./components/AddFilms";
import Footer from "./components/Footer";
import Search from "./components/Search";
import NewFilms from "./components/NewFilms";
import Details from "./components/Details";
import Back from "./components/Back";
import ScrollToTop from "./components/ScrollTop";
import ScrollAuto from "./components/ScrollAuto.js";

const App = () => {
  const location = useLocation();

  const [popular, setPopular] = useState(null);
  const [searchFilms, setSearchFilms] = useState(popular);
  const [genre, setGenre] = useState([]);
  const [newFilms, setNewFilms] = useState([]);

  useEffect(() => {
    getNewFilms();
    getPopularMovies().then((response) => setPopular(response));
    getGenre().then((response) => setGenre(response));
  }, []);

  const getNewFilms = async () => {
    const response = db.collection("films");
    const data = await response.get();
    const items = [];
    data.docs.forEach((item) => {
      items.push(item.data());
    }, []);
    setNewFilms(items);
  };

  useEffect(() => setSearchFilms(searchFilms), [searchFilms]);

  const searchedFilms = (search) => {
    setSearchFilms(
      popular.filter((movie) => movie.title.toLowerCase().includes(search))
    );
  };

  return (
    <div>
      <Navbar />
      <Search search={searchedFilms} />
      {location.pathname !== "/" && <Back />}
      <Switch>
        <Route path="/details/:id">
          {popular && <Details info={popular} genre={genre} />}
        </Route>
        <Route exact path="/">
          {popular && (
            <Overview data={searchFilms} allFilms={popular} genre={genre} />
          )}
        </Route>
        <Route path="/add">
          <AddFilms />
        </Route>
        <Route path="/new">
          <NewFilms data={newFilms} />
        </Route>
      </Switch>
      <ScrollToTop />
      <ScrollAuto />
      <Footer />
    </div>
  );
};

export default App;
