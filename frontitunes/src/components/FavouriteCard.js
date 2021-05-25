import React from "react";
import Card from "react-bootstrap/Card";
import { RiDeleteBin5Fill } from "react-icons/ri";

//here I create a function item favourites
// below is the function to delete from the array
//we create a clone then we remove the item from the array that is the index of removeitem
//and then we reset the state

function FavouriteCard({ favourite, setFav }) {
  const delFav = (removeItem) => {
    const newCopy = [...favourite];
    const index = newCopy.indexOf(removeItem);
    newCopy.splice(index, 1);

    setFav(newCopy);
  };

  //We need to create a delete function we will call it later on
  return (
    <div className="favouriteBlock">
      <div className="insideFavourite">
        <h1 className="hFavourites">FAVOURITES</h1>
        <Card id="favouritesId">
          {favourite.map((itemNew, idx) => (
            <div className="display-card-body" key={idx}>
              <Card.Link>
                <Card.Img src={itemNew.artworkUrl100} className="card-img" />
              </Card.Link>
              <Card.Body>
                <Card.Title>
                  <strong> {itemNew.trackName} </strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {itemNew.collectionId}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 card-type">
                  {itemNew.kind}
                </Card.Subtitle>
                <Card.Text> {itemNew.artistName} </Card.Text>
                <button
                  className="favButton"
                  id="addFavBtn"
                  onClick={() => delFav(itemNew)}
                >
                  <RiDeleteBin5Fill />
                  DELETE
                </button>
              </Card.Body>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default FavouriteCard;
