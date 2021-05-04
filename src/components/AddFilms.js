import React from "react";
import db from "../services/Firestore";

import "./AddFilms.scss";
import Modal from "./Modal";

class AddFilms extends React.Component {
  
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      link: "",
      date: "",
      voting: "",
      genre: "",
      trailer: "",
      modal: (false),
    }
  }


  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addNewFilm = (e) => {
    e.preventDefault();
    e.target.reset();

    this.setState({
      name: "",
      description: "",
      link: "",
      date: "",
      voting: "",
      genre: "",
      trailer: "",
      modal: (true),
    });

    const userRef = db.collection("films").add({
      name: this.state.name,
      description: this.state.description,
      link: this.state.link,
      date: this.state.date,
      voting: this.state.voting,
      genre: this.state.genre,
      trailer: this.state.trailer,
    });

    this.setState({
      name: "",
      description: "",
      link: "",
      date: "",
      voting: "",
      genre: "",
      trailer: "",
    });
    

    userRef.then((response) => {
      // window.location.reload();
      
    });
  };

   
  render() {
    
    return (
      <section className="parentContainer">
        <h1>Add your own movie</h1>
        <form
          className="form-add"
          action=""
          onSubmit={this.addNewFilm}
          data={this.db}
        >
          <input
            type="text"
            placeholder="Name of the movie"
            name="name"
            onChange={this.updateInput}
            value={this.state.name}
            required
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.updateInput}
            value={this.state.description}
            required
          />
          <input
            type="text"
            placeholder="Link to movie poster"
            name="link"
            onChange={this.updateInput}
            value={this.state.link}
            required
          />
          <input
            type="text"
            placeholder="Release Date"
            name="date"
            onChange={this.updateInput}
            value={this.state.date}
            required
          />
          <input
            type="text"
            placeholder="Voting"
            name="voting"
            onChange={this.updateInput}
            value={this.state.voting}
            required
          />
          <input
            type="text"
            placeholder="Genres"
            name="genre"
            onChange={this.updateInput}
            value={this.state.genre}
            required
          />
          <input
            type="text"
            placeholder="Link to trailer"
            name="trailer"
            onChange={this.updateInput}
            value={this.state.trailer}
            required
          />
          <input type="submit" name="submit" id="submit" className="submit"/>
          <Modal show={this.state.modal}/>
        </form>
        
      </section>
    );
  }
}
export default AddFilms;
