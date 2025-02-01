const Journal = require('../models/Journal');

// Create a new journal entry
exports.createJournal = async (req, res) => {
  const { title, content, date, location, image, rating, favorites } = req.body;

  try {
    const journal = new Journal({
      title,
      content,
      date,
      location,
      image,
      rating,
      favorites,
      user: req.userId, // Attach the logged-in user
    });

    await journal.save();
    res.status(201).json(journal);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all journal entries for a specific user
exports.getJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ user: req.userId });
    res.status(200).json(journals);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a journal entry
exports.updateJournal = async (req, res) => {
  const { title, content, date, location, image, rating, favorites } = req.body;

  try {
    const journal = await Journal.findByIdAndUpdate(
      req.params.id,
      { title, content, date, location, image, rating, favorites },
      { new: true }
    );
    res.status(200).json(journal);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a journal entry
exports.deleteJournal = async (req, res) => {
  try {
    await Journal.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Journal deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
