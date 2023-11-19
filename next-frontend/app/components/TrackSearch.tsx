import { ITrack } from "@/interfaces/tracks";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";

interface ITrackSearchProps {
  allTracks: string[];
  getByTitle: (tracks: ITrack[], songTitle: string) => ITrack | undefined;
  tracks: ITrack[];
  setActiveTracks: React.Dispatch<
    React.SetStateAction<ITrack | ITrack[] | undefined>
  >;
}

export const TrackSearch = ({
  allTracks,
  getByTitle,
  tracks,
  setActiveTracks,
}: ITrackSearchProps) => {
  return (
    <Autocomplete
      options={allTracks}
      onChange={(event: any, newValue: string | null) => {
        const selectedTrack = newValue;
        if (selectedTrack !== null) {
          const artistInformation = getByTitle(tracks, selectedTrack);
          setActiveTracks(artistInformation);
        }
      }}
      renderInput={(params) => (
        <TextField
          label="Search by title"
          variant="standard"
          // InputLabelProps={{
          //   sx: { color: "#fff" },
          // }}
          sx={{
            input: { color: "#FFF" },
            color: "#fff",
          }}
          {...params}
        />
      )}
    />
  );
};
