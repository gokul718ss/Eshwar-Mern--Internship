// import express from "express";
// import Journal from "../models/JournalModel.js";  // Journal model
// const router = express.Router();

// // Get all journals
// router.get("/", async (req, res) => {
//   try {
//     const journals = await Journal.find();
//     res.json(journals);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });

// // Create a new journal
// router.post("/", async (req, res) => {
//   try {
//     const { title, description, location, date, imageUrl, user } = req.body;

//     const newJournal = new Journal({
//       title,
//       description,
//       location,
//       date,
//       imageUrl,
//       user,  // Assuming `user` is passed in request
//     });

//     const savedJournal = await newJournal.save();
//     res.json(savedJournal);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });

// export default router;




// import express from "express";
// import multer from "multer";
// import Journal from "../models/JournalModel.js";

// // Configure multer for file storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save files in 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // Unique filename
//   },
// });

// const upload = multer({ storage });

// const router = express.Router();

// // Create a journal entry with image upload
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     const { title, description, location, date, user } = req.body;
//     const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Save file path

//     const newJournal = new Journal({
//       title,
//       description,
//       location,
//       date,
//       imageUrl,
//       user,
//     });

//     await newJournal.save();
//     res.status(201).json(newJournal);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });

// export default router;


import express from "express";
import Journal from "../models/JournalModel.js"; // Import the model

const router = express.Router();

// GET route for fetching all journals
router.get("/", async (req, res) => {
  try {
    const journals = await Journal.find(); // Fetch all journals from the database
    res.json(journals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching journals", error: error.message });
  }
});

export default router;
