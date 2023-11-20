import { Button } from "@mui/material";
import React from "react";
import { ArtistsDropdown } from "./ArtistsDropdown";

interface ISelectArtists {
  handleOpenArtistsDropdown:(event: React.MouseEvent<HTMLElement>) => void;
  openArtistsDropdown: boolean;
  allArtists: string[];
  handleCloseArtistsDropdown: () => void;
  handleSelectArtist: (artist: string) => void;
  anchorEl: null | HTMLElement;
}

export const SelectArtists = ({
  handleOpenArtistsDropdown,
  openArtistsDropdown,
  allArtists,
  handleCloseArtistsDropdown,
  handleSelectArtist,
  anchorEl,
}: ISelectArtists) => {
  return (
    <>
      <Button
        onClick={handleOpenArtistsDropdown}
        aria-expanded={openArtistsDropdown ? "true" : undefined}
        aria-haspopup="true"
        className="text-slate-100"
        color="primary"
        variant="outlined"
      >
        Select from all Artists
      </Button>
      <ArtistsDropdown
        artists={allArtists}
        open={openArtistsDropdown}
        close={handleCloseArtistsDropdown}
        selectArtist={handleSelectArtist}
        anchorEl={anchorEl}
      />
    </>
  );
};
