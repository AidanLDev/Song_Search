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
import { Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeOptions } from "@/utils/MuiTheme";
import { TrackResults } from "./components/TrackResults";
import { Title } from "./components/Title";

const theme = createTheme(themeOptions);

export default function Home() {
  const [openArtistsDropdown, setOpenArtistsDropdown] = useState(false);
  const [activeTracks, setActiveTracks] = useState<
    ITrack[] | ITrack | undefined
  >();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const allArtists = getAllArtists(data.tracks);
  const allTracks = getAllTrackTitles(data.tracks);

  const handleOpenArtistsDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
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
    <ThemeProvider theme={theme}>
      <div className="h-screen overflow-hidden bg-[url('/images/bg-masthead.webp')] bg-cover bg-no-repeat z-10 bg-gray-600 bg-blend-multiply">
        <main className="m-14 overflow-hidden z-20 flex col justify-center align-middle">
          <Stack height="100vh" gap={4} width="40rem" justifyContent="center">
            <Title />
            <SelectArtists
              handleOpenArtistsDropdown={handleOpenArtistsDropdown}
              openArtistsDropdown={openArtistsDropdown}
              allArtists={allArtists}
              handleCloseArtistsDropdown={handleCloseArtistsDropdown}
              handleSelectArtist={handleSelectArtist}
              anchorEl={anchorEl}
            />
            <TrackSearch
              allTracks={allTracks}
              getByTitle={getByTitle}
              setActiveTracks={setActiveTracks}
              tracks={data.tracks}
            />
            {activeTracks && <TrackResults activeTracks={activeTracks} />}
          </Stack>
        </main>
      </div>
    </ThemeProvider>
  );
}
