const Note = require('../models/Notes');

// CREATE Note
const createNote = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description)
    return res.status(400).json({ error: 'Title and description are required' });

  try {
    const newNote = new Note({
      title,
      description,
      author: req.user.id
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ error: 'Server error',error:err });
  }
};

// GET All Notes for the logged-in user
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// GET Single Note by ID (belongs to the user)
const getNoteById = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id });

    if (!note) return res.status(404).json({ error: 'Note not found' });

    res.json(note);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// UPDATE Note
const updateNote = async (req, res) => {
  const { title, description } = req.body;

  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id},
      { title, description },
      { new: true, runValidators: true }
    );

    if (!note) return res.status(404).json({ error: 'Note not found or unauthorized' });

    res.json(note);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// DELETE Note
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id });

    if (!note) return res.status(404).json({ error: 'Note not found or unauthorized' });

    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote
};
