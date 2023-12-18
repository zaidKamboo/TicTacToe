const mongoose = require("mongoose");

const gameDetailsSchema = new mongoose.Schema({
  player1: {
    type: String,
    required: true,
  },
  player2: {
    type: String,
    required: true,
  },
  gameStatus: {
    type: String,
    required: true,
  },
  playedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("gameDetails", gameDetailsSchema);
