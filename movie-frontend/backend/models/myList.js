import mongoose from 'mongoose';


// Define the schema for the MyList collection
const myListSchema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true }, // Link to a movie document
  addedAt: { type: Date, default: Date.now } // Timestamp for when the movie was added to My List
});

const MyList = mongoose.model('MyList', myListSchema);  // Create the MyList model
module.exports = MyList;
