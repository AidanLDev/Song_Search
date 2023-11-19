"use client";
import data from "../public/data/tracks.json";
import {
  getAllArtists,
  getByArtist,
  getAllTrackTitles,
  getByTitle,
} from "@/utils/AppUtils";
import { Button } from "@mui/material";
import { ArtistsDropdown } from "./components/ArtistsDropdown";
import React, { useState } from "react";
import { ITrack } from "@/interfaces/tracks";
import { TrackSearch } from "./components/TrackSearch";

export default function Home() {
  const [openArtistsDropdown, setOpenArtistsDropdown] = useState(false);
  const [activeTracks, setActiveTracks] = useState<
    ITrack[] | ITrack | undefined
  >();
  const allArtists = getAllArtists(data.tracks);
  const allTracks = getAllTrackTitles(data.tracks);

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

  return (
    <main>
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
      <TrackSearch
        allTracks={allTracks}
        getByTitle={getByTitle}
        setActiveTracks={setActiveTracks}
        tracks={data.tracks}
      />
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
