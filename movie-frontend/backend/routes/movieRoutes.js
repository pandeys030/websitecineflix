// // routes/movieRoutes.js
// import express from "express";
// import Movie from "../models/movie.js";

// const router = express.Router();

// // Get all movies
// router.get("/", async (req, res) => {
//   try {
//     const movies = await Movie.find();
//     res.json(movies);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get a movie by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const movie = await Movie.findById(req.params.id);
//     if (!movie) return res.status(404).json({ message: "Movie not found" });
//     res.json(movie);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
import express from "express";
import Movie from "../models/movie.js";

const router = express.Router();

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a movie by ID
router.get("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid movie ID format' });
  }
  try {
    const movie = await Movie.findById(req.params.id);
    console.log("Searching for movie with ID:", req.params.id);

    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
