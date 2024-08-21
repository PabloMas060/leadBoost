const express = require("express");
const path = require("path");

const app = express();
const PORT = 3030;

app.use(express.static('public'));

/* rutas */
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);
app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "about.html"))
);
app.get("/services", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "music.html"))
);
app.get("/*",(req,res) => 
res.sendFile(path.join(__dirname,"views","404notfound.html"))
)


app.listen(PORT, () =>
  console.log("Server running in http://localhost:" + PORT)
);
