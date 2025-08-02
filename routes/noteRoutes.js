const express = require('express');
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote
} = require('../coontrollers/noteController');

const authenticate = require('../middlewares/authMiddleware'); 

const noteRouter = express.Router();



noteRouter.post('/create',authenticate, createNote);
noteRouter.get('/', getNotes);
noteRouter.get('/:id',authenticate, getNoteById);
noteRouter.put('/update/:id',authenticate, updateNote);
noteRouter.delete('/delete/:id',authenticate, deleteNote);

module.exports = noteRouter;
