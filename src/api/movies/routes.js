const router = require("express").Router();
const {
  allMovies,
  movies,
  getMoviesDetail,
  getMovieById,
  deleteMovie,
  updateMovie,
} = require("./controller");
router.get("/all", allMovies);
router.post("/moviesDetail", movies);
router.get("/getMovies", getMoviesDetail);
router.get("/movie/:id", getMovieById);
router.delete("/deleteMovie/:id", deleteMovie);
router.put("/updateMovie/:id", updateMovie);
module.exports = router;
