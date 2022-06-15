const { Router } = require("express")
const router = Router();

const movies = require("../../sample.json");

router.get("/", (req, res) => {
  res.json(movies);
})

router.post("/", (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const newMovie = {
      id: movies.length + 1,
      ...req.body
    }
    movies.push(newMovie)
    res.status(400).json({ message: "You Movie was successfully saved", newMovie})
  } else {
    res.status(400).json("Wrong Request")
  }
})

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating == false) {
    res.status(400).json("Wrong Request")
  }

  let index = movies.findIndex((movie) => movie.id == id)
  
  if (index === -1) {
    res.status(404).json(`No movie with id: ${id} was found in database`)
  } else {
    const newMovie = {
      id: movies.length + 1,
      ...req.body
    }
    movies.splice(index, 1, newMovie)
    res.status(200).json(`Movie was succesfully updated`)
  }

})

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let index = movies.findIndex((movie) => movie.id == id)
  
  if (index === -1) {
    res.status(404).json(`No movie with id: ${id} was found in database`)
  } else {
    movies.splice(index, 1)
    res.status(200).json(`Movie was succesfully deleted`)
  }

})

module.exports = router;