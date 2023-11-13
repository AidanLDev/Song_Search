const express = require('express');
const router = express.Router();
const musicController = require('../controller/music');

// GET /songs/id/:songId
router.get('/id/:songId', musicController.getSongById);

// GET /songs/:artist
router.get('/getartist/:artist', musicController.getSongByArtist);

// GET /songs/all
router.get('/all', musicController.getAllTracks)

module.exports = router;
