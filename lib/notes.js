const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

function createNote(body, notesArray) {
  const note = {title: body.title, text: body.text, id:uuidv4()}
  
  notesArray.push( note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
}

function deleteNote(notesArray, id) {
  console.log(id)
  
  notesArray.splice(id,1)
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2))
}

module.exports = {createNote, deleteNote };