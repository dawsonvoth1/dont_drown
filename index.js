const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path =require("path");
const PORT = process.env.PORT || 5000;

//process.env.NODE_ENV => production or underfined

//middleware
app.use(cors());
app.use(express.json()); //req.body

if(process.env.NODE_ENV === "production"){
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "my-app/build")));
};

console.log(__dirname);
console.log(path.join(__dirname, "my-app/build"));

//ROUTES//

//create a name

app.post("/players", async (req, res) => {
    try {
      console.log(req.body);
      const { description } = req.body;
      const newName = await pool.query(
        "INSERT INTO player (description) VALUES($1) RETURNING *",
        [description]
      );
      console.log("posted");
      res.json(newName.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

//get all players

app.get("/players", async (req, res) => {
    try {
      const allplayers = await pool.query("SELECT * FROM player");
      res.json(allplayers.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get a player
  
  app.get("/players/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const player = await pool.query("SELECT * FROM player WHERE player_id = $1", [
        id
      ]);
      console.log("got");
      res.json(player.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //update a player
  
  app.put("/players/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updateplayer = await pool.query(
        "UPDATE player SET description = $1 WHERE player_id = $2",
        [description, id]
      );
      console.log("put");
      res.json("player was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //delete a player
  
  app.delete("/players/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteplayer = await pool.query("DELETE FROM player WHERE player_id = $1", [
        id
      ]);
      console.log("deleted");
      res.json("player was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "my-app/build/index.html"))
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
