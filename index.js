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
        "INSERT INTO players (description) VALUES($1) RETURNING *",
        [description]
      );
      console.log("posted");
      res.json(newName.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "my-app/build/index.html"))
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
