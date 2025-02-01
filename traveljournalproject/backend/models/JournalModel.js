import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  imageUrl: { type: String },
  user: { type: String, required: false },  // Make the 'user' field optional
});

const Journal = mongoose.model("Journal", journalSchema);
export default Journal;
