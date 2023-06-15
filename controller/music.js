const { tracks } = require('../data/tracks.json');

// GET /song/:songId
exports.getSongById = (req, res, next) => {
  const songId = req.params.songId;

  const song = tracks.filter((track) => track.id === +songId);
  res.send(song);
};

// GET /songs/getartist/:artist
exports.getSongByArtist = (req, res, next) => {
  const artist = req.params.artist;

  const songs = tracks.filter((track) => track.artist === artist);
  res.send(songs);
};

//  GET /songs/all
exports.getAllTracks = (req, res, next) => {

  return res.send({ tracks })
}
