const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");
app.use(express.json());
app.use(cors());

const port = 8080 || process.env.port;
app.get("/:city", (req, res) => {
  const { city } = req.params;

  fs.readFile(path.join(__dirname, "./db.json"), "utf-8", (err, data) => {
    if (!err) {
      data = JSON.parse(data);

      var data = data[city.toLowerCase()].filter((d) => d);

      return res.send( data );
    }
    res.send("err", err);
  });
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
