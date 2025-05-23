const { Router } = require("express");

const router = Router();

const { getNotes,createNote ,getNote,deleteNote,updateNote} = require("../controllers/note.controller.js");

router.route('/')
.get(getNotes)
.post(createNote)

router.route("/:id")
  .get(getNote)
  .put(updateNote)
  .delete(deleteNote);

module.exports = router;
