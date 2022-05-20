
const router = require('express').Router();
const {createNote} = require('../../lib/notes')
const {notes} = require('../../db/db.json')

//get the info from the notes array with a get api call
router.get("/notes", (req, res)=> {
    let results = notes
  
    res.json(results)
})

//update notes array with a new note

router.post('/notes', (req,res)=> {
    const results = notes;
    const note = createNote(req.body,results )
    res.json(results)

})
module.exports = router; 