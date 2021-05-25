const express = require("express");
const app = express();

const fetch = require("isomorphic-fetch");
//const fetch = require("isomorphic-fetch");

const path = require("path");
//var cors = require("cors");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontitunes/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontitunes", "build", "index.html"));
  });
}

//here we create the path and bellow we add the parameters term and option.

//we make a get request to determine the path  that the user will put in
//we then fetch from the api
// we get the data convert the response into a json file and send it back to the front end

app.post('/search', (req, res) => {
  let rawSearch = req.body.term;
  let option = req.body.option;
  // This is so that the format of the search bar is correct for the api
  let newTerm = rawSearch.split(" ").join("+");
  let url = `https://itunes.apple.com/search?term=${newTerm}&media=${option}`
  fetch(url)
  .then(res => res.json())
  .then(data => {
      res.send(data);
  })
  .catch(err => {
      res.send(err);
  });
});



/*app.get("/search/:term/:option", (req, res) => {
  
  const { term, option } = req.params;

  fetch(`https://itunes.apple.com/search?term=${term}&media=${option}`).then(res => res.json())
  .then(data => {
      res.send(data);
  })
  .catch(err => {
      res.send(err);
  });
});

*/
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});




/*.then(
  async (response) => {
    try {
      const data = await response.json();
      res.send(data);
    } catch (error) {
      console.log("Error happened here!");
      console.error(error);
    }
  }
); */