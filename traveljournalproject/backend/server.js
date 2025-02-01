import express from "express";
import multer from "multer";
import path from "path";
import mongoose from "mongoose";
import cors from "cors";
import Journal from "./models/JournalModel.js";

// MongoDB connection URI (replace with your MongoDB URI)
const mongoURI = "mongodb://127.0.0.1:27017/traveljournal"; // For local MongoDB

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store files in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

const app = express();

// Middleware
app.use(express.json());
app.use(cors());  // Enable CORS
app.use("/uploads", express.static("uploads")); // Serve uploaded files

// POST route to create a journal entry with image upload
app.post("/api/journals", upload.single("image"), async (req, res) => {
  try {
    const { title, description, location, date, user } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newJournal = new Journal({
      title,
      description,
      location,
      date,
      imageUrl,
      user, // Ensure user is passed from the frontend
    });

    await newJournal.save();
    res.status(201).json(newJournal);
  } catch (error) {
    res.status(500).json({ message: "Error creating journal", error: error.message });
  }
});

// GET route to fetch all journals
app.get("/api/journals", async (req, res) => {
  try {
    const journals = await Journal.find();  // Fetch all journals from the database
    res.status(200).json(journals);  // Return the journals as JSON
  } catch (error) {
    res.status(500).json({ message: "Error fetching journals", error: error.message });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
