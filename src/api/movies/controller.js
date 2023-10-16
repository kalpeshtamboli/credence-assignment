const Item = require("./schema/schema");

const movies = (req, res) => {
  const newItem = new Item(req.body);
  console.log("newItem", newItem);
  newItem
    .save()
    .then((movies) => {
      res.status(201).json(movies);
    })
    .catch((err) => console.log(err));
};

const getMoviesDetail = (req, res) => {
  Item.find()
    .then((movie) => {
      if (!movie) {
        return res.status(200).json({ message: "Movie found" });
      }
      res.status(404).json({ message: "Movie Found", movie });
    })
    .catch((err) => {
      res.status(500).json({ message: "Intenal Server Error" });
    });
};
const getMovieById = (req, res) => {
  const movieId = req.params.id;

  Item.findById(movieId)
    .then((movie) => {
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json({ message: "Movie Found", movie });
    })
    .catch((error) => {
      console.log("error", error);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

const updateMovie = (req, res) => {
  const movieId = req.params.id;
  const updateData = req.body;

  Item.findByIdAndUpdate(movieId, updateData, { new: true })
    .then((movie) => {
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json({ message: "Movie updated successfully", movie });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    });
};

const deleteMovie = (req, res) => {
  const movieId = req.params.id;

  Item.findByIdAndRemove(movieId)
    .then((movie) => {
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json({ message: "Movie deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    });
};

module.exports = {
  movies,
  getMoviesDetail,
  getMovieById,
  deleteMovie,
  updateMovie,
};
