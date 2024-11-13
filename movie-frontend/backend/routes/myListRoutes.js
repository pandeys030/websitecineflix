// routes/myListRoutes.js
const express = require("express");
const MyList = require("../models/myList.js");

const router = express.Router();

router.post('/', async (req, res) => {
  const { movieId, title } = req.body;

 
  const existingMovie = await MyList.findOne({ where: { movieId } });
  
  if (existingMovie) {
    return res.status(400).json({ message: 'Movie is already in your list.' });
  }

  
  try {
    const newMovie = await MyList.create({ movieId, title });
    return res.status(200).json(newMovie);
  } catch (error) {
    return res.status(500).json({ message: 'Error adding movie to the list.' });
  }
});


router.get("/", async (req, res) => {
  try {
    const moviesInList = await MyList.find(); 
    res.status(200).json(moviesInList);
  } catch (error) {
    console.error("Error fetching My List:", error);
    res.status(500).json({ message: "Failed to fetch My List" });
  }
});

module.exports = router;
