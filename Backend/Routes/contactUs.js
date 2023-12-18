const express = require("express");
const contactUs = require("../Models/ContactUs");
const ContactUs = require("../Models/ContactUs");

const router = express.Router();

router.post("/addMessage", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = await contactUs.create({ name, email, message });
    res.status(200).json({ result: newMessage, success: true });
    console.log("Message saved successfully.");
  } catch (error) {
    res.status(500).json({ message: "Something went wrong..." });
  }
});

router.get("/getMessages", async (req, res) => {
  try {
    // const newData = await contactUs.find({});
    // return res.json({ data: newData, once: true });
    try {
      const page = parseInt(req.query.page || 1, 10); // Convert page to a number (default to 1)
      const itemsPerPage = 6;
      let startIndex = 0; // Default starting index for the first page

      if (page > 1) {
        startIndex = (page - 1) * itemsPerPage; // Skip initial 5 items for subsequent pages
      }

      // Using async/await with the find query
      const tr = await ContactUs.find({});
      var totalResults = tr.length;
      const data = await ContactUs.find({}) // Find all documents in the collection (you might want to add conditions here if needed)
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
  } catch (error) {
    return res.json({ message: "Something went wrong...", error: error });
  }
});

module.exports = router;
