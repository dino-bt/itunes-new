import React, { useState } from "react";
//import ItemsCard from "./ItemsCard";
import { FcSearch } from "react-icons/fc";
import Card from "react-bootstrap/Card";
import { MdFavorite } from "react-icons/md";
import FavouriteCard from "./FavouriteCard";

const ItunesSearch = () => {
  //we create two use states where we will capture the information of the artist and the entity so that we can later use it to put it into the
  //from the api
  //we first get the the name of the artist the term and then api's and then we get the entity and set the entity
  //back into the api which we get a request from the server to add the information
  //we get the information back and set the information into items.
  //we will then create a state when the user clicks on favourites and then in favourites map through that to get our result
  const [items, setItems] = useState([]);
  const [term, setTerm] = useState("");
  const [option, setOption] = useState("");
  const [fav, setFav] = useState([]);
  //fetch the api from the server
  const searchItunes = async (e) => {
    e.preventDefault();

    fetch("/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        term: term,
        option: option,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data.results);
      });

    //const res = await fetch(`/search/${term}/${option}`);
    //const data = await res.json();
    //console.log(data)

    //setItems(data.results);
  };
  //here we will setFavourites by adding the new item into a fav array
  function setFavourites(item) {
    setFav([...fav, item]);
    alert("Your Item is now in favourites");
    console.log(fav);
  }

  return (
    <div className="searchDiv">
      <h3 id="searchId">SEARCH YOUR FAVOURITE ARTIST</h3>
      <hr />
      <div className="searchBox">
        <form onSubmit={searchItunes}>
          <input
            className="artistName"
            type="text"
            name="term"
            placeholder="Artist Name"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <br />
          <br />

          <button className="searchButton">
            SEARCH <FcSearch />
          </button>

          <br />

          <select
            className="select"
            value={option}
            onChange={(e) => setOption(e.target.value)}
            placeholder="media"
          >
            <option value="all">All</option>
            <option value="movie">Movie</option>
            <option value="podcast">Podcast</option>
            <option value="tvShow">TV Show</option>
            <option value="audiobook">Audio Book</option>

            <option value="music">Songs</option>

            <option value="ebook">E-Book</option>
          </select>
          <br />
        </form>
      </div>

      <Card>
        {items.map((item, idz) => (
          <div className="display-card-body" key={idz}>
            <Card.Link>
              <Card.Img src={item.artworkUrl100} className="card-img" />
            </Card.Link>
            <Card.Body>
              <Card.Title>
                <strong> {item.trackName} </strong>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                {item.collectionId}{" "}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 card-type">
                {" "}
                {item.kind}{" "}
              </Card.Subtitle>
              <Card.Text> {item.artistName} </Card.Text>
            </Card.Body>
            <button
              className="favButton"
              id="addFavBtn"
              onClick={() => setFavourites(item)}
            >
              <MdFavorite /> FAVOURITE
            </button>
          </div>
        ))}

        <FavouriteCard favourite={fav} setFav={setFav} />
      </Card>
    </div>
  );
};

//we map through the state(items) to get the id the kind the name the artist and the image
export default ItunesSearch;
