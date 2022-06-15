const express = require("express");
const morgan = require("morgan");
const app = express();

// middlewares (morgan lets me see what the server receives). 
// Middleware: A function that processes functions before the server receives them.

//settings
app.set("port", process.env.PORT || 3000);

//dev, combined
app.use(morgan("dev"));
app.use(express.urlencoded({ extended:false } ));
app.use(express.json())

//routes
// app.get( "/" , (req, res) => {
//   res.json({"title": "Hellow World"})
// })
app.use(require("./routes/index"));
app.use("/api/movies", require("./routes/movies"))

app.listen( app.get("port"), () => {
  console.log(`Listening in port ${ app.get("port")}`)
});

