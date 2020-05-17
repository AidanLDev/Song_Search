const express = require('express');
const router = express.Router();
const musicController = require('../controller/music');

// GET /songs/id/:songId
router.get('/id/:songId', musicController.getSongById);

// GET /songs/:artist
router.get('/:artist', musicController.getSongByArtist);

module.exports = router;
