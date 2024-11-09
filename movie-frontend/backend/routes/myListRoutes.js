// import express from "express";
// import mongoose from "mongoose"; // Import mongoose for validation
// import Movie from "../models/movie.js";
// import MyList from "../models/myList.js";

// const router = express.Router();

// // Get all movies in My List
// router.get("/", async (req, res) => {
//   try {
//     const myListMovies = await MyList.find();
//     res.json(myListMovies);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Add a movie to My List by fetching from Movies collection
// router.post("/:id", async (req, res) => {
//   const movieId = req.params.id; // Movie _id passed in the URL
//   console.log("Received movieId:", movieId); // Log movieId for debugging

//   // Check if the movieId is valid
//   if (!mongoose.Types.ObjectId.isValid(movieId)) {
//     return res.status(400).json({ message: "Invalid movie ID format" });
//   }

//   try {
//     // Fetch the movie from the Movies collection using _id
//     const movie = await Movie.findById(movieId);
//     console.log("Fetched movie:", movie); // Log the fetched movie for debugging

//     if (!movie) {
//       return res.status(404).json({ message: "Movie not found" });
//     }

//     // Add the movie to My List collection
//     const myListMovie = new MyList(movie.toObject());
//     await myListMovie.save();

//     res.json("Movie has been added to My List!");
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Remove a movie from My List
// router.delete("/:id", async (req, res) => {
//   try {
//     await MyList.findByIdAndDelete(req.params.id);
//     res.json("The movie has been removed from My List!");
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
import express from "express";
import mongoose from "mongoose"; // Import mongoose for validation
import Movie from "../models/movie.js";
import MyList from "../models/myList.js";

const router = express.Router();

// Get all movies in My List
router.get("/", async (req, res) => {
  try {
    const myListMovies = await MyList.find();
    res.json(myListMovies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a movie to My List by fetching from Movies collection
router.post("/:id", async (req, res) => {
  const movieId = req.params.id; // Movie _id passed in the URL
  console.log("Received movieId:", movieId); // Log movieId for debugging

  // Check if the movieId is valid
  if (!mongoose.Types.ObjectId.isValid(movieId)) {
    return res.status(400).json({ message: "Invalid movie ID format" });
  }

  try {
    // Fetch the movie from the Movies collection using _id
    const movie = await Movie.findById(movieId);
    console.log("Fetched movie:", movie); // Log the fetched movie for debugging

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // Add the movie to My List collection
    const myListMovie = new MyList(movie.toObject());
    await myListMovie.save();

    res.json("Movie has been added to My List!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove a movie from My List
router.delete("/:id", async (req, res) => {
  try {
    await MyList.findByIdAndDelete(req.params.id);
    res.json("The movie has been removed from My List!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
