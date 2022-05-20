const res = require('express/lib/response');
const path = require('path')
const router = require('express').Router();

router.get('/notes', (req, rest)=> {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
})

router.get('*', (req, rest)=> {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})
module.exports = router;