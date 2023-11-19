"use client";
import styles from "./page.module.css";
import data from "../public/data/tracks.json";
import { getAllArtists, getByTitle, getByArtist } from "@/utils/AppUtils";
import { Box, Button, TextField } from "@mui/material";
import { ArtistsDropdown } from "./components/ArtistsDropdown";
import React, { useState } from "react";
import { ITrack } from "@/interfaces/tracks";

export default function Home() {
  const [openArtistsDropdown, setOpenArtistsDropdown] = useState(false);
  const [searchedSong, setSearchedSong] = useState("");
  const [activeTracks, setActiveTracks] = useState<
    ITrack[] | ITrack | undefined
  >();
  const allArtists = getAllArtists(data.tracks);
  const artist = getByArtist(data.tracks, "3am");

  const handleOpenArtistsDropdown = () => {
    setOpenArtistsDropdown(!openArtistsDropdown);
  };

  const handleCloseArtistsDropdown = () => {
    setOpenArtistsDropdown(false);
  };

  const handleSelectArtist = (artist: string) => {
    setActiveTracks(getByArtist(data.tracks, artist));
    setOpenArtistsDropdown(false);
  };

  const handleTrackSearch = () => {
    const tracks = getByTitle(data.tracks, searchedSong);
    setActiveTracks(tracks);
    // TODO: Create not found state to display a message if we don't get any results
  };

  return (
    <main className={styles.main}>
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
      <Box>
        <TextField
          label="Search by title"
          variant="standard"
          InputLabelProps={{
            sx: { color: "#fff" },
          }}
          sx={{
            input: { color: "#FFF" },
          }}
          value={searchedSong}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchedSong(event.target.value)
          }
        />
        <Button onClick={() => handleTrackSearch()}>Search</Button>
      </Box>
      {activeTracks && Array.isArray(activeTracks) ? (
        // TODO: Make this a component to remove repition
        <div>
          {<p>{activeTracks[0].artist}</p>}
          {activeTracks.map((track) => (
            <div key={track.id}>
              <span>{track.title}</span>
            </div>
          ))}
        </div>
      ) : (
        activeTracks && (
          <div>
            <p>{activeTracks.artist}</p>
            <div>
              <span>{activeTracks.title}</span>
            </div>
          </div>
        )
      )}
    </main>
  );
}
