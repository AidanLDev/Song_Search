import { ITrack } from "@/interfaces/tracks";

export const getAllArtists = (tracks: ITrack[]) => {
  return [...new Set(tracks.map((track) => track.artist))];
};

export const getByTitle = (tracks: ITrack[], songTitle: string) => {
  return tracks.find(
    (track) => track.title.toLowerCase() === songTitle.toLowerCase()
  );
};
