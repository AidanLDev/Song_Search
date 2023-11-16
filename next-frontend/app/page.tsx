"use client";
import styles from "./page.module.css";
import data from "../public/data/tracks.json";
import { getAllArtists, getByTitle, getByArtist } from "@/utils/AppUtils";
import { Button } from "@mui/material";
import { ArtistsDropdown } from "./components/ArtistsDropdown";
import { useState } from "react";
import { ITrack } from "@/interfaces/tracks";

export default function Home() {
  const [openArtistsDropdown, setOpenArtistsDropdown] = useState(false);
  const [activeTracks, setActiveTracks] = useState<ITrack[] | undefined>();
  const allArtists = getAllArtists(data.tracks);
  const getTrack = getByTitle(data.tracks, "Cold Harbour Woman");
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

  return (
    <main className={styles.main}>
      <Button
        onClick={handleOpenArtistsDropdown}
        aria-expanded={openArtistsDropdown ? "true" : undefined}
        aria-haspopup="true"
      >
        Select Artist
      </Button>
      <ArtistsDropdown
        artists={allArtists}
        open={openArtistsDropdown}
        close={handleCloseArtistsDropdown}
        selectArtist={handleSelectArtist}
      />
      {activeTracks && activeTracks.length > 0 && (
        <div>
          {<p>{activeTracks[0].artist}</p>}
          {activeTracks.map((track) => (
            <div key={track.id}>
              <span>{track.title}</span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
