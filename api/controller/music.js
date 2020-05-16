const { tracks } = require('../../data/tracks.json');

// GET /song/:songId
exports.getSongById = (req, res, next) => {
  const songId = req.params.songId;

  const song = tracks.filter((track) => track.id === +songId);
  res.send(song);
};

// GET /songs/:artist
exports.getSongByArtist = (req, res, next) => {
  const artist = req.params.artist;

  const songs = tracks.filter((track) => track.artist === artist);
  res.send(songs);
};
