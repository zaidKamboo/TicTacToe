const express = require("express");
const gameDetails = require("../Models/GameDetails");

const router = express.Router();

router.post("/addPlayedGame", async (req, res) => {
  const { player1, player2, gameStatus } = req.body;
  try {
    const newDet = await gameDetails.create({ player1, player2, gameStatus });
    res.status(200).json({ result: newDet, success: true });
    console.log("Game saved successfully.");
  } catch (error) {
    res.status(500).json({ message: "Something went wrong..." });
  }
});

router.get("/getPlayedGames", async (req, res) => {
  try {
    const page = parseInt(req.query.page || 1, 10); // Convert page to a number (default to 1)
    const itemsPerPage = 6;
    let startIndex = 0; // Default starting index for the first page

    if (page > 1) {
      startIndex = (page - 1) * itemsPerPage; // Skip initial 5 items for subsequent pages
    }

    // Using async/await with the find query
    const tr = await gameDetails.find({});
    var totalResults = tr.length;
    const data = await gameDetails
      .find({}) // Find all documents in the collection (you might want to add conditions here if needed)
      .skip(startIndex) // Skip documents from the beginning
      .limit(itemsPerPage); // Limit the number of documents returned

    console.log(totalResults);
    // Respond with the retrieved data as JSON
    res.json({ data, totalResults });

    // Log success message (this will be printed on the server console)
    console.log("Details sent successfully.");
  } catch (error) {
    // If an error occurs during the process, send an error response
    res.status(500).json({ message: "Error fetching data", error: error });
  }
});

module.exports = router;
