"use client";
import data from "../public/data/tracks.json";
import {
  getAllArtists,
  getByArtist,
  getAllTrackTitles,
  getByTitle,
} from "@/utils/AppUtils";
import React, { useState } from "react";
import { ITrack } from "@/interfaces/tracks";
import { TrackSearch } from "./components/TrackSearch";
import { SelectArtists } from "./components/artistsSelect/SelectArtists";
import Image from "next/image";
import { Stack } from "@mui/material";

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
    <main className="m-14 overflow-hidden">
      <Image
        src="/images/bg-masthead.webp"
        alt="Background image of musical instruments"
        layout="fill"
      />
      <Stack height="100vh" justifyContent="center">
        <SelectArtists
          handleOpenArtistsDropdown={handleOpenArtistsDropdown}
          openArtistsDropdown={openArtistsDropdown}
          allArtists={allArtists}
          handleCloseArtistsDropdown={handleCloseArtistsDropdown}
          handleSelectArtist={handleSelectArtist}
        />
        <TrackSearch
          allTracks={allTracks}
          getByTitle={getByTitle}
          setActiveTracks={setActiveTracks}
          tracks={data.tracks}
        />

        {activeTracks && Array.isArray(activeTracks) ? (
          // TODO: Make this a component to remove repition
          <div style={{ color: "#fff", position: "relative" }}>
            {<p>{activeTracks[0].artist}</p>}
            {activeTracks.map((track) => (
              <div key={track.id}>
                <span>{track.title}</span>
              </div>
            ))}
          </div>
        ) : (
          activeTracks && (
            <div style={{ color: "#fff", position: "relative" }}>
              <p>{activeTracks.artist}</p>
              <div>
                <span>{activeTracks.title}</span>
              </div>
            </div>
          )
        )}
      </Stack>
    </main>
  );
}
