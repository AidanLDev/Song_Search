import { Button } from "@mui/material";
import React from "react";
import { ArtistsDropdown } from "./ArtistsDropdown";

interface ISelectArtists {
  handleOpenArtistsDropdown: () => void;
  openArtistsDropdown: boolean;
  allArtists: string[];
  handleCloseArtistsDropdown: () => void;
  handleSelectArtist: (artist: string) => void;
}

export const SelectArtists = ({
  handleOpenArtistsDropdown,
  openArtistsDropdown,
  allArtists,
  handleCloseArtistsDropdown,
  handleSelectArtist,
}: ISelectArtists) => {
  return (
    <>
      <Button
        onClick={handleOpenArtistsDropdown}
        aria-expanded={openArtistsDropdown ? "true" : undefined}
        aria-haspopup="true"
      >
        Select from all Artists
      </Button>
      <ArtistsDropdown
        artists={allArtists}
        open={openArtistsDropdown}
        close={handleCloseArtistsDropdown}
        selectArtist={handleSelectArtist}
      />
    </>
  );
};
