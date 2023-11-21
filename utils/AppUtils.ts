import { ITrack } from "@/interfaces/tracks";

export const getAllArtists = (tracks: ITrack[]) => {
  return [...new Set(tracks.map((track) => track.artist))];
};

export const getAllTrackTitles = (tracks: ITrack[]) => {
  return [...new Set(tracks.map((track) => track.title))];
};

export const getByArtist = (tracks: ITrack[], artist: string) => {
  return tracks.filter(
    (track) => track.artist.toLowerCase() === artist.toLowerCase()
  );
};

export const getByTitle = (tracks: ITrack[], songTitle: string) => {
  return tracks.find((track) => track.title === songTitle);
};
