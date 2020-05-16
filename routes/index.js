const express = require('express');
const router = express.Router();
const musicController = require('../controller/music');

// GET /song/:songId
router.get('/song/:songId', musicController.getSongById);

// GET /songs/:artist
router.get('/songs/:artist', musicController.getSongByArtist);

module.exports = router;
